<script lang="ts">
  import Btn from "@/components/ui/button.svelte";
  import { projects } from "@/store";

  export let name: string = "";
  export let description: string = "";
  export let onClick: () => void = () => {};

  const deleteProject = () => {
    $projects = $projects.filter((project) => project.name != name);
  };
</script>

<button
  class="curved grid gap3 p5 btnglass !bg-white text-left"
  justify="stretch"
  on:click={(e) => {
    e.stopPropagation();
    onClick();
  }}
  hover="cursor-pointer"
>
  <h3>{name}</h3>
  <p>{description}</p>

  <Btn
    ml="auto"
    rounded="full"
    icon="i-ep:delete-filled bg-red3 text-sm"
    p="2"
    onClick={deleteProject}
  />
</button>
