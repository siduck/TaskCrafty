<script lang="ts">
  import Btn from "$lib/components/ui/button.svelte";
  import TodoCard from "./todo.svelte";
  import TodoEditor from "./todoEditor.svelte";
  import type { Project } from "$lib/types/projects";
  import { projects, draggedTodoData } from "$lib/store";

  export let project: string = "";
  export let onClose: () => void = () => {};
  export let projectIndex: number;

  const kanbanColumns = [
    { name: "To do", storeval: "todo", bg: "!bg-red2" , icon:'i-tabler:circle-dotted' },
    { name: "In Progress", storeval: "inProgress", bg: "!bg-blue2",icon:'i-mdi:orbit' },
    { name: "Completed", storeval: "completed", bg: "!bg-emerald2", icon:'i-tabler:circle-check' },
  ];

  $: projectData = ($projects.find((x) => x.name == project) || {}) as Project;

  // store todo forms here
  let temporaryEditors = {
    todo: [],
    inProgress: [],
    completed: [],
  };

  let dummyTodoColumn: string = "";

  // todo editor funcs
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

  // mouse drag funcs
  const handleDragEnter = (e: DragEvent, todoType: string) => {
    e.preventDefault();
    dummyTodoColumn = $draggedTodoData.type == todoType ? "" : todoType;
  };

  const handleDragOver = (e: DragEvent) => e.preventDefault();

  const handleDrop = (e: DragEvent, todoType: string) => {
    e.preventDefault();
    const x = $draggedTodoData;

    if (x.type == todoType) return;

    const newTodo = $projects[x.projectIndex].todos[x.type][x.index];
    projects.createTodo(projectIndex, todoType, newTodo);
    projects.deleteTodo(x.projectIndex, x.type, x.index);
    dummyTodoColumn = "";
  };
</script>

<!-- heading  -->
<flex mb5>
  <h2>{project}</h2>

  <!-- close kanban view! -->
  <Btn
    txt="Go Back"
    icon="i-pajamas:go-back"
    gap="3"
    ml="auto"
    onClick={onClose}
  />
</flex>

<grid class="grid-cols-3 gap5">
  {#each kanbanColumns as column}
    <section
      class="curved flex flex-col gap5 min-h-[calc(100vh-10rem)]"
      on:dragover={handleDragOver}
      on:dragenter={(e) => handleDragEnter(e, column.storeval)}
      on:drop={(e) => handleDrop(e, column.storeval)}
      role="application"
    >
      <!-- column heading -->
      <flex p3 class="vertCentered curved bg-white">
        <div class={column.icon} > </div>
        <h3 mr="auto">{column.name}</h3>
        <Btn
          icon="i-icon-park:plus text-sm"
          p="1"
          class="btnglass {column.bg} rounded-full"
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

        <!--todo editors -->
        {#each temporaryEditors[column.storeval] as tmpEditor, i}
          <TodoEditor
            index={i}
            type={column.storeval}
            {projectIndex}
            onClose={() => deleteTodoEditor(column.storeval, i)}
          />
        {/each}
      </flex>

      <!-- dummy todo placeholder (show only when dragged todo is in column) -->
      {#if dummyTodoColumn == column.storeval}
        <div class="p10 curved bg-slate2 flex" border="2px dotted gray">
          <span text="slate xl" mx-auto> Drop Here! </span>
        </div>
      {/if}
    </section>
  {/each}
</grid>
