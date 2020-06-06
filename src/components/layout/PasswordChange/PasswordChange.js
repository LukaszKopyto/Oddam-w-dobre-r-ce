import React, { useState, useContext } from 'react'
import { FirebaseContext } from '../../Firebase'

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
}

const PasswordChange = () => {
  const [newPassword, setNewPassword] = useState({ ...INITIAL_STATE })

  const firebase = useContext(FirebaseContext)

  const { passwordOne, passwordTwo, error } = newPassword

  const onSubmit = (e) => {
    e.preventDefault()

    firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        setNewPassword({ ...INITIAL_STATE })
      })
      .catch((error) => {
        setNewPassword({ error })
      })
  }

  const onChange = (e) => {
    setNewPassword({
      ...newPassword,
      [e.target.name]: e.target.value,
    })
  }

  const isInvalid = passwordOne !== passwordTwo || passwordOne === ''

  return (
    <form onSubmit={onSubmit}>
      <input
        name='passwordOne'
        value={passwordOne}
        onChange={onChange}
        type='password'
        placeholder='Nowe Hasło'
      />
      <input
        name='passwordTwo'
        value={passwordTwo}
        onChange={onChange}
        type='password'
        placeholder='Potwierdz nowe hasło'
      />
      <button disabled={isInvalid} type='submit'>
        Zresetuj hasło
      </button>

      {error && <p>{error.message}</p>}
    </form>
  )
}

export default PasswordChange
