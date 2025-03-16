export function Header(props) {
  const { todos } = props;
  const todosLength = todos.length;

  //   return tasks if more than 1, and task if equals to 1
  const isTaskMoreThanOne = todos.length != 1;
  const taskOrTasks = isTaskMoreThanOne ? "tasks" : "task";
  return (
    <header>
      <h1 className="text-gradient">
        You have {todosLength} open {taskOrTasks}
      </h1>
    </header>
  );
}
