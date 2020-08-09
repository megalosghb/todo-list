import React from 'react';
import { Users } from '../Users';
import { Box } from '@material-ui/core';
import { TodoWrapper } from '../TodoWrapper';

export let Main = () => {
  return (
    <Box display="flex">
      <Users />
      <Box flexGrow={1}>
        <TodoWrapper />
      </Box>
    </Box>
  );
};
