import React from 'react'
import { Field } from 'formik'

const FormThirdStep = ({ step }) => {
  return (
    <>
      <p>Krok {step}/4</p>
      <h2>Lokalizacja:</h2>
      <Field as='select' name='localization'>
        <option value=''>- wybierz -</option>
        <option value='Poznań'>Poznań</option>
        <option value='Warszawa'>Warszawa</option>
        <option value='Kraków'>Kraków</option>
        <option value='Wrocław'>Wrocław</option>
        <option value='Katowice'>Katowice</option>
      </Field>
      <h3>Komu chcesz pomóc ?</h3>
      <label htmlFor='whoYouWantToHelp1'>Dzieciom</label>
      <Field
        type='radio'
        name='whoYouWantToHelp'
        value='dzieciom'
        id='whoYouWantToHelp1'
      />
      <label htmlFor='whoYouWantToHelp2'>Samotnym matkom</label>
      <Field
        type='radio'
        name='whoYouWantToHelp'
        value='samotnym matkom'
        id='whoYouWantToHelp2'
      />
      <label htmlFor='whoYouWantToHelp3'>Bezdomnym</label>
      <Field
        type='radio'
        name='whoYouWantToHelp'
        value='bezdomnym'
        id='whoYouWantToHelp3'
      />
      <label htmlFor='whoYouWantToHelp4'>Niepełnosprawnym</label>
      <Field
        type='radio'
        name='whoYouWantToHelp'
        value='niepełnosprawnym'
        id='whoYouWantToHelp4'
      />
      <label htmlFor='whoYouWantToHelp5'>Osobom starszym</label>
      <Field
        type='radio'
        name='whoYouWantToHelp'
        value='osobom starszym'
        id='whoYouWantToHelp5'
      />
      <h3>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
      <Field name='organization' />
    </>
  )
}

export default FormThirdStep
