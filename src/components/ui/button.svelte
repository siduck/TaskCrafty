<script lang="ts">
  export let text: string = "";
  export let icon: string = "";
  export let iconPos: string = "left";
  export let onClick: () => void = () => {};

  const handleClick = (e:any) => {
    e.stopPropagation();
    onClick();
  };
</script>

<button {...$$restProps} on:click={handleClick}>
  {#if iconPos === "left"}
    <div class={icon}></div>
  {/if}

  {#if text}
    {text}
  {/if}

  {#if iconPos === "right"}
    <div class={icon}></div>
  {/if}
</button>
