import React, { useContext } from 'react'
import { FirebaseContext } from '../../Firebase'
import { useHistory } from 'react-router-dom'

const SignOutButton = () => {
  const firebase = useContext(FirebaseContext)
  let history = useHistory()

  const handleOnClick = () => {
    firebase
      .doSignOut()
      .then(() => history.push('/wylogowano'))
      .catch((error) => console.log(error))
  }

  return (
    <button
      type='button'
      onClick={handleOnClick}
      className='topMenu__nav--item menuBtn'
      title='Wyloguj'
    >
      Wyloguj
    </button>
  )
}

export default SignOutButton
