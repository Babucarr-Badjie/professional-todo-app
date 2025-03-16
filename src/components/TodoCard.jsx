export function TodoCard(props) {
  const { todo } = props;

  return (
    <div className="card todo-item">
      <p>{todo.task}</p>
      {/* <p>{todo.due}</p>
      <p>{todo.priority}</p> */}
      <div className="todo-buttons">
        <button disabled={todo.completed}>
          <h6>Done</h6>
        </button>
        <button>
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
}
