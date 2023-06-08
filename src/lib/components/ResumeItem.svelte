<script lang="ts">
	export let title: string;
	export let organization: string;

	export let startTime: string;
	export let endTime: string;

	export let bullets: string[];
</script>

<h2>{title}</h2>
<h3>{organization}</h3>

{#each bullets as bullet}
	<p>{bullet}</p>
{/each}
