import React from 'react'
import './App.css';
import Form from './components/form'
import Display from './components/display'
import { Switch, Route } from 'react-router-dom'
import OneProduct from './components/oneProduct';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/products">
          <Form />
          <hr />
          <Display />
        </Route>
        <Route path='/products/:id'>
          <OneProduct />
        </Route>
      </Switch>
    </div>
  );
}

export default App;


