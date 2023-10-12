export interface Todo {
  name: string;
  type: string;
  desc?: string;
}

export interface Project {
  name: string;
  description: string;
  todos: Todo[];
}
