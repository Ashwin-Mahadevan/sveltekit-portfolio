<script lang="ts">
	import "../app.css";
	import { page } from "$app/stores";
	import { browser } from "$app/environment";
	import posthog from "posthog-js";

	if (browser)
		posthog.init("phc_xCB1CV42QbL2GtwyP30htHxMriPr5ZfCkZLcAIjxsfa", {
			api_host: "https://app.posthog.com"
		});

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
