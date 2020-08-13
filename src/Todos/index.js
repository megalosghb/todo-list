import React from 'react';
import {
  FormControlLabel,
  List,
  ListItem,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import './style.css';

export const Todos = ({ showAll, todos, changeItem, deleteItem }) => {
  return (
    <List className="todos">
      {todos.map((todo) => {
        if (!showAll && todo.done) {
          return null;
        }
        return (
          <ListItem key={todo._id}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={todo.done}
                  color="primary"
                  onChange={() => changeItem(todo._id)}
                />
              }
              label={todo.title}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="comments"
                color="secondary"
                onClick={() => deleteItem(todo._id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};
