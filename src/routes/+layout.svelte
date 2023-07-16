<script>
  import "../app.css";
  import Navbar from "$lib/components/NavigationPanel.svelte";
</script>

<div class="flex flex-col h-screen">
  <Navbar />
  <main class="flex flex-grow">
    <slot />
  </main>
</div>
