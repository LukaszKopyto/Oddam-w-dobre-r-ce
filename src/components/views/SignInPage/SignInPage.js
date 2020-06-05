import React, { useContext } from 'react'
import SignUpLink from '../../layout/SignUpForm/SignUpLink'
import SignInForm from '../../layout/SignInForm'
import { FirebaseContext } from '../../Firebase'
import { PasswordForgetLink } from '../../layout/PasswordForget'

const SignInPage = () => {
  const firebase = useContext(FirebaseContext)
  return (
    <div>
      <h1>Zaloguj się</h1>
      <SignInForm firebase={firebase} />
      <SignUpLink />
      <PasswordForgetLink />
    </div>
  )
}

export default SignInPage
