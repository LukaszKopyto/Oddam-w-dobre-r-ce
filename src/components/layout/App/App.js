import React, { useState, useEffect, useContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../../views/Home'
import SignUpPage from '../../views/SignUpPage'
import SignInPage from '../../views/SignInPage'
import { FirebaseContext } from '../../Firebase'
import { AuthUserContext } from '../../Session'
import PasswordForgetPage from '../../views/PasswordForgetPage/PasswordForgetPage'
import HandOver from '../../views/HandOver'
import Admin from '../../views/Admin/Admin'
import SignOutPage from '../../views/SignOutPage'

function App() {
  const [user, setUser] = useState(null)

  const firebase = useContext(FirebaseContext)

  useEffect(() => {
    let listener = firebase.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        firebase
          .user(authUser.uid)
          .once('value')
          .then((snapshot) => {
            const dbUser = snapshot.val()

            if (!dbUser.roles) {
              dbUser.roles = {}
            }

            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              ...dbUser,
            }
            setUser(authUser)
          })
      } else {
        setUser(null)
      }
    })

    return () => {
      listener()
    }
  }, [firebase])

  return (
    <AuthUserContext.Provider value={user}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/rejestracja' component={SignUpPage} />
          <Route path='/logowanie' component={SignInPage} />
          <Route path='/wylogowano' component={SignOutPage} />
          <Route path='/przypomnij-haslo' component={PasswordForgetPage} />
          <Route path='/oddaj-rzecz' component={HandOver} />
          <Route path='/admin' component={Admin} />
        </Switch>
      </Router>
    </AuthUserContext.Provider>
  )
}

export default App
