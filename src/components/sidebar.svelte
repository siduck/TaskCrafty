<script>
  import store from "$src/store";

  let btns = [
    {
      name: "Dashboard",
      icon: "i-fluent:grid-circles-24-filled",
    },
    {
      name: "Timer Tracker",
      icon: "i-mdi:stopwatch-outline",
    },
    {
      name: "Boards",
      icon: "i-mingcute:board-line",
    },

    {
      name: "Projects",
      icon: "i-ic:baseline-folder",
    },
  ];
</script>

<aside p="5 l2 r10" shadow-xl>
  {#each btns as btn}
    <button
      class="btnglass"
      gap3
      text={$store.activeSection == btn.name ? "slate7" : "!slate5"}
      on:click={() => ($store.activeSection = btn.name)}
    >
      <div class={btn.icon}></div>
      {btn.name}
    </button>
  {/each}
</aside>
