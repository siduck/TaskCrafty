<script lang="ts">
  import Btn from "@/components/ui/button.svelte";
  export let checked: boolean = false;
  export let externalClick: (x: boolean) => void;

  $: icon = checked
    ? "i-fluent:checkmark-circle-12-filled"
    : "i-fluent:circle-16-regular";

  const handleClick = () => {
    checked = !checked;
    externalClick(checked);
  };
</script>

<Btn
  {icon}
  onClick={handleClick}
  class="btnglass p0"
  {...$$restProps}
  hover="text-blue"
/>
