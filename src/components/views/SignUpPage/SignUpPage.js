import React, { useContext } from 'react'
import SignUpForm from '../../layout/SignUpForm'
import { FirebaseContext } from '../../Firebase'
import HomeHeader from '../../layout/HomeHeader'
import decoration from '../../../assets/Decoration.svg'

const SignUpPage = () => {
  const firebase = useContext(FirebaseContext)
  return (
    <>
      <HomeHeader />
      <div className='SignUpPage'>
        <h1>Załóż konto</h1>
        <img src={decoration} alt='' className='decoration' />
        <SignUpForm firebase={firebase} />
      </div>
    </>
  )
}

export default SignUpPage
