<script lang="ts">
  import Btn from "@/components/ui/button.svelte";
  import TodoCard from "./todo.svelte";
  import TodoEditor from "./todoEditor.svelte";
  import type { Project } from "@/types/projects";
  import { projects } from "@/store";

  export let project: string = "";
  export let onClose: () => void = () => {};
  export let projectIndex: number;

  const kanbanColumns = [
    { name: "To do", storeval: "todo", bg: "bg-blue2" },
    { name: "In Progress", storeval: "inProgress", bg: "bg-red2" },
    { name: "Completed", storeval: "completed", bg: "bg-green2" },
  ];

  $: projectData = ($projects.find((x) => x.name == project) || {}) as Project;

  // store todo forms here
  let temporaryEditors = {
    todo: [],
    inProgress: [],
    completed: [],
  };

  const createTodoEditor = (type: string) => {
    let tmp = temporaryEditors;
    tmp[type].push({ name: "", desc: "" });
    temporaryEditors = tmp;
  };

  const deleteTodoEditor = (type: string, index: number) => {
    let tmp = temporaryEditors;
    tmp[type].splice(index, 1);
    temporaryEditors = tmp;
  };
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
    <section class="curved flex flex-col gap5">
      <!-- column heading -->
      <flex items="center" p3 class="curved {column.bg}">
        <h3 mr="auto">{column.name}</h3>
        <Btn
          icon="i-icon-park:plus"
          p="0"
          class="btnglass"
          onClick={() => createTodoEditor(column.storeval)}
        />
      </flex>

      <!-- todo list -->
      <flex class="flex-col gap3">
        {#each projectData?.todos[column.storeval] as todo, i}
          <TodoCard
            name={todo.name}
            desc={todo.desc}
            index={i}
            type={column.storeval}
            {projectIndex}
          />
        {/each}

        <!-- {#each } -->
        {#each temporaryEditors[column.storeval] as tmpEditor, i}
          <TodoEditor
            index={i}
            type={column.storeval}
            {projectIndex}
            onClose={() => deleteTodoEditor(column.storeval, i)}
          />
        {/each}
      </flex>
    </section>
  {/each}
</grid>
