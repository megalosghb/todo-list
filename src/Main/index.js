import React from 'react';
import { Todos } from '../Todos';
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
  return (
    <main className="App-main">
      <Todos todos={todos} />
    </main>
  );
};
