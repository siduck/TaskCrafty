<script lang="ts">
  import Btn from "@/components/ui/button.svelte";
  import TodoEditor from "./todoEditor.svelte";
  import { draggedTodoData, projects } from "@/store";

  export let name: string;
  export let desc: string;
  export let type: string;
  export let index: number;
  export let projectIndex: number;

  let editorMode = false;

  const handleDragStart = () => {
    let data = { type, index, projectIndex };
    draggedTodoData.set(data);
  };
</script>

<grid
  class="curved bg-white p4 gap3"
  on:dragstart={handleDragStart}
  draggable={true}
  role="application"
  hover="cursor-pointer"
>
  <!-- editor mode i.e with input fields -->
  {#if editorMode}
    <TodoEditor
      {name}
      {desc}
      {type}
      {projectIndex}
      {index}
      existingTodo={true}
      onClose={() => (editorMode = false)}
    />

    <!-- todo view mode -->
  {:else}
    <h4 font="medium" text="slate8">{name}</h4>

    {#if desc}
      <p text="slate6 base">{desc}</p>
    {/if}
  {/if}

  <flex gap='2'>
    <Btn
      icon="i-material-symbols:edit-outline text-sm"
      ml="auto"
      p="2"
      rounded="full"
      onClick={() => (editorMode = !editorMode)}
    />

    <Btn
      icon="i-material-symbols:delete"
      p="2"
      onClick={() => projects.deleteTodo(projectIndex, type, index)}
    />
  </flex>
</grid>
