import React from 'react';
import { Todos } from '../Todos';
import { TodosForm } from '../TodosForm';
import { Filtering } from '../Filtering';
import { useParams } from 'react-router-dom';
import { Paper, Box } from '@material-ui/core';

export const TodoWrapper = () => {
  const { userId } = useParams();
  const [showAll, setShowAll] = React.useState(false);
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `https://merey-todo-list.herokuapp.com/api/users/${userId}/todos`
      );
      const userData = await response.json();

      setTodos(userData);
    };

    fetchUser();
  }, [userId]);

  if (!userId) return <h1> Please choose User</h1>;

  const handleAddTodo = (newTitle) => {
    const newItem = {
      _id: todos.length,
      title: newTitle,
      done: false,
    };

    setTodos([...todos, newItem]);
  };

  const handleChangeItem = (id) => {
    const newTodos = [...todos];
    const item = newTodos.find((todo) => todo._id === id);
    item.done = !item.done;
    setTodos(newTodos);
  };

  return (
    <Paper>
      <Box p={2}>
        {!!todos.length && (
          <>
            <Filtering showAll={showAll} setShowAll={setShowAll} />
            <Todos
              todos={todos}
              showAll={showAll}
              changeItem={handleChangeItem}
            />
            <hr />
          </>
        )}
        <TodosForm addTodo={handleAddTodo} />
      </Box>
    </Paper>
  );
};
