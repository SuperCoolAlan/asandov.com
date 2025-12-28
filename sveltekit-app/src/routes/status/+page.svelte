<script lang="ts">
	let loading = $state(true);

	function handleLoad() {
		loading = false;
	}
</script>

<svelte:head>
	<title>Service Status | asandov.com</title>
</svelte:head>

<div class="h-[calc(100vh-8rem)]">
	<div class="h-full relative">
		{#if loading}
			<div class="absolute inset-0 flex items-center justify-center bg-slate-50 dark:bg-slate-900">
				<div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
				<span class="ml-3 text-slate-500">Loading status...</span>
			</div>
		{/if}
		<iframe
			src="https://status.asandov.com"
			title="Service Status"
			class="w-full h-full border-0"
			onload={handleLoad}
		></iframe>
	</div>
</div>
