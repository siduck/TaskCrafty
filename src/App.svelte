<script lang="ts">
  import { activeSection } from "@/store";
  import Sidebar from "@/components/sidebar.svelte";

  import Dashboard from "@/components/dashboard/index.svelte";
  import Timer from "@/components/timer/index.svelte";
  import Todos from "@/components/todos/index.svelte";
  import Projects from "@/components/projects/index.svelte";
</script>

<main>
  <grid class="grid-cols-[auto_1fr] h-screen">
    <Sidebar />

    {#if $activeSection == "Projects"}
      <Projects />
    {:else if $activeSection == "Todo List"}
      <Todos />
    {:else if $activeSection == "Dashboard"}
      <Dashboard />
    {:else if $activeSection == "Time Tracker"}
      <Timer />
    {/if}
  </grid>
</main>
