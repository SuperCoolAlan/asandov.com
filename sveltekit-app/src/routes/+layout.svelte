<script lang="ts">
	import '../app.css';
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import { Theme, ThemeToggle } from 'svelte-theme-select';
	import logo from '$lib/assets/logotransparent.png';
	import { page } from '$app/stores';

	let { children } = $props();

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' }
	];
</script>

<Theme />

<svelte:head>
	<link rel="icon" href={logo} />
</svelte:head>

<div class="flex flex-col min-h-screen bg-surface-50 dark:bg-surface-900 text-surface-900 dark:text-surface-50">
	<AppBar
		classes="sticky top-0 z-50 backdrop-blur-sm"
		border="border-b border-surface-200 dark:border-surface-700"
		background="bg-surface-50/80 dark:bg-surface-900/80"
		padding="p-4"
	>
		{#snippet lead()}
			<a href="/" class="flex items-center gap-2">
				<img src={logo} alt="Logo" class="h-10 w-10" />
				<span class="text-xl font-bold">asandov</span>
			</a>
		{/snippet}

		<nav class="hidden md:flex gap-1">
			{#each navLinks as link}
				<a
					href={link.href}
					class="px-4 py-2 rounded-lg transition-colors hover:bg-surface-200 dark:hover:bg-surface-700"
					class:bg-primary-500={$page.url.pathname === link.href}
					class:text-white={$page.url.pathname === link.href}
				>
					{link.label}
				</a>
			{/each}
		</nav>

		{#snippet trail()}
			<div class="p-2 rounded-lg hover:bg-surface-200 dark:hover:bg-surface-700 transition-colors cursor-pointer">
				<ThemeToggle class="size-5" />
			</div>
			<a href="https://auth.asandov.com" class="bg-primary-500 hover:bg-primary-600 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors">
				Login
			</a>
		{/snippet}
	</AppBar>

	<main class="flex-1">
		{@render children()}
	</main>

	<footer class="border-t border-surface-200 dark:border-surface-700 py-6 text-center text-sm text-surface-500">
		<p>&copy; {new Date().getFullYear()} Alan Sandoval</p>
	</footer>
</div>
