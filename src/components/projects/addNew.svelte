<script lang="ts">
  import { projects } from "@/store";

  import Btn from "@/components/ui/button.svelte";
  import Modal from "@/components/ui/modal.svelte";

  let formVisible = false;
  let projectName = "";
  let description = "";

  const onSubmit = (e: any) => {
    e.preventDefault();

    projects.new({
      name: projectName,
      description: description,
      todos: { todo: [], inProgress: [], completed: [] },
    });

    formVisible = false;
    projectName = "";
    description = "";
  };
</script>

<div ml="auto" class="relative">
  <Btn
    text="Add New"
    icon="i-ic:round-add"
    onClick={() => (formVisible = true)}
  />

  <!-- add new form -->
  <Modal
    title="Add New Project"
    onClose={() => (formVisible = false)}
    visible={formVisible}
  >
    <form on:submit={onSubmit}>
      <grid p5 gap5>
        <input
          placeholder="Enter Project Name"
          required
          bind:value={projectName}
        />

        <input
          placeholder="Enter Description"
          required
          bind:value={description}
        />

        <Btn
          ml="auto"
          text="Save"
          type="submit"
          icon="i-material-symbols:save-rounded text-sm"
        />
      </grid>
    </form>
  </Modal>
</div>
