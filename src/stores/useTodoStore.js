import { create } from "zustand";
import axios from "axios";

export const useTodoStore = create((set, get) => ({
  todos: [],
  loading: false,
  error: null,
  fetchTodos: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(
        "/todos"
      );
      set({ todos: response.data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  addTodo: async (todo) => {
    try {
      const response = await axios.post(
        "/todos",
        todo
      );
      set({ todos: [...get().todos, response.data] });
    } catch (error) {
      set({ error: error.message });
    }
  },
}));
