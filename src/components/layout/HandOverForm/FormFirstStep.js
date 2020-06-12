import React from 'react'
import { Field, ErrorMessage } from 'formik'

const FormFirstStep = () => {
  return (
    <>
      <p>Krok 1/4</p>
      <h2>Zaznacz co chcesz oddać:</h2>
      <div className='form__check'>
        <Field type='checkbox' name='handOver.clothes' />
        <label htmlFor='handOver.clothes'>
          ubrania, które nadają się do ponownego użycia
        </label>
        <ErrorMessage name='handOver.clothes' />
      </div>
      <div className='form__check'>
        <Field type='checkbox' name='handOver.clothesToThrowAway' />
        <label htmlFor='handOver.clothesToThrowAway'>
          ubrania do wyrzucenia
        </label>
        <ErrorMessage name='handOver.clothesToThrowAway' />
      </div>
      <div className='form__check'>
        <Field type='checkbox' name='handOver.toys' />
        <label htmlFor='handOver.toys'>zabawki </label>
        <ErrorMessage name='handOver.toys' />
      </div>
      <div className='form__check'>
        <Field type='checkbox' name='handOver.books' />
        <label htmlFor='handOver.books'>książki </label>
        <ErrorMessage name='handOver.books' />
      </div>
      <div className='form__check'>
        <Field type='checkbox' name='handOver.other' />
        <label htmlFor='handOver.other'>inne </label>
        <ErrorMessage name='handOver.other' />
      </div>
    </>
  )
}

export default FormFirstStep
