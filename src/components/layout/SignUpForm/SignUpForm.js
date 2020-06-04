import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from 'firebase'

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
}

const SignUpForm = ({ firebase }) => {
  const [userData, setUserData] = useState({ ...INITIAL_STATE })
  let history = useHistory()

  const onSubmit = (e) => {
    e.preventDefault()
    const { username, email, passwordOne } = userData

    firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
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
  const { username, email, passwordOne, passwordTwo, error } = userData

  const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === '' ||
    username === ''

  return (
    <form onSubmit={onSubmit}>
      <input
        name='username'
        value={username}
        onChange={onChange}
        type='text'
        placeholder='Podaj Imię'
      />
      <input
        name='email'
        value={email}
        onChange={onChange}
        type='text'
        placeholder='Adres e-mail'
      />
      <input
        name='passwordOne'
        value={passwordOne}
        onChange={onChange}
        type='password'
        placeholder='Hasło'
      />
      <input
        name='passwordTwo'
        value={passwordTwo}
        onChange={onChange}
        type='password'
        placeholder='Potwierdz hasło'
      />
      <button disabled={isInvalid} type='submit'>
        Załóż konto
      </button>
      {error && <p>{error.message}</p>}
    </form>
  )
}

export default SignUpForm
