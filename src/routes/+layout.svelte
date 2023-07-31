<script lang="ts">
	import "../app.css";
	import { page } from "$app/stores";
	import { browser } from "$app/environment";
	import { PUBLIC_POSTHOG_API_KEY } from "$env/static/public";
	import GithubIcon from "$lib/components/GithubIcon.svelte";
	import TwitterIcon from "$lib/components/TwitterIcon.svelte";
	import InstagramIcon from "$lib/components/InstagramIcon.svelte";
	import posthog from "posthog-js";
	import MenuLogo from "./MenuLogo.svelte";
	import MenuLink from "./MenuLink.svelte";

	const posthogConfig = { api_host: "https://app.posthog.com" };
	if (browser) posthog.init(PUBLIC_POSTHOG_API_KEY, posthogConfig);
	$: $page.url.pathname, browser && posthog.capture("$pageview");

	let showMenu = false;

	const menuLinks = [
		{ text: "About", href: "/about" },
		{ text: "Blog", href: "/blog" },
		{ text: "Contact", href: "/contact" },
	];
</script>

<svelte:head>
	<title>Ashwin Mahadevan</title>
	<link rel="icon" href="/images/profile.webp" />
</svelte:head>

<header class="bg-white">
	<nav class="mx-auto max-w-7xl flex items-center justify-between p-6">
		<div class="flex lg:flex-1 items-center space-x-4">
			<MenuLogo />
			<MenuLink
				text="Ashwin Mahadevan"
				href="/"
				active={$page.url.pathname === "/"}
			/>
		</div>

		<button
			on:click={() => (showMenu = true)}
			class:hidden={showMenu}
			class="lg:hidden p-2"
		>
			<svg
				class="h-8 w-8 text-gray-700"
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

		<div class="hidden lg:flex space-x-12 items-center">
			{#each menuLinks as { text, href }}
				<MenuLink {text} {href} active={$page.url.pathname === href} />
			{/each}
		</div>

		<div class="hidden lg:flex lg:flex-1 justify-end space-x-4 text-gray-900">
			<a class="hover:text-indigo-700" href="https://twitter.com/shwin_m">
				<TwitterIcon />
			</a>

			<a
				class="hover:text-indigo-700"
				href="https://www.instagram.com/ashwin_mahadevan"
			>
				<InstagramIcon />
			</a>

			<a
				class="hover:text-indigo-700"
				href="https://github.com/Ashwin-Mahadevan"
			>
				<GithubIcon />
			</a>
		</div>
	</nav>

	<!-- Mobile menu, show/hide based on menu open state. -->
	<div
		class:hidden={!showMenu}
		class="lg:hidden"
		role="dialog"
		aria-modal="true"
	>
		<!-- Background backdrop, show/hide based on slide-over state. -->
		<div class="fixed inset-0 z-10" />

		<div
			class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm"
		>
			<div class="flex items-center justify-between">
				<div class="flex items-center space-x-4">
					<MenuLogo />
					<MenuLink
						text="Ashwin Mahadevan"
						href="/"
						active={$page.url.pathname === "/"}
					/>
				</div>

				<button on:click={() => (showMenu = false)} class="p-2">
					<svg
						class="h-8 w-8 text-gray-700"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>

			<div class="mt-4 space-y-4">
				{#each menuLinks as { text, href }}
					<MenuLink {text} {href} active={$page.url.pathname === href} />
				{/each}
			</div>
		</div>
	</div>
</header>

<div class="mt-16">
	<slot />
</div>
