import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
}

const SignInForm = ({ firebase }) => {
  const [userData, setUserData] = useState({ ...INITIAL_STATE })
  let history = useHistory()

  const { email, password, error } = userData

  const isInvalid = password === '' || email === ''

  const onSubmit = (e) => {
    e.preventDefault()

    firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        setUserData({ ...userData })
        history.push('/')
      })
      .catch((error) => {
        setUserData({ error })
      })
  }

  const onChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        name='email'
        value={email}
        onChange={onChange}
        type='text'
        placeholder='Adres e-mail'
      />
      <input
        name='password'
        value={password}
        onChange={onChange}
        type='password'
        placeholder='Hasło'
      />
      <button disabled={isInvalid} type='submit'>
        Zaloguj się
      </button>
      {error && <p>{error.message}</p>}
    </form>
  )
}

export default SignInForm
