import { type Project } from "@/types/projects";

export const projectsData: Project[] = [
  {
    name: "webdev",
    description: "All web dev stuff I've learned",
    todos: [
      { name: "Learn HTML and CSS basics", type: "todo" },
      {
        name: "Study JavaScript fundamentals",
        type: "in-progress",
        desc: "Master the basics of JavaScript for web development",
      },
      {
        name: "Explore responsive web design",
        type: "done",
        desc: "Learn how to make web pages work on different screen sizes",
      },
      { name: "Understand version control (Git)", type: "done" },
      {
        name: "Learn front-end frameworks (e.g., React)",
        type: "todo",
        desc: "Dive into a front-end framework like React",
      },
      {
        name: "Study back-end development (e.g., Node.js)",
        type: "in-progress",
      },
      { name: "Create a full-stack web app", type: "todo" },
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
