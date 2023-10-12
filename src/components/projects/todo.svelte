<script lang="ts">
  import Btn from "@/components/ui/button.svelte";
  import TodoEditor from "./todoEditor.svelte";

  export let name: string;
  export let desc: string;
  export let type: string;
  export let index: number;
  export let projectIndex: number;

  let editorMode = false;
</script>

<grid gap3 p4 bg-white class="curved">
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

  <Btn
    icon="i-material-symbols:edit-outline text-sm"
    mr="auto"
    p="2"
    rounded="full"
    onClick={() => (editorMode = !editorMode)}
  />
</grid>
