import type { PageServerLoad } from './$types';

interface GatusEndpoint {
	name: string;
	group: string;
	key: string;
	results: Array<{
		status: number;
		hostname: string;
		duration: number;
		conditionResults: Array<{
			condition: string;
			success: boolean;
		}>;
		success: boolean;
		timestamp: string;
	}>;
}

interface GatusResponse {
	[key: string]: GatusEndpoint;
}

export interface StatusData {
	services: Array<{
		name: string;
		group: string;
		status: 'operational' | 'degraded' | 'down' | 'unknown';
		uptime: number;
		responseTime: number | null;
		lastChecked: string | null;
	}>;
	lastUpdated: string;
	error?: string;
}

export const load: PageServerLoad = async ({ fetch }): Promise<StatusData> => {
	try {
		const response = await fetch('https://status.asandov.com/api/v1/endpoints/statuses');

		if (!response.ok) {
			throw new Error(`Failed to fetch status: ${response.status}`);
		}

		const data: GatusResponse = await response.json();

		const services = Object.values(data).map((endpoint) => {
			const recentResults = endpoint.results || [];
			const latestResult = recentResults[0];

			// Calculate uptime from recent results
			const successCount = recentResults.filter(r => r.success).length;
			const uptime = recentResults.length > 0
				? Math.round((successCount / recentResults.length) * 100)
				: 100;

			// Determine status
			let status: 'operational' | 'degraded' | 'down' | 'unknown' = 'unknown';
			if (recentResults.length === 0) {
				status = 'unknown';
			} else if (latestResult?.success) {
				status = uptime >= 99 ? 'operational' : 'degraded';
			} else {
				status = 'down';
			}

			return {
				name: endpoint.name,
				group: endpoint.group,
				status,
				uptime,
				responseTime: latestResult?.duration ? Math.round(latestResult.duration / 1000000) : null,
				lastChecked: latestResult?.timestamp || null
			};
		});

		// Sort by group then name
		services.sort((a, b) => {
			if (a.group !== b.group) return a.group.localeCompare(b.group);
			return a.name.localeCompare(b.name);
		});

		return {
			services,
			lastUpdated: new Date().toISOString()
		};
	} catch (error) {
		console.error('Error fetching status:', error);
		return {
			services: [],
			lastUpdated: new Date().toISOString(),
			error: error instanceof Error ? error.message : 'Failed to fetch status'
		};
	}
};
