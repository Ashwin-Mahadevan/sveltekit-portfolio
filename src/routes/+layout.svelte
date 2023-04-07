<script lang="ts">
  import { dev } from "$app/environment";
  import { page } from "$app/stores";

  import { inject } from "@vercel/analytics";
  inject({ mode: dev ? "development" : "production" });
</script>

<svelte:head>
  {#if $page.data.title}
    <title>{$page.data.title} | Ashwin Mahadevan</title>
  {/if}

  <title>Ashwin Mahadevan</title>
</svelte:head>

<slot />
