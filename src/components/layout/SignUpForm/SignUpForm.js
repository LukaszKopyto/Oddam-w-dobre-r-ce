import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const SignUpForm = ({ firebase }) => {
  const [firebaseError, setFirebaseError] = useState(null)
  let history = useHistory()

  const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
  }

  const onSubmit = (values) => {
    const { username, email, passwordOne } = values

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
        history.push('/')
      })
      .catch((error) => {
        console.log(error)
        setFirebaseError(error)
      })
  }

  const validate = (values) => {
    let errors = {}

    const { username, email, passwordOne, passwordTwo } = values

    if (!username) {
      errors.username = 'Pole wymagane'
    }

    if (!email) {
      errors.email = 'Pole wymagane'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Niepoprawny adres email'
    }

    if (!passwordOne) {
      errors.passwordOne = 'Pole wymagane'
    } else if (passwordOne.length < 6) {
      errors.passwordOne = 'Hasło musi zawierać conajmniej 6 znaków'
    }

    if (passwordOne !== passwordTwo) {
      errors.passwordTwo = 'Wpisane hasła nie pasują do siebie'
    }
    return errors
  }

  return (
    <Formik
      initialValues={INITIAL_STATE}
      onSubmit={onSubmit}
      validate={validate}
    >
      {({ errors, touched }) => (
        <Form>
          <div className='form-wrapper'>
            <label htmlFor='username'>Podaj Imię</label>
            <Field name='username' type='text' />
            <ErrorMessage name='username'>
              {(msg) => <span className='error__info'>{msg}</span>}
            </ErrorMessage>
            <label htmlFor='email'>Adres e-mail</label>
            <Field name='email' type='text' />
            <ErrorMessage name='email'>
              {(msg) => <span className='error__info'>{msg}</span>}
            </ErrorMessage>
            <label htmlFor='passwordOne'>Hasło</label>
            <Field name='passwordOne' type='password' />
            <ErrorMessage name='passwordOne'>
              {(msg) => <span className='error__info'>{msg}</span>}
            </ErrorMessage>
            <label htmlFor='passwordTwo'>Potwierdź hasło</label>
            <Field name='passwordTwo' type='password' />
            <ErrorMessage name='passwordTwo'>
              {(msg) => <span className='error__info'>{msg}</span>}
            </ErrorMessage>
          </div>
          <button
            // disabled={isInvalid}
            type='submit'
            className='btn-small'
            title='Załóż konto'
          >
            Załóż konto
          </button>
          <p className='form__links'>
            <Link to='/logowanie' title='Zaloguj się' className='align'>
              Zaloguj się
            </Link>
          </p>
          {firebaseError && (
            <p className='error__info'>{firebaseError.message}</p>
          )}
        </Form>
      )}
    </Formik>
  )
}

export default SignUpForm
