import React from 'react'
import './App.css';
import Form from './components/form'
import Display from './components/display'
import { Switch, Route } from 'react-router-dom'
import OneProduct from './components/oneProduct';
import Update from './components/editOne'

function App() {

  return (
    <div className="App">
      <Switch>

        <Route exact path="/">
          <Form />
          <hr />
          <Display />
        </Route>

        <Route exact path='/products/:id'>
          <OneProduct />
        </Route>

        <Route exact path='/products/edit/:id'>
          <Update />
        </Route>

      </Switch>
    </div>
  );
}

export default App;


