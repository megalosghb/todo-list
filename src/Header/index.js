import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core';
import { About } from '../About';

export const Header = () => {
  return (
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
          <Button to={About} component={About} />
        </Button>
      </Toolbar>
    </AppBar>
  );
};
