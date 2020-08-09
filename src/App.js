import React from 'react';
import { Header } from './Header';
import { Switch, Route } from 'react-router-dom';
import { About } from './About';
import { Main } from './Main';
import { Container, Box } from '@material-ui/core';

function App() {
  return (
    <>
      <Box mb={2}>
        <Header />
      </Box>
      <Container>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/:userId">
            <Main />
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;
