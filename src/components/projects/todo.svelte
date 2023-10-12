<script lang="ts">
  import Btn from "@/components/ui/button.svelte";
  import { projects } from "@/store";

  export let name: string;
  export let desc: string;
  export let type: string;
  export let index: number;
  export let projectIndex: number;

  $: editorMode = true;

  setTimeout(() => {
    if (name !== "") {
      editorMode = false;
    }
  }, 0);

  const saveTodo = (e: any) => {
    const todo = { name: name, desc: desc };
    projects.editTodo(projectIndex, type, index, todo);

    console.log($projects);
    editorMode = false;
  };
</script>

<grid gap3 p4 bg-white class="curved">
  <!-- editor mode i.e with input fields -->
  {#if editorMode}
    <form on:submit={saveTodo} grid gap3>
      <input
        type="text"
        placeholder="Enter todo name"
        bind:value={name}
        required
      />

      <textarea
        type="description"
        placeholder="Enter description"
        bind:value={desc}
      />

      <Btn
        ml="auto"
        text="Save"
        type="submit"
        p="2 x3"
        icon="i-material-symbols:save-rounded text-sm"
      />
    </form>

    <!-- todo view mode -->
  {:else}
    <h4 font="medium" text="slate8">{name}</h4>

    {#if desc}
      <p text="slate6 base">{desc}</p>
    {/if}
  {/if}
</grid>
