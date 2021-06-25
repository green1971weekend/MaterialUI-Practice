import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'

import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route exact path="/create">
          <Create />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
