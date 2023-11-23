<script lang="ts">
  import Btn from "$lib/components/ui/button.svelte";
  import { projects } from "$lib/store";

  export let name: string = "";
  export let desc: string = "";
  export let type: string;
  export let projectIndex: number;

  export let onClose: () => void;

  export let existingTodo: boolean = false;
  export let index: number;

  const saveTodo = (e) => {
    e.preventDefault();
    const todo = { name: name, desc: desc };

    onClose();

    if (existingTodo) {
      projects.editTodo(projectIndex, type, index, todo);
    } else {
      projects.createTodo(projectIndex, type, todo);
    }
  };
</script>

<grid gap3 p={existingTodo ? 0 : 4} bg-white class="curved">
  <!-- editor mode i.e with input fields -->
  <form on:submit={saveTodo} grid gap3>
    <input
      type="text"
      placeholder="Enter todo name"
      defaultValue={name}
      bind:value={name}
      required
    />

    <textarea
      type="description"
      placeholder="Enter description"
      bind:value={desc}
    />

    <flex gap="2">
      <Btn
        icon="i-mi:close bg-red3"
        p="2 r2.5"
        type="button"
        class='mr-auto rounded-full'
        onClick={onClose}
      />

      <Btn
        txt="Save"
        type="submit"
        p="2 x3"
        icon="i-material-symbols:save-rounded text-sm"
      />
    </flex>
  </form>
</grid>
