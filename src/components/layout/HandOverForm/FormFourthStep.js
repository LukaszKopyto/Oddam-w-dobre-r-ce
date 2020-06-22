import React from 'react'
import { Field, ErrorMessage } from 'formik'

const FormFourthStep = ({ step }) => {
  return (
    <>
      <p className='handOverForm__step'>Krok {step}/4</p>
      <h2>Podaj adres oraz termin odbioru rzecz przez kuriera</h2>
      <div className='handOverForm__delivery'>
        <div className='handOverForm__address'>
          <h3>Adres odbioru:</h3>
          <div>
            <label htmlFor='address.street'>Ulica</label>
            <Field name='address.street' />
          </div>
          <ErrorMessage name='address.street'>
            {(msg) => <div className='error__info'>{msg}</div>}
          </ErrorMessage>
          <div>
            <label htmlFor='address.city'>Miasto</label>
            <Field name='address.city' />
          </div>
          <ErrorMessage name='address.city'>
            {(msg) => <div className='error__info'>{msg}</div>}
          </ErrorMessage>
          <div>
            <label htmlFor='address.postalCod'>Kod pocztowy</label>
            <Field name='address.postalCod' />
          </div>
          <ErrorMessage name='address.postalCod'>
            {(msg) => <div className='error__info'>{msg}</div>}
          </ErrorMessage>
          <div>
            <label htmlFor='address.phone'>Numer telefonu</label>
            <Field name='address.phone' type='tel' />
          </div>
          <ErrorMessage name='address.phone'>
            {(msg) => <div className='error__info'>{msg}</div>}
          </ErrorMessage>
        </div>
        <div className='handOverForm__address'>
          <h3>Termin odbioru:</h3>
          <div>
            <label htmlFor='address.date'>Data</label>
            <Field name='address.date' type='date' />
          </div>
          <div>
            <label htmlFor='address.time'>Godzina</label>
            <Field name='address.time' type='time' />
          </div>
          <div>
            <label htmlFor='address.comments'>Uwagi do kuriera</label>
            <Field as='textarea' name='address.comments' />
          </div>
        </div>
      </div>
    </>
  )
}

export default FormFourthStep
