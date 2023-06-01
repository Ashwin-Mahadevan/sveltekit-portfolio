<script lang="ts">
	import "../app.css";
	import { dev } from "$app/environment";
	import { inject } from "@vercel/analytics";
	import profile from "$lib/images/profile.png";

	inject({ mode: dev ? "development" : "production" });
</script>

<svelte:head>
	<title>Ashwin Mahadevan</title>
	<link rel="icon" href={profile} />
</svelte:head>

<div class="container mx-auto">
	<slot />
</div>
