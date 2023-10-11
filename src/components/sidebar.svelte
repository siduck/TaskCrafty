<script>
  import { activeSection } from "@/store";

  let btns = [
    {
      name: "Dashboard",
      icon: "i-fluent:grid-circles-24-filled",
    },

    {
      name: "Time Tracker",
      icon: "i-mdi:stopwatch-outline",
    },

    {
      name: "Todo List",
      icon: "i-solar:clipboard-list-linear",
    },

    {
      name: "Projects",
      icon: "i-ic:baseline-folder",
    },
  ];
</script>

<aside p="5 l2 r15" shadow-xl>
  {#each btns as btn}
    <button
      class="btnglass"
      gap3
      text={$activeSection == btn.name ? "slate7" : "!slate5"}
      on:click={() => ($activeSection = btn.name)}
    >
      <div class={btn.icon}></div>
      {btn.name}
    </button>
  {/each}
</aside>
