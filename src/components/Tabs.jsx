export function Tabs(props) {
  const { todos } = props;

  const tabs = ["All Todos", "Open Todos", "Completed Todos"];
  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        const numOfTasks =
          tab === "All Todos"
            ? todos.length
            : tab === "Open Todos"
            ? todos.filter((value) => !value.completed).length
            : todos.filter((value) => value.completed).length;

        return (
          <button className="tab-button" key={tabIndex}>
            <h4>
              {tab} <span>({numOfTasks})</span>
            </h4>
          </button>
        );
      })}
    </nav>
  );
}
