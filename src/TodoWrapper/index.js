import React from 'react';
import { Todos } from '../Todos';
import { TodosForm } from '../TodosForm';
import { Filtering } from '../Filtering';
import { useParams } from 'react-router-dom';
import { Paper, Box } from '@material-ui/core';

export const TodoWrapper = () => {
  const { userId } = useParams();
  const [showAll, setShowAll] = React.useState(true);
  const [todos, setTodos] = React.useState([]);
  const fetchTodos = React.useCallback(async () => {
    const response = await fetch(
      `https://merey-todo-list.herokuapp.com/api/users/${userId}/todos`
    );
    const todosData = await response.json();

    setTodos(todosData);
  }, [userId]);

  React.useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  if (!userId) return <h1> Please choose User</h1>;

  const handleAddTodo = async (newTitle) => {
    const response = await fetch(
      `https://merey-todo-list.herokuapp.com/api/todos/${userId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({ title: newTitle }),
      }
    );

    const taskData = await response.json();
    if (!taskData.taskId) alert("New Item wasn't added to DB");
    else fetchTodos();
  };

  const handleChangeItem = async (id) => {
    const item = todos.find((task) => task._id === id);
    const response = await fetch(
      `https://merey-todo-list.herokuapp.com/api/todos/${id}`,
      {
        method: 'PUT',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({ done: !item.done }),
      }
    );

    const taskData = await response.json();
    if (!taskData.taskId) alert("Item property wasn't changed on DB");
    else fetchTodos();
  };

  const handleDeleteItem = async (taskId) => {
    const response = await fetch(
      `https://merey-todo-list.herokuapp.com/api/todos/${taskId}`,
      {
        method: 'DELETE',

        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const taskData = await response.json();
    if (!taskData.taskId) alert("Item wasn't deleted on DB");
    else fetchTodos();
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
              deleteItem={handleDeleteItem}
            />
            <hr />
          </>
        )}
        <TodosForm addTodo={handleAddTodo} />
      </Box>
    </Paper>
  );
};
