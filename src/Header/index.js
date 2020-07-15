import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core';

export const Header = () => {
  return (
    <header className="App-header">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={Header.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={Header.title}>
            HEADER
          </Typography>
          <Button color="inherit">
            <Link to="/">Home</Link>
          </Button>
          <Button color="inherit">
            <Link to="/about">About</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </header>
  );
};
