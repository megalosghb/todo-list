import React from 'react';
import { FormControlLabel } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import './style.css';

export const Todos = ({ showAll, todos, changeItem }) => {
  const handleChange = (id) => {
    changeItem(id);
  };

  return (
    <ul className="todos">
      {todos.map((todo) => {
        if (!showAll && todos.done) {
          return null;
        }
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
