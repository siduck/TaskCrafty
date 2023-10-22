<script lang="ts">
  import "uno.css";
  import "@/css/app.css";

  import Sidebar from "@/components/sidebar.svelte";
</script>

<main>
  <grid class="grid-cols-[auto_1fr] h-screen">
    <Sidebar />
    <slot/>
   </grid>
</main>
