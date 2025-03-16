import "./App.css";
import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {
  const todos = [
    {
      id: 1,
      task: "Buy groceries",
      completed: false,
      due: "2025-03-16",
      priority: "High",
    },
    {
      id: 2,
      task: "Finish project report",
      completed: true,
      due: "2025-03-14",
      priority: "Medium",
    },
    {
      id: 3,
      task: "Call the doctor",
      completed: false,
      due: "2025-03-17",
      priority: "High",
    },
    {
      id: 4,
      task: "Exercise for 30 minutes",
      completed: false,
      due: "2025-03-15",
      priority: "Low",
    },
    {
      id: 5,
      task: "Read a book",
      completed: true,
      due: "2025-03-20",
      priority: "Low",
    },
  ];
  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} />
      <TodoList todos={todos} />
      <TodoInput />
    </>
  );
}

export default App;
