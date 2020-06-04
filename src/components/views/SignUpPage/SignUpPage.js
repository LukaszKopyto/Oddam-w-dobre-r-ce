import React, { useContext } from 'react'
import SignUpForm from '../../layout/SignUpForm'
import { FirebaseContext } from '../../Firebase'

const SignUpPage = () => {
  const firebase = useContext(FirebaseContext)
  return (
    <div>
      <h1>Załóż konto</h1>
      <SignUpForm firebase={firebase} />
    </div>
  )
}

export default SignUpPage
