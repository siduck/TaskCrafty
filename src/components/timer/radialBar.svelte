<script lang="ts">
  import RadialProgress from "@/components/ui/radialProgress.svelte";
  import Btn from "@/components/ui/button.svelte";
  import { genTimerText } from "./utils";
  import { timerLength, timeInSec } from "@/store";
  import { timerSound } from "@/constants";

  let timerInterval: number;

  $: timerText = genTimerText($timeInSec);
  $: progress = 100 - ($timeInSec / ($timerLength * 60)) * 100;
  $: pauseBtn = progress != 0 && progress != 100;

  let timerAudioEl: HTMLAudioElement;

  const onComplete = () => {
    clearInterval(timerInterval);
    timerAudioEl.volume = 0.2;
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

<grid p10 h="fit" class="gap10">
  <div bg="slate-1" class="p4 rounded-full w-fit">
    <RadialProgress
      {progress}
      size={260}
      activeStroke={{ class: "stroke-blue-6", width: 13 }}
      inactiveStroke={{ class: "stroke-slate-2", width: 8 }}
      text={{ value: timerText, class: "text-3xl" }}
    />
  </div>

  <flex gap3 mx="auto">
    <Btn
      icon={pauseBtn ? "i-ic:round-pause" : "i-ion:play"}
      class='p4 rounded-full btglass'
      bg='!blue5'
      onClick={() => (pauseBtn ? stop("isPause") : run())}
      hover='!bg-slate6'
    />
    <Btn
      icon="i-solar:restart-bold-duotone"
      onClick={() => stop("isReset")}
      bg=""
      text="Reset"
      rounded="full"
    />
  </flex>

  <audio src={timerSound} bind:this={timerAudioEl}></audio>
</grid>
