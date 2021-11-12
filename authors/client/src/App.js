import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Display from "./components/display";
import Update from './components/editOne'
import Create from './components/create'


function App() {
  return (
    <div>
      <h1>Favorite Authors</h1>
      <Switch>
      {/* DISPLAY ALL */}
        <Route exact path='/'>
          <Display />
        </Route>
      {/* CREATE */}
        <Route exact path='/authors/create'>
          <Create />
        </Route>
      {/* UPDATE */}
        <Route exact path='/authors/edit/:id'>
          <Update />
        </Route>
      </Switch>
    </div>
  );
}

export default App;





