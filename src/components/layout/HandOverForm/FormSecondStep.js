import React from 'react'
import { Field, ErrorMessage } from 'formik'

const FormFirstStep = ({ step }) => {
  return (
    <>
      <p className='handOverForm__step'>Krok {step}/4</p>
      <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
      <div className='form__select'>
        <label htmlFor='numbersOfBag'>Liczba 60l worków: </label>
        <Field as='select' name='numbersOfBag' className='handOverForm__select'>
          <option value=''>- wybierz -</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </Field>
        <ErrorMessage name='numbersOfBag' />
      </div>
    </>
  )
}

export default FormFirstStep
