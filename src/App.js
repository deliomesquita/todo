import Header from "./components/Header";
import Hero from "./components/Hero";
import Form from "./components/Form";
import List from "./components/List";
import { useState } from "react";
import "./style/styles.css";

function App() {
  const [todos, setTodos] = useState([
    { title: "Some task", id: crypto.randomUUID(), is_completed: false },
    { title: "Some other task", id: crypto.randomUUID(), is_completed: true },
    { title: "last task", id: crypto.randomUUID(), is_completed: false },
  ]);

  const todos_completed = todos.filter(
    (todo) => todo.is_completed === true
  ).length;
  const total_todos = todos.length;

  return (
    <div className="wrapper">
      <Header todos_completed={todos_completed} total_todos={total_todos} />
      <Hero todos_completed={todos_completed} total_todos={total_todos} />
      <Form />
      <List todos={todos} />
    </div>
  );
}

export default App;
