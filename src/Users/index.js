import React from 'react';
import { Tab, Box, Paper, Tabs } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';

export const Users = () => {
  const [users, setUsers] = React.useState([]);
  const { userId } = useParams();
  const tab = !userId ? false : userId;
  React.useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    const response = await fetch(
      `https://merey-todo-list.herokuapp.com/api/users`
    );
    const usersData = await response.json();
    setUsers(usersData);
  };

  if (users.length === 0) return <h1> Loading...</h1>;

  return (
    <Box display="flex" flexDirection="column" mr={2}>
      <Paper>
        <Box p={2}>
          <h1>Users</h1>
          <Tabs orientation="vertical" value={tab}>
            {users.map((user) => (
              <Tab
                component={Link}
                to={`/${user._id}`}
                key={user._id}
                value={user._id}
                label={`${user.name} ${user.surname}`}
              />
            ))}
          </Tabs>
        </Box>
      </Paper>
    </Box>
  );
};
