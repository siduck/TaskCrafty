<script lang="ts">
  import Btn from "$lib/components/ui/button.svelte";
  import { todaysTodoList } from "$lib/store";

  export let name: string;
  export let status: string;
  let isHovered: boolean = false;

  const toggleStatus = () => {
    status = status == "done" ? "todo" : "done";
    todaysTodoList.edit(name, status);
  };

  const DeleteTodo = () => todaysTodoList.delete(name);

  const hoverCol = "hover:bg-indigo"

  $: icon = (status == "done")
    ? `i-fluent:checkmark-circle-12-filled bg-black ${hoverCol}`
    : `i-fluent:circle-16-regular ${hoverCol}`;

</script>

<button
  class="btnglass justify-start pl3"
  hover="bg-slate2"
  on:click={toggleStatus}
  on:mouseenter={() => (isHovered = true)}
  on:mouseleave={() => (isHovered = false)}
  class:!text-slate-5={status == "done"}
>

  <div class={icon}></div>
  <p class:line-through={(status == "done")}>{name}</p>

  {#if isHovered}
    <Btn
      icon="i-fluent:delete-12-filled text-sm bg-red2"
      class="p1 ml-auto"
      onClick={DeleteTodo}
    />
  {/if}
</button>
