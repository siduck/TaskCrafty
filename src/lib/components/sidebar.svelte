<script>
  import { page } from '$app/stores';

  import Btn from "$lib/components/ui/button.svelte";
  import ThemeToggle from "$lib/components/ui/themeToggle.svelte";

 $: activePage= $page.url.pathname

  let sections = [
    {
      name: "Dashboard",
      icon: "i-fluent:grid-circles-24-filled",
      href: "/",
    },

    {
      name: "Time Tracker",
      icon: "i-mdi:stopwatch-outline",
      href: "/timetracker",
    },

    {
      name: "Today's Todo",
      icon: "i-material-symbols:today",
      href: "/todos",
    },

    {
      name: "Projects",
      icon: "i-ic:baseline-folder",
      href: "/projects",
    },
  ];
</script>

<aside p="2 l2 " shadow-xl class="flex flex-col">
  <Btn
    icon="i-icon-park-solid:flashlamp"
    class="btnglass text-2xl !w-full justify-start rounded-none"
    txt="TaskCrafty"
    font="bold"
    border="0 b solid slate2"
    mb={3}
    p="t3 b5"
  />

    <!-- section btns -->
  {#each sections as btn}
    <a href={btn.href} class='btn btnglass !justify-start'
      text={activePage == btn.href ? "!slate8": "!slate-5"}
      hover="bg-slate1"
    > 
      <div class={btn.icon}> </div>
      {btn.name}
    </a>
  {/each}

    <!-- settings btn & theme toggle -->
  <flex mt="auto" gap2>
    <Btn
      icon="i-mingcute:settings-1-line"
      class="!w-full"
      txt="Settings"
      hover="bg-slate-50"
    />
    <ThemeToggle />
  </flex>
</aside>
