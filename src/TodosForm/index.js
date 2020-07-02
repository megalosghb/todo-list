import React from 'react';
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
      <input
        type="text"
        placeholder="New ToDo"
        value={todoTitle}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};
