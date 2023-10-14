<script>
  import Btn from "@/components/ui/button.svelte";
  import ThemeToggle from "@/components/ui/themeToggle.svelte";
  import { activeSection } from "@/store";

  let sections = [
    {
      name: "Dashboard",
      icon: "i-fluent:grid-circles-24-filled",
    },

    {
      name: "Time Tracker",
      icon: "i-mdi:stopwatch-outline",
    },

    {
      name: "Today's Todo",
      icon: "i-material-symbols:today",
    },

    {
      name: "Projects",
      icon: "i-ic:baseline-folder",
    },
  ];
</script>

<aside p="2 l2 " shadow-xl class="flex flex-col">
  <Btn
    icon="i-icon-park-solid:flashlamp"
    class="btnglass text-2xl !w-full justify-start rounded-none"
    text="TaskCrafty"
    font="bold"
    border="0 b solid slate2"
    mb={3}
    p="t3 b5"
    onClick={() => ($activeSection = "Dashboard")}
  />

    <!-- section btns -->
  {#each sections as btn}
    <Btn
      class={`btnglass w-full justify-start  ${
        $activeSection == btn.name ? "text-slate8 !bg-slate-50" : "!text-slate5"
      }`}
      text={btn.name}
      icon={btn.icon}
      onClick={() => ($activeSection = btn.name)}
      hover="bg-slate-50"
      p="r16"
    />
  {/each}

    <!-- settings btn & theme toggle -->
  <flex mt="auto" gap2>
    <Btn
      icon="i-mingcute:settings-1-line"
      class="!w-full"
      text="Settings"
      hover="bg-slate-50"
    />
    <ThemeToggle />
  </flex>
</aside>
