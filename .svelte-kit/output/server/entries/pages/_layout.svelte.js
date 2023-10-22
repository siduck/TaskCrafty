import { c as create_ssr_component, v as validate_component, a as subscribe, e as each, b as add_attribute } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { B as Button } from "../../chunks/button.js";
const __uno = "";
const app = "";
const ThemeToggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let toggleIcon;
  let lightTheme = true;
  toggleIcon = lightTheme ? "i-line-md:moon-alt-to-sunny-outline-loop-transition" : "i-line-md:sunny-outline-to-moon-alt-loop-transition";
  return `${validate_component(Button, "Btn").$$render(
    $$result,
    {
      icon: toggleIcon,
      onClick: () => lightTheme = !lightTheme,
      "un-children": "text-xl",
      p: "3",
      rounded: "full",
      class: "bg-slate2 text-black"
    },
    {},
    {}
  )}`;
});
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activePage;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let sections = [
    {
      name: "Dashboard",
      icon: "i-fluent:grid-circles-24-filled",
      href: "/"
    },
    {
      name: "Time Tracker",
      icon: "i-mdi:stopwatch-outline",
      href: "/timetracker"
    },
    {
      name: "Today's Todo",
      icon: "i-material-symbols:today",
      href: "/todos"
    },
    {
      name: "Projects",
      icon: "i-ic:baseline-folder",
      href: "/projects"
    }
  ];
  activePage = $page.url.pathname;
  $$unsubscribe_page();
  return `<aside p="2 l2 " shadow-xl class="flex flex-col">${validate_component(Button, "Btn").$$render(
    $$result,
    {
      icon: "i-icon-park-solid:flashlamp",
      class: "btnglass text-2xl !w-full justify-start rounded-none",
      text: "TaskCrafty",
      font: "bold",
      border: "0 b solid slate2",
      mb: 3,
      p: "t3 b5"
    },
    {},
    {}
  )}  ${each(sections, (btn) => {
    return `<a${add_attribute("href", btn.href, 0)}>${validate_component(Button, "Btn").$$render(
      $$result,
      {
        class: `btnglass w-full justify-start  ${activePage == btn.href ? "text-slate8 !bg-slate-50" : "!text-slate5"}`,
        text: btn.name,
        icon: btn.icon,
        hover: "bg-slate-50",
        p: "r16"
      },
      {},
      {}
    )} </a>`;
  })}  <flex mt="auto" gap2>${validate_component(Button, "Btn").$$render(
    $$result,
    {
      icon: "i-mingcute:settings-1-line",
      class: "!w-full",
      text: "Settings",
      hover: "bg-slate-50"
    },
    {},
    {}
  )} ${validate_component(ThemeToggle, "ThemeToggle").$$render($$result, {}, {}, {})}</flex></aside>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main><grid class="grid-cols-[auto_1fr] h-screen">${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}</grid></main>`;
});
export {
  Layout as default
};
