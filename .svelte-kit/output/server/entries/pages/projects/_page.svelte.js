import { c as create_ssr_component, d as escape, n as null_to_empty, a as subscribe, v as validate_component, b as add_attribute, e as each } from "../../../chunks/ssr.js";
import { p as projects, d as draggedTodoData } from "../../../chunks/store.js";
import { B as Button } from "../../../chunks/button.js";
const progressbar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "div.svelte-a4odyp:first-child{width:var(--progressWidth)}",
  map: null
};
const Progressbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { progress } = $$props;
  let { css = "" } = $$props;
  if ($$props.progress === void 0 && $$bindings.progress && progress !== void 0)
    $$bindings.progress(progress);
  if ($$props.css === void 0 && $$bindings.css && css !== void 0)
    $$bindings.css(css);
  $$result.css.add(css$1);
  return `<div bg="slate2" p0 rounded="lg" class="${escape(null_to_empty(css), true) + " svelte-a4odyp"}"><div bg="indigo" p="1" rounded="md" style="${"--progressWidth:" + escape(progress, true) + ";"}" class="svelte-a4odyp"></div> </div>`;
});
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $projects, $$unsubscribe_projects;
  $$unsubscribe_projects = subscribe(projects, (value) => $projects = value);
  let { name = "" } = $$props;
  let { description = "" } = $$props;
  let { onClick = () => {
  } } = $$props;
  let { index } = $$props;
  const deleteProject = () => {
    projects.delete(index);
  };
  let todosCount = 0;
  let finishedTodosCount = 0;
  let todoProgessStr = "";
  const getTodosLen = () => {
    const todos = $projects[index].todos;
    todosCount = todos.todo.length + todos.inProgress.length + todos.completed.length;
    finishedTodosCount = todos.completed.length;
    const todosDonePercentage = Math.floor(finishedTodosCount / todosCount * 100);
    todoProgessStr = `${todosDonePercentage.toString()}%`;
    if (todoProgessStr == "NaN%")
      todoProgessStr = "0%";
  };
  getTodosLen();
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  $$unsubscribe_projects();
  return `<button class="curved grid gap3 p5 btnglass !bg-white text-left" justify="stretch" hover="cursor-pointer !bg-slate2"><h3>${escape(name)}</h3> <p text="slate5">${escape(description)}</p> ${validate_component(Progressbar, "ProgressBar").$$render(
    $$result,
    {
      progress: todoProgessStr,
      css: "[&_*]:p0.7"
    },
    {},
    {}
  )} <flex class="gap2 vertCentered [&_*]:text-sm"><span class="i-bi:check-all"></span> <span text="sm" data-svelte-h="svelte-paoqqh">Todos done</span> <span>${escape(finishedTodosCount)} / ${escape(todosCount)}</span></flex> ${validate_component(Button, "Btn").$$render(
    $$result,
    {
      ml: "auto",
      rounded: "full",
      icon: "i-ep:delete-filled bg-red3 text-sm",
      p: "2",
      onClick: deleteProject
    },
    {},
    {}
  )}</button>`;
});
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { visible = true } = $$props;
  let { title = "" } = $$props;
  let { onClose } = $$props;
  let { css = "" } = $$props;
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0)
    $$bindings.onClose(onClose);
  if ($$props.css === void 0 && $$bindings.css && css !== void 0)
    $$bindings.css(css);
  return `${visible ? `<div class="absolute"><div class="fixed top-0 left-0 z-1 h-full w-full bg-black opacity-75"></div> <div class="${"fadeIn z-1 fixed bg-white softShadow rounded-lg left-50% translate-x-[-50%] " + escape(css, true) + " min-w-30rem"}"> <div class="flex items-center rounded-t-lg bg-black p-4 pl-5" style="border: 0; border-bottom: 1px solid; background-color: black; font-size: 1.5rem; color: white;"><p class="text-2xl">${escape(title)}</p> <button class="px-3 ml-auto bg-slate-7 rounded-full" data-svelte-h="svelte-1kz0q2y"><i class="i-pajamas:close text-red3"></i></button></div> ${slots.default ? slots.default({}) : ``}</div></div>` : ``}`;
});
const AddNew = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let formVisible = false;
  let projectName = "";
  let description = "";
  return `<div ml="auto" class="relative">${validate_component(Button, "Btn").$$render(
    $$result,
    {
      text: "Add New",
      icon: "i-ic:round-add",
      onClick: () => formVisible = true
    },
    {},
    {}
  )}  ${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      title: "Add New Project",
      onClose: () => formVisible = false,
      visible: formVisible
    },
    {},
    {
      default: () => {
        return `<form><grid p5 gap5><input placeholder="Enter Project Name" required${add_attribute("value", projectName, 0)}> <input placeholder="Enter Description" required${add_attribute("value", description, 0)}> ${validate_component(Button, "Btn").$$render(
          $$result,
          {
            ml: "auto",
            text: "Save",
            type: "submit",
            icon: "i-material-symbols:save-rounded text-sm"
          },
          {},
          {}
        )}</grid></form>`;
      }
    }
  )}</div>`;
});
const TodoEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "" } = $$props;
  let { desc = "" } = $$props;
  let { type } = $$props;
  let { projectIndex } = $$props;
  let { onClose } = $$props;
  let { existingTodo = false } = $$props;
  let { index } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.projectIndex === void 0 && $$bindings.projectIndex && projectIndex !== void 0)
    $$bindings.projectIndex(projectIndex);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0)
    $$bindings.onClose(onClose);
  if ($$props.existingTodo === void 0 && $$bindings.existingTodo && existingTodo !== void 0)
    $$bindings.existingTodo(existingTodo);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  return `<grid gap3${add_attribute("p", existingTodo ? 0 : 4, 0)} bg-white class="curved"> <form grid gap3><input type="text" placeholder="Enter todo name"${add_attribute("defaultvalue", name, 0)} required${add_attribute("value", name, 0)}> <textarea type="description" placeholder="Enter description">${escape(desc || "")}</textarea> <flex gap="2">${validate_component(Button, "Btn").$$render(
    $$result,
    {
      icon: "i-mi:close bg-red3",
      p: "2 r2.5",
      type: "button",
      class: "mr-auto rounded-full",
      onClick: onClose
    },
    {},
    {}
  )} ${validate_component(Button, "Btn").$$render(
    $$result,
    {
      text: "Save",
      type: "submit",
      p: "2 x3",
      icon: "i-material-symbols:save-rounded text-sm"
    },
    {},
    {}
  )}</flex></form></grid>`;
});
const Todo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { desc } = $$props;
  let { type } = $$props;
  let { index } = $$props;
  let { projectIndex } = $$props;
  let extraBtnsShown;
  let editorMode = false;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.projectIndex === void 0 && $$bindings.projectIndex && projectIndex !== void 0)
    $$bindings.projectIndex(projectIndex);
  return `<grid class="curved bg-white p4 gap3"${add_attribute("draggable", true, 0)} role="application" hover="cursor-pointer"> ${editorMode ? `${validate_component(TodoEditor, "TodoEditor").$$render(
    $$result,
    {
      name,
      desc,
      type,
      projectIndex,
      index,
      existingTodo: true,
      onClose: () => editorMode = false
    },
    {},
    {}
  )} ` : `<h4 font="medium" text="slate8">${escape(name)}</h4> ${desc ? `<p text="slate6" border="0 t solid slate2" class="pt3">${escape(desc)}</p>` : ``}`} ${!editorMode ? `<flex gap="2">${extraBtnsShown ? `${validate_component(Button, "Btn").$$render(
    $$result,
    {
      icon: "i-material-symbols:edit-outline text-sm bg-slate5",
      rounded: "full",
      class: "bg-slate2 p2",
      onClick: () => editorMode = !editorMode
    },
    {},
    {}
  )} ${validate_component(Button, "Btn").$$render(
    $$result,
    {
      icon: "i-material-symbols:delete bg-red3",
      p: "2",
      rounded: "full",
      onClick: () => projects.deleteTodo(projectIndex, type, index)
    },
    {},
    {}
  )}` : ``} ${validate_component(Button, "Btn").$$render(
    $$result,
    {
      icon: "i-pepicons-pencil:dots-x text-2xl bg-gray",
      class: "p0 px1 bg-slate1 ml-auto",
      hover: "bg-slate2",
      onClick: () => extraBtnsShown = !extraBtnsShown
    },
    {},
    {}
  )}</flex>` : ``}</grid>`;
});
const Kanban = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let projectData;
  let $projects, $$unsubscribe_projects;
  let $$unsubscribe_draggedTodoData;
  $$unsubscribe_projects = subscribe(projects, (value) => $projects = value);
  $$unsubscribe_draggedTodoData = subscribe(draggedTodoData, (value) => value);
  let { project = "" } = $$props;
  let { onClose = () => {
  } } = $$props;
  let { projectIndex } = $$props;
  const kanbanColumns = [
    {
      name: "To do",
      storeval: "todo",
      bg: "!bg-red2",
      icon: "i-tabler:circle-dotted"
    },
    {
      name: "In Progress",
      storeval: "inProgress",
      bg: "!bg-blue2",
      icon: "i-mdi:orbit"
    },
    {
      name: "Completed",
      storeval: "completed",
      bg: "!bg-emerald2",
      icon: "i-tabler:circle-check"
    }
  ];
  let temporaryEditors = { todo: [], inProgress: [], completed: [] };
  let dummyTodoColumn = "";
  const createTodoEditor = (type) => {
    let tmp = temporaryEditors;
    tmp[type].push({ name: "", desc: "" });
    temporaryEditors = tmp;
  };
  const deleteTodoEditor = (type, index) => {
    let tmp = temporaryEditors;
    tmp[type].splice(index, 1);
    temporaryEditors = tmp;
  };
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0)
    $$bindings.onClose(onClose);
  if ($$props.projectIndex === void 0 && $$bindings.projectIndex && projectIndex !== void 0)
    $$bindings.projectIndex(projectIndex);
  projectData = $projects.find((x) => x.name == project) || {};
  $$unsubscribe_projects();
  $$unsubscribe_draggedTodoData();
  return ` <flex mb5><h2>${escape(project)}</h2>  ${validate_component(Button, "Btn").$$render(
    $$result,
    {
      text: "Go Back",
      icon: "i-pajamas:go-back",
      gap: "3",
      ml: "auto",
      onClick: onClose
    },
    {},
    {}
  )}</flex> <grid class="grid-cols-3 gap5">${each(kanbanColumns, (column) => {
    return `<section class="curved flex flex-col gap5 min-h-[calc(100vh-10rem)]" role="application"> <flex p3 class="vertCentered curved bg-white"><div${add_attribute("class", column.icon, 0)}></div> <h3 mr="auto">${escape(column.name)}</h3> ${validate_component(Button, "Btn").$$render(
      $$result,
      {
        icon: "i-icon-park:plus text-sm",
        p: "1",
        class: "btnglass " + column.bg + " rounded-full",
        onClick: () => createTodoEditor(column.storeval)
      },
      {},
      {}
    )}</flex>  <flex class="flex-col gap3">${each(projectData?.todos[column.storeval], (todo, i) => {
      return `${validate_component(Todo, "TodoCard").$$render(
        $$result,
        {
          name: todo.name,
          desc: todo.desc,
          index: i,
          type: column.storeval,
          projectIndex
        },
        {},
        {}
      )}`;
    })}  ${each(temporaryEditors[column.storeval], (tmpEditor, i) => {
      return `${validate_component(TodoEditor, "TodoEditor").$$render(
        $$result,
        {
          index: i,
          type: column.storeval,
          projectIndex,
          onClose: () => deleteTodoEditor(column.storeval, i)
        },
        {},
        {}
      )}`;
    })}</flex>  ${dummyTodoColumn == column.storeval ? `<div class="p10 curved bg-slate2 flex" border="2px dotted gray" data-svelte-h="svelte-clk4bi"><span text="slate xl" mx-auto>Drop Here!</span> </div>` : ``} </section>`;
  })}</grid>`;
});
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $projects, $$unsubscribe_projects;
  $$unsubscribe_projects = subscribe(projects, (value) => $projects = value);
  let projectListVisible = true;
  let selectedProjectName;
  let selectedProjectIndex;
  const openProject = (name, index) => {
    selectedProjectName = name;
    selectedProjectIndex = index;
    projectListVisible = false;
  };
  $$unsubscribe_projects();
  return `<section p7 py5 bg-pale> ${projectListVisible ? `<flex mb5><h2 data-svelte-h="svelte-7jt1gw">Projects</h2> ${validate_component(AddNew, "AddNew").$$render($$result, {}, {}, {})}</flex>  <grid gap6 class="grid-cols-3">${each($projects, (project, i) => {
    return `${validate_component(Card, "Card").$$render(
      $$result,
      {
        index: i,
        name: project.name,
        description: project.description,
        onClick: () => openProject(project.name, i)
      },
      {},
      {}
    )}`;
  })}</grid> ` : `${validate_component(Kanban, "Kanban").$$render(
    $$result,
    {
      project: selectedProjectName,
      onClose: () => projectListVisible = true,
      projectIndex: selectedProjectIndex
    },
    {},
    {}
  )}`}</section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
