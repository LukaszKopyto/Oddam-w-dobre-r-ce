import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../../views/Home'
import SignUpPage from '../../views/SignUpPage'
import SignInPage from '../../views/SignInPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/rejestracja' component={SignUpPage} />
        <Route path='/logowanie' component={SignInPage} />
      </Switch>
    </Router>
  )
}

export default App
