import React from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Button, TextField, Box } from '@material-ui/core';

export const TodosForm = ({ addTodo }) => {
  const [todoTitle, setTodoTitle] = React.useState('');

  const handleChange = (event) => {
    setTodoTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(todoTitle);
    setTodoTitle('');
  };
  return (
    <form className="App-form" onSubmit={handleSubmit}>
      <Box display="flex" m={1}>
        <TextField
          type="text"
          label="New ToDo"
          value={todoTitle}
          onChange={handleChange}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<AddCircleOutlineIcon />}
        >
          Add
        </Button>
      </Box>
    </form>
  );
};
