<script lang="ts">
  import Btn from "$lib/components/ui/button.svelte";
  import ProgressBar from "$lib/components/ui/progressbar.svelte";
  import { projects } from "$lib/store";

  export let name: string = "";
  export let description: string = "";
  export let onClick: () => void = () => {};
  export let index: number;

  const deleteProject = () => {
    projects.delete(index);
  };

  let todosCount: number = 0;
  let finishedTodosCount: number = 0;
  let todoProgessStr: string = "";

  const getTodosLen = () => {
    const todos = $projects[index].todos;

    todosCount =
      todos.todo.length + todos.inProgress.length + todos.completed.length;

    finishedTodosCount = todos.completed.length;

    const todosDonePercentage = Math.floor(
      (finishedTodosCount / todosCount) * 100,
    );

    todoProgessStr = `${todosDonePercentage.toString()}%`;

    if (todoProgessStr == "NaN%") todoProgessStr = "0%";
  };

  getTodosLen();
</script>

<button
  class="curved grid gap3 p5 btnglass !bg-white text-left"
  justify="stretch"
  hover="cursor-pointer !bg-slate2"
  on:click={(e) => {
    e.stopPropagation();
    onClick();
  }}
>
  <h3>{name}</h3>
  <p text="slate5">{description}</p>

  <ProgressBar progress={todoProgessStr} css="[&_*]:p0.7" />

  <flex class="gap2 vertCentered [&_*]:text-sm">
    <span class="i-bi:check-all"></span>
    <span text="sm"> Todos done </span>
    <span>{finishedTodosCount} / {todosCount}</span>
  </flex>

  <Btn
    ml="auto"
    rounded="full"
    icon="i-ep:delete-filled bg-red3 text-sm"
    p="2"
    onClick={deleteProject}
  />
</button>
