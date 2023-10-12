<script lang="ts">
  import Btn from "@/components/ui/button.svelte";
  import { projects } from "@/store";

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
        mr="auto"
        icon="i-mi:close"
        p="2 r3"
        text="Cancel"
        type="button"
        onClick={onClose}
      />

      <Btn
        text="Save"
        type="submit"
        p="2 x3"
        icon="i-material-symbols:save-rounded text-sm"
      />
    </flex>
  </form>
</grid>
