<script lang="ts">
  let lightTheme: boolean = true;
  import Btn from "$lib/components/ui/button.svelte";

  $: toggleIcon = lightTheme
    ? "i-line-md:moon-alt-to-sunny-outline-loop-transition"
    : "i-line-md:sunny-outline-to-moon-alt-loop-transition";
</script>

<Btn
  icon={toggleIcon}
  onClick={() => (lightTheme = !lightTheme)}
  un-children="text-xl"
  p="3"
  rounded="full"
  class='bg-slate2 text-black'
/>
