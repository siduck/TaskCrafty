<script lang="ts">
  export let progress: string;
  export let css: string = "";
</script>

<div bg="slate2" p0 rounded="lg" class={css}>
  <div bg="indigo" p="1" rounded="md" style="--progressWidth:{progress};"></div>
</div>

<style>
  div:first-child {
    width: var(--progressWidth);
  }
</style>
