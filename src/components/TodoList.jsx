import { TodoCard } from "./TodoCard";

export function TodoList(props) {
  const { todos } = props;

  const tab = "Open Todos";
  const filterTodoList =
    tab === "All Todos"
      ? todos
      : tab === "Completed Todos"
      ? todos.filter((value) => value.completed)
      : todos.filter((value) => !value.completed);
  return (
    <>
      {filterTodoList.map((todo, todoIndex) => {
        return <TodoCard key={todoIndex} todo={todo} />;
      })}
    </>
  );
}
