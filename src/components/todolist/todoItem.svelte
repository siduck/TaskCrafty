<script lang="ts">
  import Checkbox from "@/components/ui/checkbox.svelte";
  import Btn from "@/components/ui/button.svelte";
  import { todaysTodoList } from "@/store";

  export let name: string;
  export let status: string;
  let isHovered: boolean = false;

  const toggleStatus = () => {
    status = status == "done" ? "todo" : "done";
    todaysTodoList.edit(name, status);
  };

  const DeleteTodo = () => todaysTodoList.delete(name);
</script>

<button
  class="btnglass justify-start pl3"
  hover="bg-slate2"
  on:click={toggleStatus}
  on:mouseenter={() => (isHovered = true)}
  on:mouseleave={() => (isHovered = false)}
>
  <Checkbox checked={status == "done"} externalClick={toggleStatus} />
  {name}

  {#if isHovered}
    <Btn
      icon="i-fluent:delete-12-filled text-sm"
      class="p1 ml-auto"
      onClick={DeleteTodo}
    />
  {/if}
</button>
