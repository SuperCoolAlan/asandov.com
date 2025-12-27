<script lang="ts">
	import '../app.css';
	import logo from '$lib/assets/logotransparent.png';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	let { children } = $props();

	let dark = $state(true);
	let mobileMenuOpen = $state(false);

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

<div class="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50">
	<header class="sticky top-0 z-50 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-900/80">
		<nav class="container mx-auto px-4 py-4">
			<div class="flex items-center justify-between">
				<!-- Logo -->
				<a href="/" class="flex items-center gap-2">
					<img src={logo} alt="Logo" class="h-10 w-10" />
					<span class="text-xl font-bold">asandov</span>
				</a>

				<!-- Desktop Nav -->
				<div class="hidden md:flex items-center gap-6">
					{#each navLinks as link}
						<a
							href={link.href}
							class="px-3 py-2 rounded-lg transition-colors hover:bg-slate-200 dark:hover:bg-slate-700"
							class:bg-slate-200={$page.url.pathname === link.href}
							class:dark:bg-slate-700={$page.url.pathname === link.href}
						>
							{link.label}
						</a>
					{/each}
				</div>

				<!-- Right side -->
				<div class="flex items-center gap-3">
					<button
						onclick={toggleTheme}
						class="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
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

					<a href="https://auth.asandov.com" class="hidden md:inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors">
						Login
					</a>

					<!-- Mobile menu button -->
					<button
						onclick={() => mobileMenuOpen = !mobileMenuOpen}
						class="md:hidden p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
						aria-label="Toggle menu"
					>
						{#if mobileMenuOpen}
							<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
							</svg>
						{:else}
							<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						{/if}
					</button>
				</div>
			</div>

			<!-- Mobile Nav -->
			{#if mobileMenuOpen}
				<div class="md:hidden mt-4 pb-4 border-t border-slate-200 dark:border-slate-700 pt-4">
					<div class="flex flex-col gap-2">
						{#each navLinks as link}
							<a
								href={link.href}
								onclick={() => mobileMenuOpen = false}
								class="px-3 py-2 rounded-lg transition-colors hover:bg-slate-200 dark:hover:bg-slate-700"
								class:bg-slate-200={$page.url.pathname === link.href}
								class:dark:bg-slate-700={$page.url.pathname === link.href}
							>
								{link.label}
							</a>
						{/each}
						<a href="https://auth.asandov.com" class="mt-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors text-center">
							Login
						</a>
					</div>
				</div>
			{/if}
		</nav>
	</header>

	<main class="flex-1">
		{@render children()}
	</main>

	<footer class="border-t border-slate-200 dark:border-slate-700 py-6 text-center text-sm text-slate-500">
		<p>&copy; {new Date().getFullYear()} Alan Sandoval</p>
	</footer>
</div>
