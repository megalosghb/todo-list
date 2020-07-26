import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import './style.css';

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography
          className="typo"
          color="inherit"
          to="/"
          component={Link}
          variant="h6"
        >
          TODO
        </Typography>
        <Button color="inherit" to="/" component={Link}>
          Home
        </Button>
        <Button color="inherit" to="/about" component={Link}>
          About
        </Button>
        <Button color="inherit" to="/users" component={Link}>
          Users
        </Button>
      </Toolbar>
    </AppBar>
  );
};
