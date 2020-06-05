import React, { useState, useContext } from 'react'
import { FirebaseContext } from '../../Firebase'

const INITITAL_STATE = {
  email: '',
  error: null,
}

const PasswordForget = () => {
  const [userData, setUserData] = useState({ ...INITITAL_STATE })

  const firebase = useContext(FirebaseContext)

  const { email, error } = userData

  const onSubmit = (e) => {
    e.preventDefault()

    firebase
      .doPasswordReset(email)
      .then(() => {
        setUserData({ ...INITITAL_STATE })
      })
      .catch((error) => {
        setUserData((prev) => ({ email: '', error }))
      })
  }

  const onChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    })
  }

  const isInvalid = email === ''

  return (
    <form onSubmit={onSubmit}>
      <input
        name='email'
        value={email}
        onChange={onChange}
        type='text'
        placeholder='Adres e-mail'
      />
      <button disabled={isInvalid} type='submit'>
        Zresetuj hasło
      </button>

      {error && <p>{error.message}</p>}
    </form>
  )
}

export default PasswordForget
