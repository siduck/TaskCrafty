export type Todo = {
  name: string;
  desc: string;
};

export type Project = {
  name: string;
  description: string;
  todos: {
    todo: Todo[];
    inProgress: Todo[];
    completed: Todo[];
  };
};
