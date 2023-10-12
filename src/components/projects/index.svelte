<script lang="ts">
  import { projects } from "@/store";

  import Card from "./card.svelte";
  import AddNew from "./addNew.svelte";
  import Kanban from "./kanban.svelte";

  let projectListVisible: boolean = true;
  let selectedProjectName: string;
  let selectedProjectIndex: number;

  const openProject = (name: string, index: number) => {
    selectedProjectName = name;
    selectedProjectIndex = index;
    projectListVisible = false;
  };
</script>

<section p7 py5 bg-slate1>
  <!-- project list -->
  {#if projectListVisible}
    <flex mb5>
      <h2>Projects</h2>
      <AddNew />
    </flex>

    <!-- project cards -->
    <grid gap6 class="grid-cols-3">
      {#each $projects as project, i}
        <Card
          index={i}
          name={project.name}
          description={project.description}
          onClick={() => openProject(project.name, i)}
        />
      {/each}
    </grid>

    <!-- detailed project info & with kanban board -->
  {:else}
    <Kanban
      project={selectedProjectName}
      onClose={() => (projectListVisible = true)}
      projectIndex={selectedProjectIndex}
    />
  {/if}
</section>
