import React from 'react';
import './style.css';
import { FormControlLabel } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
export const Todos = ({ todos, changeItem }) => {
  const handleChange = (id) => {
    changeItem(id);
  };

  return (
    <ul className="todos">
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={todo.done}
                  color="primary"
                  onChange={() => handleChange(todo.id)}
                />
              }
              label={todo.title}
            />
          </li>
        );
      })}
    </ul>
  );
};
