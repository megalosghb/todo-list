import React from 'react';
import { useParams } from 'react-router-dom';
import { List, ListItem } from '@material-ui/core';

export const User = () => {
  const [user, setUser] = React.useState([]);
  const { id } = useParams();

  React.useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `https://merey-todo-list.herokuapp.com/api/users/${id}`
      );
      const userData = await response.json();
      setUser(userData);
    };
    fetchUser();
  }, [id]);

  if (!user._id) return <h1> Loading... </h1>;
  return (
    <List>
      <ListItem>
        {user.name} {user.surname}
      </ListItem>
    </List>
  );
};
