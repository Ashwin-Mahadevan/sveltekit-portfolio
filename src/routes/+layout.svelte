<script lang="ts">
	import "../app.css";
	import { dev } from "$app/environment";
	import { inject } from "@vercel/analytics";

	inject({ mode: dev ? "development" : "production" });

	export let data;
</script>

<svelte:head>
	<title>Ashwin Mahadevan</title>
	<link rel="icon" href="/images/profile.png" />
</svelte:head>

<div class="container mx-auto">
	<slot />
</div>

<footer class="text-center">
	{#await data.stream.views then views}
		This page has been viewed {views} times!
	{/await}
</footer>
