import { w as writable } from "./index.js";
const projectsData = [
  {
    name: "webdev",
    description: "All web dev stuff I've learned",
    todos: {
      todo: [
        { name: "Learn HTML and CSS basics", desc: "" },
        {
          name: "Learn front-end frameworks (e.g., React)",
          desc: "Dive into a front-end framework like React"
        },
        { name: "Create a full-stack web app", desc: "" }
      ],
      inProgress: [
        {
          name: "Study JavaScript fundamentals",
          desc: "Master the basics of JavaScript for web development"
        },
        { name: "Study back-end development (e.g., Node.js)", desc: "" }
      ],
      completed: [
        {
          name: "Explore responsive web design",
          desc: "Learn how to make web pages work on different screen sizes"
        },
        { name: "Understand version control (Git)", desc: "" }
      ]
    }
  },
  {
    name: "school",
    description: "school related stuff",
    todos: {
      todo: [],
      inProgress: [{ name: "Finish art assignment", desc: "" }],
      completed: [{ name: "Do math homework", desc: "" }]
    }
  }
];
const todaysTodoData = [
  { name: "Do Something", status: "done" },
  { name: "Some todo", status: "todo" },
  { name: "abc", status: "todo" },
  { name: "xyz bruh", status: "done" }
];
const createProjectStore = () => {
  const { subscribe, set, update } = writable([]);
  return {
    subscribe,
    set,
    new: (newProject) => {
      update((data) => [...data, newProject]);
    },
    delete: (index) => {
      update((data) => {
        data.splice(index, 1);
        return data;
      });
    },
    createTodo: (projectIndex, todoType, newTodo) => {
      update((data) => {
        data[projectIndex].todos[todoType].push(newTodo);
        return data;
      });
    },
    editTodo: (projectIndex, todoType, index, newTodo) => {
      update((data) => {
        data[projectIndex].todos[todoType][index] = newTodo;
        return data;
      });
    },
    deleteTodo: (projectIndex, todoType, index) => {
      update((data) => {
        data[projectIndex].todos[todoType].splice(index, 1);
        return data;
      });
    }
  };
};
const projects = createProjectStore();
projects.set(projectsData);
const draggedTodoData = writable();
const createTodoStore = () => {
  const { subscribe, set, update } = writable([]);
  return {
    subscribe,
    set,
    new: (todo) => {
      update((data) => [...data, todo]);
    },
    edit: (name, status) => {
      update((data) => {
        const todoIndex = data.findIndex((x) => x.name == name);
        data[todoIndex].status = status;
        return data;
      });
    },
    delete: (name) => {
      update((data) => {
        const todoIndex = data.findIndex((x) => x.name == name);
        data.splice(todoIndex, 1);
        return data;
      });
    }
  };
};
const todaysTodoList = createTodoStore();
todaysTodoList.set(todaysTodoData);
const timerLength = writable(25);
const timeInSec = writable(25 * 60);
export {
  timeInSec as a,
  todaysTodoList as b,
  draggedTodoData as d,
  projects as p,
  timerLength as t
};
