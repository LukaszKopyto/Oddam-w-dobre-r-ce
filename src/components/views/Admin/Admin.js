import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthUserContext } from '../../Session'
import { FirebaseContext } from '../../Firebase'
import AdminContent from './AdminContent'
import * as ROLES from '../../../constants/roles'

const Admin = () => {
  const firebase = useContext(FirebaseContext)

  let history = useHistory()

  useEffect(() => {
    let privateRoute = firebase.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        firebase
          .user(authUser.uid)
          .once('value')
          .then((snapshot) => {
            const dbUser = snapshot.val()
            if (!dbUser.roles || !dbUser.roles[ROLES.ADMIN]) {
              history.push('/logowanie')
            }
          })
      }
    })
    return () => {
      privateRoute()
    }
  }, [firebase, history])

  return (
    <AuthUserContext.Consumer>
      {(authUser) => (authUser ? <AdminContent /> : 'Loading...')}
    </AuthUserContext.Consumer>
  )
}

export default Admin
