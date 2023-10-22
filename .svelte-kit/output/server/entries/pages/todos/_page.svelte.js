import { c as create_ssr_component, h as compute_rest_props, v as validate_component, i as add_classes, d as escape, a as subscribe, e as each, b as add_attribute } from "../../../chunks/ssr.js";
import { B as Button } from "../../../chunks/button.js";
import { b as todaysTodoList } from "../../../chunks/store.js";
const Checkbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let icon;
  let $$restProps = compute_rest_props($$props, ["checked", "externalClick"]);
  let { checked = false } = $$props;
  let { externalClick } = $$props;
  const handleClick = () => {
    checked = !checked;
    externalClick(checked);
  };
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.externalClick === void 0 && $$bindings.externalClick && externalClick !== void 0)
    $$bindings.externalClick(externalClick);
  icon = checked ? "i-fluent:checkmark-circle-12-filled" : "i-fluent:circle-16-regular";
  return `${validate_component(Button, "Btn").$$render($$result, Object.assign({}, { icon }, { onClick: handleClick }, { class: "btnglass p0" }, $$restProps, { hover: "text-blue" }), {}, {})}`;
});
const TodoItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { status } = $$props;
  const toggleStatus = () => {
    status = status == "done" ? "todo" : "done";
    todaysTodoList.edit(name, status);
  };
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  return `<button class="${["btnglass justify-start pl3", status == "done" ? "!text-slate-5" : ""].join(" ").trim()}" hover="bg-slate2">${validate_component(Checkbox, "Checkbox").$$render(
    $$result,
    {
      checked: status == "done",
      externalClick: toggleStatus
    },
    {},
    {}
  )} <p${add_classes((status == "done" ? "line-through" : "").trim())}>${escape(name)}</p> ${``}</button>`;
});
const Todolist = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let getTodos;
  let $todaysTodoList, $$unsubscribe_todaysTodoList;
  $$unsubscribe_todaysTodoList = subscribe(todaysTodoList, (value) => $todaysTodoList = value);
  let todoSwitcherLabels = [
    {
      name: "All",
      icon: "i-ic:round-clear-all",
      type: "all"
    },
    {
      name: "To do",
      icon: "i-mdi:orbit",
      type: "todo"
    },
    {
      name: "Completed",
      icon: "i-line-md:circle-to-confirm-circle-transition",
      type: "done"
    }
  ];
  let clickedSwitcherLabel = "all";
  let inputVal = "";
  getTodos = (status) => {
    if (status == "all")
      return $todaysTodoList;
    return $todaysTodoList.filter((todo) => todo.status === status);
  };
  $$unsubscribe_todaysTodoList();
  return `<section class="mx-auto flex flex-col" gap7 p10><h2 text="center" data-svelte-h="svelte-kmyzxc">Today&#39;s Todo List</h2> <flex gap3 class="bg-black p3" rounded="xl">${each(todoSwitcherLabels, (label) => {
    return `${validate_component(Button, "Btn").$$render(
      $$result,
      {
        text: label.name,
        icon: label.icon,
        hover: "bg-slate7",
        class: `${clickedSwitcherLabel === label.type ? "bg-white text-black hover:text-white" : ""}`,
        onClick: () => clickedSwitcherLabel = label.type
      },
      {},
      {
        default: () => {
          return `<span pl="1">${escape(getTodos(label.type).length)}</span> `;
        }
      }
    )}`;
  })}</flex> <input placeholder="Add Todo" class="border-2 border-solid border-slate3"${add_attribute("value", inputVal, 0)}>  <grid bg="slate1" p3 rounded="xl">${each(getTodos(clickedSwitcherLabel), (todo) => {
    return `${validate_component(TodoItem, "TodoItem").$$render($$result, { name: todo.name, status: todo.status }, {}, {})}`;
  })}</grid></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Todolist, "TodoList").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
