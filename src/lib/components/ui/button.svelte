<script lang="ts">
  export let txt: string = "";
  export let icon: string = "";
  export let iconPos: string = "left";
  export let onClick: () => void = () => {};

  const handleClick = (e: any) => {
    e.stopPropagation();
    onClick();
  };
</script>

<button {...$$restProps} on:click={handleClick}>
  {#if iconPos === "left"}
    <div class={icon}></div>
  {/if}

  {#if txt}
    {txt}
  {/if}

  {#if iconPos === "right"}
    <div class={icon}></div>
  {/if}

  <slot />
</button>
