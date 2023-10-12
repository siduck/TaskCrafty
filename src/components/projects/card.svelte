<script lang="ts">
  import Btn from "@/components/ui/button.svelte";
  import { projects } from "@/store";

  export let name: string = "";
  export let description: string = "";
  export let onClick: () => void = () => {};
  export let index: number;

  const deleteProject = () => {
    projects.delete(index);
  };
</script>

<button
  class="curved grid gap3 p5 btnglass !bg-white text-left"
  justify="stretch"
  hover="cursor-pointer"
  on:click={(e) => {
    e.stopPropagation();
    onClick();
  }}
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
