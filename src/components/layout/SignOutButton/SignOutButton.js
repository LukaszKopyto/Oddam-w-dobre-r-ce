import React, { useContext } from 'react'
import { FirebaseContext } from '../../Firebase'

const SignOutButton = () => {
  const firebase = useContext(FirebaseContext)

  return (
    <button
      type='button'
      onClick={firebase.doSignOut}
      className='topMenu__nav--item menuBtn'
      title='Wyloguj'
    >
      Wyloguj
    </button>
  )
}

export default SignOutButton
