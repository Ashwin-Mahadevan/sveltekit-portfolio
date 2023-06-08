<script lang="ts">
	import ResumeItem from "$lib/components/ResumeItem.svelte";

	const links = [
		{ name: "Website", content: "ashwinm.com", href: "/" },
		{ name: "Email", content: "ashwinm@berkeley.edu", href: "mailto:ashwinm@berkeley.edu" }
	];
</script>

<h1 class="text-5xl font-bold text-center">Ashwin Mahadevan</h1>

<ul class="flex justify-center">
	{#each links as { name, content, href }, index}
		<!-- TODO: Link styling. -->
		<li>{name}: <a {href} class="text-blue-700 underline"> {content} </a></li>
		{#if index < links.length - 1} <span class="mx-2"> | </span> {/if}
	{/each}
</ul>

<hr class="m-2" />

<p class="text-center">Hi, I'm Ashwin. I'm a mathematician and entrepreneur.</p>

<ResumeItem
	title=""
	organization="Johns Hopkins University Applied Physics Laboratory
	Signals and Systems Analysis Group"
	startTime=""
	endTime=""
	bullets={[]}
/>

<p class="text-center">
	<a href="/chat" class="text-blue-700 underline"> I've turned into an Artificial Intelligence! </a>
</p>
