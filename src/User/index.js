import React from 'react';
import { List, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const User = () => {
  const [user, setUser] = React.useState([]);
  React.useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = async () => {
    const response = await fetch(
      `https://merey-todo-list.herokuapp.com/api/users`
    );
    const userData = await response.json();
    setUser(userData);
  };
  if (user.length === 0) return <h1> Loading...</h1>;
  return (
    <List>
      {user.map((user) => (
        <ListItem key={user._id} component={Link} to={`/user/${user._id}`}>
          {user.name}
        </ListItem>
      ))}
    </List>
  );
};
