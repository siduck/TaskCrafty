<script lang="ts">
  import RadialProgress from "$lib/components/ui/radialProgress.svelte";
  import Btn from "$lib/components/ui/button.svelte";
  import { genTimerText } from "./utils";
  import { timerLength, timeInSec } from "$lib/store";
  import { timerSound } from "$lib/constants";

  let timerInterval: number;

  $: timerText = genTimerText($timeInSec);
  $: progress = 100 - ($timeInSec / ($timerLength * 60)) * 100;
  $: pauseBtn = false;

  let timerAudioEl: HTMLAudioElement;

  const onComplete = () => {
    clearInterval(timerInterval);
    timerAudioEl.volume = 0.2;
    timerAudioEl.play();
    pauseBtn = false;
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
    timerInterval = setInterval(updateTime, 1000);
  };

  const stop = (type: string) => {
    clearInterval(timerInterval);
    if (type == "isReset") {
      $timeInSec = $timerLength * 60;
      pauseBtn = false;
    }
  };
</script>

<grid p10 h="fit" class="gap10">
  <div bg="slate50" class="p4 rounded-full w-fit mx-auto">
    <RadialProgress
      {progress}
      size={260}
      activeStroke={{ class: "stroke-blue-5", width: 13 }}
      inactiveStroke={{ class: "stroke-slate-2", width: 8 }}
      text={{ value: timerText, class: "text-4xl" }}
    />
  </div>

  <flex gap3 mx="auto">
    <Btn
      icon={pauseBtn ? "i-ic:round-pause" : "i-ion:play"}
      class="p4 rounded-full btglass"
      bg={pauseBtn ? "red4" : "blue5"}
      onClick={() => {
        pauseBtn = !pauseBtn;
        pauseBtn ? run() : stop("isPause");
      }}
      hover="!bg-slate6"
    />
    <Btn
      icon="i-solar:restart-bold-duotone"
      onClick={() => stop("isReset")}
      bg=""
      txt="Reset"
      rounded="full"
    />
  </flex>

  <audio src={timerSound} bind:this={timerAudioEl}></audio>
</grid>
