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
        method: 'POST', // *GET, POST, PUT, DELETE, etc.

        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },

        body: JSON.stringify({ title: newTitle }), // body data type must match "Content-Type" header
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
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.

        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },

        body: JSON.stringify({ done: !item.done }), // body data type must match "Content-Type" header
      }
    );

    const taskData = await response.json();
    if (!taskData.taskId) alert("New Item wasn't added to DB");
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
            />
            <hr />
          </>
        )}
        <TodosForm addTodo={handleAddTodo} />
      </Box>
    </Paper>
  );
};
