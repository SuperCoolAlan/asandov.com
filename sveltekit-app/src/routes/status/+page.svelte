<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	function getStatusColor(status: string) {
		switch (status) {
			case 'operational':
				return 'bg-green-500';
			case 'degraded':
				return 'bg-yellow-500';
			case 'down':
				return 'bg-red-500';
			default:
				return 'bg-slate-400';
		}
	}

	function getStatusText(status: string) {
		switch (status) {
			case 'operational':
				return 'Operational';
			case 'degraded':
				return 'Degraded';
			case 'down':
				return 'Down';
			default:
				return 'Unknown';
		}
	}

	function formatTime(isoString: string | null) {
		if (!isoString) return 'Never';
		const date = new Date(isoString);
		return date.toLocaleTimeString(undefined, {
			hour: '2-digit',
			minute: '2-digit'
		});
	}

	// Group services by their group
	function groupServices(services: typeof data.services) {
		const groups: Record<string, typeof data.services> = {};
		for (const service of services) {
			if (!groups[service.group]) {
				groups[service.group] = [];
			}
			groups[service.group].push(service);
		}
		return groups;
	}

	// Calculate overall status
	function getOverallStatus(services: typeof data.services) {
		if (services.length === 0) return 'unknown';
		const hasDown = services.some((s) => s.status === 'down');
		const hasDegraded = services.some((s) => s.status === 'degraded');
		if (hasDown) return 'down';
		if (hasDegraded) return 'degraded';
		return 'operational';
	}

	const groupedServices = $derived(groupServices(data.services));
	const overallStatus = $derived(getOverallStatus(data.services));
</script>

<svelte:head>
	<title>Service Status | asandov.com</title>
</svelte:head>

<div class="container mx-auto px-4 py-8 max-w-4xl">
	<h1 class="text-3xl font-bold mb-2">Service Status</h1>
	<p class="text-slate-500 dark:text-slate-400 mb-8">
		Current status of all services
	</p>

	{#if data.error}
		<div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-8">
			<p class="text-red-700 dark:text-red-300">
				Unable to fetch status: {data.error}
			</p>
			<p class="text-sm text-red-600 dark:text-red-400 mt-1">
				Check <a href="https://status.asandov.com" class="underline">status.asandov.com</a> directly
			</p>
		</div>
	{:else}
		<!-- Overall Status Banner -->
		<div
			class="rounded-lg p-6 mb-8 {overallStatus === 'operational'
				? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
				: overallStatus === 'degraded'
					? 'bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800'
					: 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'}"
		>
			<div class="flex items-center gap-3">
				<span class="relative flex h-4 w-4">
					<span
						class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 {getStatusColor(overallStatus)}"
					></span>
					<span class="relative inline-flex rounded-full h-4 w-4 {getStatusColor(overallStatus)}"></span>
				</span>
				<span class="text-lg font-semibold">
					{#if overallStatus === 'operational'}
						All Systems Operational
					{:else if overallStatus === 'degraded'}
						Some Systems Experiencing Issues
					{:else if overallStatus === 'down'}
						Service Outage Detected
					{:else}
						Status Unknown
					{/if}
				</span>
			</div>
		</div>

		<!-- Service Groups -->
		{#each Object.entries(groupedServices) as [group, services]}
			<div class="mb-8">
				<h2 class="text-lg font-semibold mb-4 text-slate-700 dark:text-slate-300">{group}</h2>
				<div class="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 divide-y divide-slate-200 dark:divide-slate-700">
					{#each services as service}
						<div class="p-4 flex items-center justify-between">
							<div class="flex items-center gap-3">
								<span class="w-3 h-3 rounded-full {getStatusColor(service.status)}"></span>
								<span class="font-medium">{service.name}</span>
							</div>
							<div class="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
								{#if service.responseTime !== null}
									<span class="hidden sm:inline">{service.responseTime}ms</span>
								{/if}
								<span class="hidden sm:inline">{service.uptime}% uptime</span>
								<span
									class="px-2 py-1 rounded text-xs font-medium {service.status === 'operational'
										? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
										: service.status === 'degraded'
											? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
											: service.status === 'down'
												? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
												: 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'}"
								>
									{getStatusText(service.status)}
								</span>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}

		<!-- Footer -->
		<div class="text-center text-sm text-slate-500 dark:text-slate-400 mt-8">
			<p>
				Last updated: {formatTime(data.lastUpdated)}
			</p>
			<p class="mt-1">
				Powered by <a href="https://github.com/TwiN/gatus" class="underline hover:text-slate-700 dark:hover:text-slate-200" target="_blank" rel="noopener noreferrer">Gatus</a>
				&middot;
				<a href="https://status.asandov.com" class="underline hover:text-slate-700 dark:hover:text-slate-200" target="_blank" rel="noopener noreferrer">Full Status Page</a>
			</p>
		</div>
	{/if}
</div>
