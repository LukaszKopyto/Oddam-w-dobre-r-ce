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

  const validate = (values) => {
    let errors = {}

    const { email, password } = values

    if (!email) {
      errors.email = 'Pole wymagane'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Niepoprawny adres email'
    }

    if (!password) {
      errors.password = 'Pole wymagane'
    } else if (password.length < 6) {
      errors.password = 'Hasło musi zawierać conajmniej 6 znaków'
    }
    return errors
  }

  return (
    <>
      <Formik
        initialValues={INITIAL_STATE}
        onSubmit={onSubmit}
        validate={validate}
      >
        <Form>
          <div className='form-wrapper'>
            <label htmlFor='email'>E-mail</label>
            <Field name='email' type='text' />
            <ErrorMessage name='email'>
              {(msg) => <span className='error__info'>{msg}</span>}
            </ErrorMessage>
            <label htmlFor='password'>Hasło</label>
            <Field name='password' type='password' />
            <ErrorMessage name='password'>
              {(msg) => <span className='error__info'>{msg}</span>}
            </ErrorMessage>
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
