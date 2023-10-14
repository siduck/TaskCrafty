<script lang="ts">
  import RadialProgress from "@/components/ui/radialProgress.svelte";
  import { genTimerText } from "./utils";
  import { timerLength, timeInSec } from "@/store";
  import { timerSound } from "@/constants";

  let timerInterval: number;

  $: timerText = genTimerText($timeInSec);
  $: progress = 100 - ($timeInSec / ($timerLength * 60)) * 100;

  let timerAudioEl: HTMLAudioElement;

  const onComplete = () => {
    clearInterval(timerInterval);
    timerAudioEl.volume = 0.2;
    console.log(timerAudioEl);
    timerAudioEl.play();
  };

  const updateTime = () => {
    if ($timeInSec <= 0) {
      onComplete();
      return;
    }

    $timeInSec = $timeInSec - 1;
  };

  const run = () => {
    if ($timeInSec == 0) $timeInSec = $timerLength * 60;
    timerInterval = setInterval(updateTime, 10);
  };

  const stop = (type: string) => {
    clearInterval(timerInterval);
    if (type == "isReset") $timeInSec = $timerLength * 60;
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

  <audio src={timerSound} bind:this={timerAudioEl}></audio>
</grid>
