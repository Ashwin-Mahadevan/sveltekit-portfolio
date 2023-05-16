<script lang="ts">
  const links = [
    { text: "Website: ashwinm.com", href: "https://ashwinm.com" },
    { text: "Email: ashwinm@berkeley.edu", href: "mailto:ashwinm@berkeley.edu" },
    { text: "Twitter: @shwin_m", href: "https://twitter.com/shwin_m" }
  ];
</script>

<div class="my-12 space-y-4">
  <h1 class="text-5xl font-bold text-center">Ashwin Mahadevan</h1>

  <ul class="flex space-x-2">
    {#each links as { href, text }, index}
      <li><a {href}> {text} </a></li>
    {/each}
  </ul>

  <p>Hi, I'm Ashwin. I'm a mathematician and entrepreneur.</p>

  <p>This website is under construction.</p>
</div>
