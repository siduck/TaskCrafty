<script lang="ts">
  import Btn from "@/components/ui/button.svelte";
  import { projects } from "@/store";

  export let name: string = "";
  export let description: string = "";

  const deleteProject = () => {
    $projects = $projects.filter((project) => project.name != name);
  };
</script>

<grid bg-white p5 class="curved" gap3>
  <h3>{name}</h3>
  <p>{description}</p>

  <Btn
    ml="auto"
    rounded="full"
    icon="i-ep:delete-filled bg-red3 text-sm"
    p="2"
    onClick={deleteProject}
  />
</grid>
