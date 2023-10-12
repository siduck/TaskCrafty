<script lang="ts">
  import Btn from "@/components/ui/button.svelte";
  import { projects } from "@/store";

  export let project: string = "";
  export let onClose: () => void = () => {};

  const kanbanColumns = [
    { name: "To do", storeval: "todo" },
    { name: "In Progress", storeval: "in-progress" },
    { name: "Completed", storeval: "done" },
  ];

  $: tasks = $projects.find((x) => x.name == project)?.todos || [];
  $: todos = (name: string) => tasks.filter((x) => x.type === name);
</script>

<!-- heading  -->
<flex mb5>
  <h2>{project}</h2>

  <!-- close kanban view! -->
  <Btn
    text="Go Back"
    icon="i-pajamas:go-back"
    gap="3"
    ml="auto"
    onClick={onClose}
  />
</flex>

<grid class="grid-cols-3 gap5">
  {#each kanbanColumns as column}
    <section bg="white" p5 class="curved shadow-md">
      {column.name}

      {#each todos(column.storeval) as todo}
        <div>{todo.name}</div>
      {/each}
    </section>
  {/each}
</grid>
