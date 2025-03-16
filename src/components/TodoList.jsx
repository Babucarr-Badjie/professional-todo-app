import { TodoCard } from "./TodoCard";

export function TodoList(props) {
  const { todos, selectedTab } = props;

  const filterTodoList =
    selectedTab === "All Todos"
      ? todos
      : selectedTab === "Completed Todos"
      ? todos.filter((value) => value.complete)
      : todos.filter((value) => !value.complete);
  return (
    <>
      {filterTodoList.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            {...props}
            todo={todo}
            todoIndex={todos.findIndex((value) => value.task == todo.task)}
          />
        );
      })}
    </>
  );
}
