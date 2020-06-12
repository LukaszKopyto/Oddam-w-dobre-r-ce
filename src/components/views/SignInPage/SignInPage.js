import React, { useContext } from 'react'
import SignInForm from '../../layout/SignInForm'
import { FirebaseContext } from '../../Firebase'
import { PasswordForgetLink } from '../../layout/PasswordForget'
import decoration from '../../../assets/Decoration.svg'
import HomeHeader from '../../layout/HomeHeader'

const SignInPage = () => {
  const firebase = useContext(FirebaseContext)
  return (
    <>
      <HomeHeader />
      <div className='SignInPage'>
        <h1>Zaloguj się</h1>
        <img src={decoration} alt='' className='decoration' />
        <SignInForm firebase={firebase} />
      </div>
      <PasswordForgetLink />
    </>
  )
}

export default SignInPage
