<script lang="ts">
	import '../app.css';
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import logo from '$lib/assets/logotransparent.png';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	let { children } = $props();

	let dark = $state(true);

	function initTheme() {
		if (browser) {
			const stored = localStorage.getItem('theme');
			if (stored) {
				dark = stored === 'dark';
			} else {
				dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			}
			applyTheme();
		}
	}

	function applyTheme() {
		if (dark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}

	function toggleTheme() {
		dark = !dark;
		applyTheme();
		if (browser) {
			localStorage.setItem('theme', dark ? 'dark' : 'light');
		}
	}

	$effect(() => {
		initTheme();
	});

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' }
	];
</script>

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
			<button
				onclick={toggleTheme}
				class="p-2 rounded-lg hover:bg-surface-200 dark:hover:bg-surface-700 transition-colors"
				aria-label="Toggle dark mode"
			>
				{#if dark}
					<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
					</svg>
				{:else}
					<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
					</svg>
				{/if}
			</button>
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
