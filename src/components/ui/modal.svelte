<script lang="ts">
  export let visible = true;

  export let title: string = "";
  export let onClose: any;
  export let css: string = "";
</script>

{#if visible}
  <div class="absolute">
    <div class="fixed top-0 left-0 z-1 h-full w-full bg-black opacity-75"></div>

    <div
      class="fadeIn z-1 fixed bg-white softShadow rounded-lg left-50% translate-x-[-50%] {css} min-w-30rem"
    >
      <!-- Header + Close button -->
      <div
        class="flex items-center rounded-t-lg bg-black p-4 pl-5"
        style="border: 0; border-bottom: 1px solid; background-color: black; font-size: 1.5rem; color: white;"
      >
        <p class="text-2xl">{title}</p>
        <button class="px-3 ml-auto bg-slate-7 rounded-full" on:click={onClose}>
          <i class="i-pajamas:close text-red3"></i>
        </button>
      </div>

      <slot />
    </div>
  </div>
{/if}
