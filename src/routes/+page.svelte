<script lang="ts">
  const links = [
    { name: "Website", content: "ashwinm.com", href: "https://ashwinm.com" },
    { name: "Email", content: "ashwinm@berkeley.edu", href: "mailto:ashwinm@berkeley.edu" }
  ];
</script>

<div class="my-12 space-y-4">
  <h1 class="text-5xl font-bold text-center">Ashwin Mahadevan</h1>

  <ul class="flex justify-center">
    {#each links as { name, content, href }, index}
      <li>{name}: <a {href} class="text-blue-800"> {content} </a></li>
      {#if index < links.length - 1}
        <span class="mx-2">|</span>
      {/if}
    {/each}
  </ul>

  <p>Hi, I'm Ashwin. I'm a mathematician and entrepreneur.</p>

  <p>This website is under construction.</p>
</div>
