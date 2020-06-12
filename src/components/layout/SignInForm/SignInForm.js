import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import SignUpLink from '../SignUpForm/SignUpLink'

const SignInForm = ({ firebase }) => {
  const [firebaseError, setFirebaseError] = useState(null)
  let history = useHistory()

  const INITIAL_STATE = {
    email: '',
    password: '',
  }

  const onSubmit = (values) => {
    const { email, password } = values

    firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        history.push('/')
      })
      .catch((error) => {
        setFirebaseError({ error })
      })
  }

  return (
    <>
      <Formik initialValues={INITIAL_STATE} onSubmit={onSubmit}>
        <Form>
          <div className='form-wrapper'>
            <label htmlFor='email'>E-mail</label>
            <Field name='email' type='text' />
            <label htmlFor='password'>Hasło</label>
            <Field name='password' type='password' />
          </div>
          <button type='submit' className='btn-small' title='Zaloguj się'>
            Zaloguj się
          </button>
          {firebaseError && (
            <p className='error__info'>{firebaseError.message}</p>
          )}
          <SignUpLink />
        </Form>
      </Formik>
    </>
  )
}

export default SignInForm
