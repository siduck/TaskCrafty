<script>
  import { projects } from "@/store";
  import Card from "./card.svelte";
  import AddNew from "./addNew.svelte";
</script>

<section p7 py5 bg-slate1>
  <flex>
    <h2 mb5>Projects</h2>
    <AddNew />
  </flex>

  <grid gap6 class="grid-cols-3">
    {#each $projects as project}
      <Card name={project.name} description={project.description} />
    {/each}
  </grid>
</section>
