import React from 'react'
import { Field } from 'formik'

const FormFirstStep = ({ click }) => {
  return (
    <>
      <p className='handOverForm__step'>Krok 1/4</p>
      <h2>Zaznacz co chcesz oddać:</h2>
      <Field
        type='radio'
        name='handOver'
        value='ubrania, które nadają się do ponownego użycia'
        id='clothes'
      />
      <label htmlFor='clothes' className='form__radio'>
        ubrania, które nadają się do ponownego użycia{' '}
      </label>
      <Field
        type='radio'
        name='handOver'
        value='ubrania, do wyrzucenia'
        id='clothesToThrowAway'
      />
      <label htmlFor='clothesToThrowAway' className='form__radio'>
        ubrania, do wyrzucenia
      </label>
      <Field type='radio' name='handOver' value='zabawki' id='toys' />
      <label htmlFor='toys' className='form__radio'>
        zabawki
      </label>
      <Field type='radio' name='handOver' value='książki' id='books' />
      <label htmlFor='books' className='form__radio'>
        książki
      </label>
      <Field type='radio' name='handOver' value='inne' id='other' />
      <label htmlFor='other' className='form__radio'>
        inne
      </label>
    </>
  )
}

export default FormFirstStep
