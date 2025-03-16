export function Tabs(props) {
  const { todos, selectedTab, setSelectedTab } = props;

  const tabs = ["All Todos", "Open Todos", "Completed Todos"];
  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        const numOfTasks =
          tab === "All Todos"
            ? todos.length
            : tab === "Open Todos"
            ? todos.filter((value) => !value.complete).length
            : todos.filter((value) => value.complete).length;

        return (
          <button
            className={
              "tab-button " + (tab === selectedTab ? "tab-selected" : "")
            }
            key={tabIndex}
            onClick={() => {
              setSelectedTab(tab);
            }}
          >
            <h4>
              {tab} <span>({numOfTasks})</span>
            </h4>
          </button>
        );
      })}
      <hr />
    </nav>
  );
}
