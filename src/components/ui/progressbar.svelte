<script lang="ts">
  export let progress: string = "w-50%";
  export let css: string = "";
</script>

<div bg="slate2" p0 rounded="lg" class={css}>
  <div bg="blue" p="1" rounded="md" class={`${progress}`}></div>
</div>
