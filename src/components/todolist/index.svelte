<script lang="ts">
  import Btn from "@/components/ui/button.svelte";

  import TodoItem from "./todoItem.svelte";
  import { todaysTodoList } from "@/store";
  import type { TodaysTodo } from "@/types/todaysTodo";

  let todoSwitcherLabels = [
    { name: "All", icon: "i-ic:round-clear-all", type: "all" },
    { name: "To do", icon: "i-mdi:orbit", type: "todo" },
    {
      name: "Completed",
      icon: "i-line-md:circle-to-confirm-circle-transition",
      type: "done",
    },
  ];

  let clickedSwitcherLabel = "all";
  let inputVal = "";

  const addTodo = () => {
    todaysTodoList.new({ name: inputVal, status: "todo" });
    inputVal = "";
    clickedSwitcherLabel = "all";
  };

  $: getTodos = (status: string) => {
    if (status == "all") return $todaysTodoList;
    return $todaysTodoList.filter((todo: TodaysTodo) => todo.status === status);
  };
</script>

<section class="mx-auto flex flex-col" gap7 p10>
  <h2 text="center">Today's Todo List</h2>

  <flex gap3 class="bg-black p3" rounded="xl">
    {#each todoSwitcherLabels as label}
      <Btn
        text={label.name}
        icon={label.icon}
        hover="bg-slate7"
        class={`${
          clickedSwitcherLabel === label.type ? "bg-white text-black hover:text-white" : ""
        }`}
        onClick={() => (clickedSwitcherLabel = label.type)}
      >
        <span pl="1">{getTodos(label.type).length} </span>
      </Btn>
    {/each}
  </flex>

  <input
    placeholder="Add Todo"
    class="border-2 border-solid border-slate3"
    bind:value={inputVal}
    on:keydown={(e) => e.key === "Enter" && addTodo()}
  />

  <!-- todos -->
  <grid bg="slate1" p3 rounded="xl">
    {#each getTodos(clickedSwitcherLabel) as todo}
      <TodoItem name={todo.name} status={todo.status} />
    {/each}
  </grid>
</section>
