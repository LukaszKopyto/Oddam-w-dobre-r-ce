import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

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
      .doCreateUserWithEmailAndPassword(email, passwordOne, username)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: username,
        })
        // Create a user in Firebase realtime database
        return firebase.user(authUser.user.uid).set({
          username,
          email,
        })
      })
      .then(() => {
        setUserData({ ...INITIAL_STATE })
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
      <div className='form-wrapper'>
        <label htmlFor='username'>Podaj Imię</label>
        <input
          name='username'
          value={username}
          onChange={onChange}
          type='text'
        />
        <label htmlFor='email'>Adres e-mail</label>
        <input name='email' value={email} onChange={onChange} type='text' />
        <label htmlFor='passwordOne'>Hasło</label>
        <input
          name='passwordOne'
          value={passwordOne}
          onChange={onChange}
          type='password'
        />
        <label htmlFor='passwordTwo'>Potwierdź hasło</label>
        <input
          name='passwordTwo'
          value={passwordTwo}
          onChange={onChange}
          type='password'
        />
      </div>
      <button
        disabled={isInvalid}
        type='submit'
        className='btn-small'
        title='Załóż konto'
      >
        Załóż konto
      </button>
      {error && <p>{error.message}</p>}
      <Link to='/logowanie' title='Zaloguj się'>
        Zaloguj się
      </Link>
    </form>
  )
}

export default SignUpForm
