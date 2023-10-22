import { writable } from "svelte/store";
import { projectsData, todaysTodoData } from "@/misc/demodata";

import type { Project, Todo } from "@/types/projects";
import type { TodaysTodo } from "@/types/todaysTodo";

//------------------------------------------- todays todo -------------------------------------------

const createProjectStore = () => {
  const { subscribe, set, update } = writable<Project[]>([]);

  return {
    subscribe,
    set,

    new: (newProject: Project) => {
      update((data) => [...data, newProject]);
    },

    delete: (index: number) => {
      update((data) => {
        data.splice(index, 1);
        return data;
      });
    },

    createTodo: (projectIndex: number, todoType: string, newTodo: Todo) => {
      update((data) => {
        data[projectIndex].todos[todoType].push(newTodo);
        return data;
      });
    },

    editTodo: (
      projectIndex: number,
      todoType: string,
      index: number,
      newTodo: Todo,
    ) => {
      update((data) => {
        data[projectIndex].todos[todoType][index] = newTodo;
        return data;
      });
    },

    deleteTodo: (projectIndex: number, todoType: string, index: number) => {
      update((data) => {
        data[projectIndex].todos[todoType].splice(index, 1);
        return data;
      });
    },
  };
};

export const projects = createProjectStore();

projects.set(projectsData);

// useful whenever a todo is dragged to another column of kanban board
export const draggedTodoData = writable<Todo>();

//------------------------------------------- todays todo -------------------------------------------

const createTodoStore = () => {
  const { subscribe, set, update } = writable<TodaysTodo[]>([]);

  return {
    subscribe,
    set,

    new: (todo: TodaysTodo) => {
      update((data: TodaysTodo[]) => [...data, todo]);
    },

    edit: (name: string, status: string) => {
      update((data: TodaysTodo[]) => {
        const todoIndex = data.findIndex((x) => x.name == name);
        data[todoIndex].status = status;
        return data;
      });
    },

    delete: (name: string) => {
      update((data: TodaysTodo[]) => {
        const todoIndex = data.findIndex((x) => x.name == name);
        data.splice(todoIndex, 1);
        return data;
      });
    },
  };
};

export const todaysTodoList = createTodoStore();
todaysTodoList.set(todaysTodoData);

//------------------------------------------ Time tracker -------------------------------------------
export const timerLength = writable<number>(25);
export const timeInSec = writable<number>(25 * 60);
export const timerInterval = writable<number>();
