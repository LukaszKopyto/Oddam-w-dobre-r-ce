import React, { useState, useEffect, useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../../views/Home'
import SignUpPage from '../../views/SignUpPage'
import SignInPage from '../../views/SignInPage'
import { FirebaseContext } from '../../Firebase'
import { AuthUserContext } from '../Session'

function App() {
  const [authUser, setAuthUser] = useState(null)

  const firebase = useContext(FirebaseContext)

  useEffect(() => {
    firebase.auth.onAuthStateChanged((authUser) => {
      authUser ? setAuthUser(authUser) : setAuthUser(null)
    })
    return () => {
      firebase.auth.onAuthStateChanged((authUser) => {
        authUser ? setAuthUser(authUser) : setAuthUser(null)
      })
    }
  }, [])

  return (
    <AuthUserContext.Provider value={authUser}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/rejestracja' component={SignUpPage} />
          <Route path='/logowanie' component={SignInPage} />
        </Switch>
      </Router>
    </AuthUserContext.Provider>
  )
}

export default App
