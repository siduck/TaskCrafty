<script lang="ts">
  import store from "@/store";
  import Sidebar from "@/components/sidebar.svelte";

  import Dashboard from "@/components/dashboard/index.svelte";
  import Timer from "@/components/timer/index.svelte";
  import Todos from "@/components/todos/index.svelte";
  import Projects from "@/components/projects/index.svelte";
</script>

<main>
  <grid class="grid-cols-[auto_1fr] h-screen">
    <Sidebar />

    {#if $store.activeSection == "Projects"}
      <Projects />
    {:else if $store.activeSection == "Todo List"}
      <Todos />
    {:else if $store.activeSection == "Dashboard"}
      <Dashboard />
    {:else if $store.activeSection == "Time Tracker"}
      <Timer />
    {/if}
  </grid>
</main>
