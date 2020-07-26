import React from 'react';
import './App.css';
import { Header } from './Header';
import { Main } from './Main';
import { Switch, Route } from 'react-router-dom';
import { About } from './About';
import { Users } from './Users';
import { User } from './User';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/users">
          <Users />
        </Route>
        <Route path="/users/:id">
          <User />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
