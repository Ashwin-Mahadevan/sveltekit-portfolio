<script lang="ts">
  import "../app.css";
  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";

  inject({ mode: dev ? "development" : "production" });
</script>

<svelte:head>
  <title>Ashwin Mahadevan</title>
</svelte:head>

<div class="container mx-auto">
  <slot />
</div>
