import type { Project } from "@/types/projects";
import type { TodaysTodo } from "@/types/todaysTodo";

export const projectsData: Project[] = [
  {
    name: "webdev",
    description: "All web dev stuff I've learned",
    todos: {
      todo: [
        { name: "Learn HTML and CSS basics", desc: "" },
        {
          name: "Learn front-end frameworks (e.g., React)",
          desc: "Dive into a front-end framework like React",
        },
        { name: "Create a full-stack web app", desc: "" },
      ],
      inProgress: [
        {
          name: "Study JavaScript fundamentals",
          desc: "Master the basics of JavaScript for web development",
        },
        { name: "Study back-end development (e.g., Node.js)", desc: "" },
      ],
      completed: [
        {
          name: "Explore responsive web design",
          desc: "Learn how to make web pages work on different screen sizes",
        },
        { name: "Understand version control (Git)", desc: "" },
      ],
    },
  },
  {
    name: "school",
    description: "school related stuff",
    todos: {
      todo: [],
      inProgress: [{ name: "Finish art assignment", desc: "" }],
      completed: [{ name: "Do math homework", desc: "" }],
    },
  },
];

export const todaysTodoData: TodaysTodo[] = [
  { name: "Do Something", status: "done" },
  { name: "Some todo", status: "todo" },
  { name: "abc", status: "todo" },
  { name: "xyz bruh", status: "done" },
];
