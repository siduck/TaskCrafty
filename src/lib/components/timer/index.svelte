<script lang="ts">
  import RadialBar from "./radialBar.svelte";
  import Btn from "$lib/components/ui/button.svelte";
  import { timerLength, timeInSec } from "$lib/store";

  let clickedSwitcherLabel = "pomodoro";

  let timerBreaks = [
    {
      name: "Pomodoro",
      val: "pomodoro",
      icon: "i-icon-park-outline:tomato",
      length: 25,
    },
    { name: "Short Break", val: "custom", length: 5 },
  ];

  const setTimerMode = (name: string, length: number) => {
    (clickedSwitcherLabel = name), ($timerLength = length);
    $timeInSec = length * 60;
  };
</script>

<grid class="bg-slate-1 p5">
  <!--  timer box -->
  <div m="auto" bg="white" class="curved">
    <!-- timer mode switcher -->
    <flex gap3 class="bg-black p3 shadow-md" rounded="xl">
      {#each timerBreaks as item}
        <Btn
          text={item.name}
          icon={item.icon}
          hover="bg-slate7"
          class={`${
            clickedSwitcherLabel === item.val
              ? "bg-white text-black hover:text-white"
              : ""
          }`}
          onClick={() => setTimerMode(item.val, item.length)}
          w="full"
        ></Btn>
      {/each}
    </flex>

    <RadialBar />
  </div>
</grid>
