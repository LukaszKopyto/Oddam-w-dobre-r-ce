import React from 'react'
import { Formik, Form } from 'formik'

const HandOverForm = () => {
  const INITIAL_STATE = {
    handOver: {
      clothes: '',
      clothesToThrowAway: '',
      toys: '',
      books: '',
      other: '',
    },
    numbersOfBag: '',
    localization: '',
    whoYouWantToHelp: '',
    organization: '',
    address: {
      street: '',
      city: '',
      postalCod: '',
      phone: '',
      date: '',
      time: '',
      comments: '',
    },
  }

  const handleSubmit = () => {}

  const validate = () => {}

  return (
    <div className='handOverForm'>
      <header>
        <h2>Ważne!</h2>
        <p>
          Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję
          jak poprawnie spakować rzeczy znajdziesz TUTAJ.
        </p>
      </header>
      <Formik
        enableReinitialize
        initialValues={INITIAL_STATE}
        onSubmit={handleSubmit}
        validate={validate}
      >
        <Form></Form>
      </Formik>
    </div>
  )
}

export default HandOverForm
