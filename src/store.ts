import { writable } from "svelte/store";
import { projectsData } from "@/misc/demodata";

import type Projects from "@/types/projects";

export const activeSection = writable<string>("Projects");
export const projects = writable<Projects[]>(projectsData);
