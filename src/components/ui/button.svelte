<script lang="ts">
  export let text: string = "";
  export let icon: string = "";
  export let iconPos: string = "left";
  export let onClick: () => void = () => {};
</script>

<button {...$$restProps} on:click={onClick}>
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
