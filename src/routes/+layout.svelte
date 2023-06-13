<script lang="ts">
	import "../app.css";
	import { page } from "$app/stores";
	import { browser } from "$app/environment";
	import posthog from "posthog-js";
	import { PUBLIC_POSTHOG_API_KEY } from "$env/static/public";

	if (browser) posthog.init(PUBLIC_POSTHOG_API_KEY, { api_host: "https://app.posthog.com" });
	$: $page.url.pathname, browser && posthog.capture("$pageview");

	export let data;
</script>

<svelte:head>
	<title>Ashwin Mahadevan</title>
	<link rel="icon" href="/images/profile.png" />
</svelte:head>

<div class="container mx-auto my-8">
	<slot />
</div>

<footer class="text-center">
	This page has been viewed <span class="font-bold"> {data.views} </span> times!
</footer>
