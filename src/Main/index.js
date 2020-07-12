import React from 'react';
import { Todos } from '../Todos';
import { TodosForm } from '../TodosForm';
import { Filtering } from '../Filtering';

export const Main = () => {
  const [showAll, setShowAll] = React.useState(false);
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

  const handleChangeItem = (id) => {
    const newTodos = [...todos];
    const item = newTodos.find((todo) => todo.id === id);
    item.done = !item.done;

    setTodos(newTodos);
  };

  return (
    <main className="App-main">
      <Filtering showAll={showAll} setShowAll={setShowAll} />
      <Todos todos={todos} showAll={showAll} changeItem={handleChangeItem} />
      <hr />
      <TodosForm addTodo={handleAddTodo} />
    </main>
  );
};
