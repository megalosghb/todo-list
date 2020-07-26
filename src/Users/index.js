import React from 'react';
import { List, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const Users = () => {
  const [users, setUsers] = React.useState([]);
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
    <List>
      {users.map((user) => (
        <ListItem key={user._id} component={Link} to={`/user/${user._id}`}>
          {user.name}
        </ListItem>
      ))}
    </List>
  );
};
