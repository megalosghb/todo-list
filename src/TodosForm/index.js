import React from 'react';
export const TodosForm = () => {
  return (
    <form className="App-form">
      <input type="text" placeholder="New ToDo" />
      <button type="submit">Add</button>
    </form>
  );
};
