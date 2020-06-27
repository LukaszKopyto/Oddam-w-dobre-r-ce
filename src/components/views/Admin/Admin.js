import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthUserContext } from '../../Session'
import { FirebaseContext } from '../../Firebase'
import AdminContent from './AdminContent'

const Admin = () => {
  const firebase = useContext(FirebaseContext)

  let history = useHistory()

  useEffect(() => {
    let privateRoute = firebase.auth.onAuthStateChanged((authUser) => {
      if (!authUser) {
        history.push('/logowanie')
      }
    })
    return () => {
      privateRoute()
    }
  }, [firebase.auth, history])

  return (
    <AuthUserContext.Consumer>
      {(authUser) => (authUser ? <AdminContent /> : null)}
    </AuthUserContext.Consumer>
  )
}

export default Admin
