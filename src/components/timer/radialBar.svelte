<script lang="ts">
  import RadialProgress from "@/components/ui/radialProgress.svelte";
  import { genTimerText } from "./utils";

  let timeLength = 1; // Initial time in minutes
  let timeInSec = timeLength * 60;
  let timerInterval: number;

  $: timerText = genTimerText(timeInSec);
  $: progress = 100 - (timeInSec / (timeLength * 60)) * 100;

  console.log(progress);

  const updateTime = () => {
    if (timeInSec <= 0) {
      clearInterval(timerInterval);
      return;
    }

    timeInSec--;
  };

  const run = () => {
    if (timeInSec == 0) timeInSec = timeLength * 60;
    timerInterval = setInterval(updateTime, 10);
  };

  const stop = (type: string) => {
    clearInterval(timerInterval);
    if (type == "isReset") timeInSec = timeLength * 60;
  };
</script>

<grid p10 h="fit">
  <RadialProgress
    {progress}
    size={200}
    activeStroke={{ class: "stroke-red-3", width: 8 }}
    inactiveStroke={{ class: "stroke-slate-2", width: 5 }}
    text={{ value: timerText, class: "text-2xl" }}
  />

  <flex gap3>
    <button on:click={run}> start </button>
    <button on:click={stop}> pause </button>
    <button on:click={() => stop("isReset")}> clear </button>
  </flex>
</grid>
