import React from 'react';
import './App.css';
import { Header } from './Header';
import { Main } from './Main';
import { Switch, Route } from 'react-router-dom';
import { About } from './About';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
