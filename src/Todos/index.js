import React from "react";
import "./style.css";
export const Todos = ({ todos }) => {
  return (
    <ul className="todos">
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title} {todo.done}
        </li>
      ))}
    </ul>
  );
};
