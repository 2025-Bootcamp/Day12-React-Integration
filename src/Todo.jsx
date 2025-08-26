import React, { useEffect } from "react";
import { useTodoStore } from "./stores/useTodoStore";
import axios from "axios";

const TodoList = () => {
  const { todos, fetchTodos } = useTodoStore();

  const corsRequest = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/todos"
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchTodos();
    corsRequest();
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
