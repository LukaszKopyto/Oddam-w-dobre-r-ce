import React from 'react'
import { Field } from 'formik'

const FormFourthStep = ({ step }) => {
  return (
    <>
      <p>Krok {step}/4</p>
      <h2>Podaj adres oraz termin odbioru rzecz przez kuriera</h2>
      <div>
        <h3>Adres odbioru:</h3>
        <div>
          <label htmlFor='address.street'>Ulica</label>
          <Field name='address.street' />
        </div>
        <div>
          <label htmlFor='address.city'>Miasto</label>
          <Field name='address.city' />
        </div>
        <div>
          <label htmlFor='address.postalCod'>Kod pocztowy</label>
          <Field name='address.postalCod' />
        </div>
        <div>
          <label htmlFor='address.phone'>Numer telefonu</label>
          <Field name='address.phone' />
        </div>
      </div>
      <div>
        <h3>Termin odbioru:</h3>
        <div>
          <label htmlFor='address.date'>Data</label>
          <Field name='address.date' />
        </div>
        <div>
          <label htmlFor='address.time'>Godzina</label>
          <Field name='address.time' />
        </div>
        <div>
          <label htmlFor='address.comments'>Uwagi do kuriera</label>
          <Field as='textarea' name='address.comments' />
        </div>
      </div>
    </>
  )
}

export default FormFourthStep
