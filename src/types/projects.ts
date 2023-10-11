interface Todo {
  name: string;
  type: string;
}

export default interface Projects {
  name: string;
  description: string;
  todos: Todo[];
}
