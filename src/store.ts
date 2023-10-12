import { writable } from "svelte/store";
import { projectsData } from "@/misc/demodata";

import type { Project, Todo } from "@/types/projects";

export const activeSection = writable<string>("Projects");

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
  };
};

export const projects = createProjectStore();

projects.set(projectsData);
