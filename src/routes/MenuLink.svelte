<script lang="ts">
	export let active = false;

	export let text: string;
	export let href: string;
</script>

{#if active}
	<h2 class="text-md font-semibold text-gray-900 py-2 border-b-2">
		<a {href} class="hover:text-indigo-700">
			{text}
		</a>
	</h2>
{:else}
	<h2 class="font-semibold text-gray-900">
		<a {href} class="hover:text-indigo-700">
			{text}
		</a>
	</h2>
{/if}
