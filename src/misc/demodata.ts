import type Projects from "@/types/projects";

export const projectsData: Projects[] = [
  {
    name: "webdev",
    description: "All web dev stuff I've learned",
    todos: [
      { name: "Learn UI / UX Development", type: "todo" },
      { name: "Learn WebSockets stuff", type: "done" },
    ],
  },

  {
    name: "school",
    description: "school related stuff",
    todos: [
      { name: "Do math homework", type: "done" },
      { name: "Finish art assignment", type: "in-progress" },
    ],
  },
];
