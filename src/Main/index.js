import React from 'react';
import { Todos } from '../Todos';
import { TodosForm } from '../TodosForm';
export const Main = () => {
  const [todos, setTodos] = React.useState([
    {
      id: 0,
      title: 'Lern',
      done: false,
    },

    {
      id: 1,
      title: 'Run',
      done: false,
    },

    {
      id: 2,
      title: 'Shopping',
      done: false,
    },
  ]);

  const handleAddTodo = (newTitle) => {
    const newItem = {
      id: todos.length,
      title: newTitle,
      done: false,
    };
    setTodos([...todos, newItem]);
  };

  return (
    <main className="App-main">
      <Todos todos={todos} />
      <hr />
      <TodosForm addTodo={handleAddTodo} />
    </main>
  );
};
