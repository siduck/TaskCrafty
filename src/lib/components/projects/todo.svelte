<script lang="ts">
  import Btn from "$lib/components/ui/button.svelte";
  import TodoEditor from "./todoEditor.svelte";
  import { draggedTodoData, projects } from "$lib/store";

  export let name: string;
  export let desc: string;
  export let type: string;
  export let index: number;
  export let projectIndex: number;

  let extraBtnsShown: boolean;

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
      <p text="slate6" border='0 t solid slate2' class='pt3'>{desc}</p>
    {/if}
  {/if}

  {#if !editorMode}
    <flex gap="2">
      {#if extraBtnsShown}
        <Btn
          icon="i-material-symbols:edit-outline text-sm bg-slate5"
          rounded="full"
          class="bg-slate2 p2"
          onClick={() => (editorMode = !editorMode)}
        />

        <Btn
          icon="i-material-symbols:delete bg-red3"
          p="2"
          rounded="full"
          onClick={() => projects.deleteTodo(projectIndex, type, index)}
        />
      {/if}

      <Btn
        icon="i-pepicons-pencil:dots-x text-2xl bg-gray"
        class="p0 px1 bg-slate1 ml-auto"
        hover="bg-slate2"
        onClick={() => (extraBtnsShown = !extraBtnsShown)}
      />
    </flex>
  {/if}
</grid>
