import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false
    }
  ],
  addTodo: (todo) => {}, // Methods
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {}
})


// Custom Hook

export const useTodo = () => {
  return useContext(TodoContext)
}

// Provider

export const TodoProvider = TodoContext.Provider