import React, { useState } from 'react'
import BgContactForm from '../../../assets/Background-Contact-Form.jpg'
import decoration from '../../../assets/Decoration.svg'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import clx from 'classnames'

const Contact = () => {
  const [submitInfo, setSubmitInfo] = useState(false)

  const initialValues = {
    name: '',
    email: '',
    message: '',
  }

  const validate = (values) => {
    let errors = {}

    if (!values.name) {
      errors.name = 'Pole wymagane'
    } else if (values.name.split(' ').length > 1) {
      errors.name = 'Podane imię jest niepoprawne'
    }

    if (!values.email) {
      errors.email = 'Pole wymagane'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Niepoprawny adres email'
    }

    if (!values.message) {
      errors.message = 'Pole wymagane'
    } else if (values.message.length < 120) {
      errors.message = 'Wiadomość musi mieć conajmniej 120 znaków'
    }

    return errors
  }

  const onSubmit = (values) => {
    fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Succes:', data)
        setSubmitInfo(true)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  return (
    <>
      <div className='contact' name='contact' id='contact'>
        <img className='contact__bg' src={BgContactForm} alt='' />
        <section className='contact__form'>
          <h2>Skontaktuj się z nami</h2>
          <img src={decoration} alt='' />
          {submitInfo && (
            <span className='contact__form-info'>
              Wiadomość została wysłana! wkrótce się skontaktujemy
            </span>
          )}
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validate={validate}
          >
            {({ errors, touched }) => (
              <Form>
                <div className='contact__form-twoInputs'>
                  <div className='contact__form-inputContainer'>
                    <label htmlFor='name'>Wpisz swoje imię</label>
                    <Field
                      type='text'
                      name='name'
                      id='name'
                      className={clx({
                        error: touched.name && errors.name,
                      })}
                    />
                    <ErrorMessage name='name'>
                      {(msg) => <span className='error__info'>{msg}</span>}
                    </ErrorMessage>
                  </div>
                  <div className='contact__form-inputContainer'>
                    <label htmlFor='email'>Wpisz swój email</label>
                    <Field
                      type='email'
                      name='email'
                      id='email'
                      className={clx({
                        error: touched.email && errors.email,
                      })}
                    />
                    <ErrorMessage name='email'>
                      {(msg) => <span className='error__info'>{msg}</span>}
                    </ErrorMessage>
                  </div>
                </div>
                <div className='contact__form-inputContainer textarea'>
                  <label htmlFor='message'>Wpisz swoją wiadomość</label>
                  <Field
                    as='textarea'
                    name='message'
                    id='message'
                    className={clx({
                      error: touched.message && errors.message,
                    })}
                  ></Field>
                  <ErrorMessage name='message'>
                    {(msg) => <span className='error__info'>{msg}</span>}
                  </ErrorMessage>
                </div>
                <button
                  type='submit'
                  className='contact__form-submit btn-small'
                  title='Wyślij'
                >
                  Wyślij
                </button>
              </Form>
            )}
          </Formik>
        </section>
      </div>
    </>
  )
}

export default Contact
