import React from 'react';
import './style.css';
import { Checkbox } from '@material-ui/core';
export const Todos = ({ todos }) => {
  return (
    <ul className="todos">
      {todos.map((todo) => (
        <li key={todo.id}>
          <Checkbox
            value="checkedA"
            color="primary"
            inputProps={{ 'aria-label': 'Checkbox A' }}
          />
          {todo.title} {todo.done}
        </li>
      ))}
    </ul>
  );
};
