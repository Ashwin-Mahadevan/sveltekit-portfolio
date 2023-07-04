<script lang="ts">
	import "../app.css";
	import { page } from "$app/stores";
	import { browser } from "$app/environment";
	import posthog from "posthog-js";
	import { PUBLIC_POSTHOG_API_KEY } from "$env/static/public";
	import MenuLogo from "./MenuLogo.svelte";

	if (browser) posthog.init(PUBLIC_POSTHOG_API_KEY, { api_host: "https://app.posthog.com" });
	$: $page.url.pathname, browser && posthog.capture("$pageview");

	let showMenu = true;

	$: console.log($page.url.pathname);

	const menuLinks = [
		{ text: "About", href: "/about" },
		{ text: "Blog", href: "/blog" },
		{ text: "Contact", href: "/contact" }
	];
</script>

<svelte:head>
	<title>Ashwin Mahadevan</title>
	<link rel="icon" href="/images/profile.png" />
</svelte:head>

<header class="bg-white">
	<nav class="mx-auto max-w-7xl flex items-center justify-between p-6" aria-label="Global">
		<div class="flex lg:flex-1 items-center space-x-4">
			<MenuLogo />

			{#if $page.url.pathname === "/"}
				<h2 class="font-semibold text-gray-900 py-2 border-b-2">
					<a href="/" class="hover:text-indigo-700">Ashwin Mahadevan</a>
				</h2>
			{:else}
				<h2 class="font-semibold text-gray-900">
					<a href="/" class="hover:text-indigo-700">Ashwin Mahadevan</a>
				</h2>
			{/if}
		</div>

		<div class:hidden={showMenu} class="flex lg:hidden">
			<button
				on:click={() => (showMenu = true)}
				class="inline-flex items-center justify-center rounded-md p-2 text-gray-700"
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="h-8 w-8"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
		</div>

		<div class="hidden lg:flex space-x-12">
			{#each menuLinks as { text, href }}
				{#if $page.url.pathname === href}
					<h2 class="text-md font-semibold text-gray-900 py-2 border-b-2">
						<a {href} class="hover:text-indigo-700">
							{text}
						</a>
					</h2>
				{:else}
					<h2 class="text-md font-semibold text-gray-900 py-2">
						<a {href} class="hover:text-indigo-700">
							{text}
						</a>
					</h2>
				{/if}
			{/each}
		</div>

		<div class="hidden lg:flex lg:flex-1 justify-end">
			<!-- TODO: Social Links -->
		</div>
	</nav>

	<!-- Mobile menu, show/hide based on menu open state. -->
	<div class:hidden={!showMenu} class="lg:hidden" role="dialog" aria-modal="true">
		<!-- Background backdrop, show/hide based on slide-over state. -->
		<div class="fixed inset-0 z-10" />
		<div
			class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
		>
			<div class="flex items-center justify-between">
				<div class="flex items-center space-x-4">
					<MenuLogo />

					{#if $page.url.pathname === "/"}
						<h2 class="font-semibold text-gray-900 py-2 border-b-2">
							<a href="/" class="hover:text-indigo-700">Ashwin Mahadevan</a>
						</h2>
					{:else}
						<h2 class="font-semibold text-gray-900">
							<a href="/" class="hover:text-indigo-700">Ashwin Mahadevan</a>
						</h2>
					{/if}
				</div>

				<button on:click={() => (showMenu = false)} class="rounded-md p-2 text-gray-700">
					<span class="sr-only">Close menu</span>
					<svg
						class="h-8 w-8"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>

			<div class="mt-10">
				<div class="space-y-4">
					{#each menuLinks as { text, href }}
						{#if $page.url.pathname === href}
							<h2 class="text-md font-semibold text-gray-900 py-2 border-b-2">
								<a {href} class="hover:text-indigo-700">
									{text}
								</a>
							</h2>
						{:else}
							<h2 class="text-md font-semibold text-gray-900 py-2">
								<a {href} class="hover:text-indigo-700">
									{text}
								</a>
							</h2>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	</div>
</header>

<div class="h-screen bg-gray-50">
	<slot />
</div>
