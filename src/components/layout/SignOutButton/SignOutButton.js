import React, { useContext } from 'react'
import { FirebaseContext } from '../../Firebase'

const SignOutButton = () => {
  const firebase = useContext(FirebaseContext)

  return (
    <button type='button' onClick={firebase.doSignOut}>
      Wyloguj
    </button>
  )
}

export default SignOutButton
