import React, { useState, useEffect } from "react";
import axios from "axios";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  async function fetchTodos() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    setTodos(data);
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
};

export default TodoList;
