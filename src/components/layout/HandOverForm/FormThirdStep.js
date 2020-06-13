import React from 'react'
import { Field } from 'formik'

const FormThirdStep = ({ step }) => {
  return (
    <>
      <p className='handOverForm__step'>Krok {step}/4</p>
      <h2>Lokalizacja:</h2>
      <Field as='select' name='localization' className='handOverForm__select'>
        <option value=''>- wybierz -</option>
        <option value='Poznań'>Poznań</option>
        <option value='Warszawa'>Warszawa</option>
        <option value='Kraków'>Kraków</option>
        <option value='Wrocław'>Wrocław</option>
        <option value='Katowice'>Katowice</option>
      </Field>
      <h3>Komu chcesz pomóc ?</h3>
      <Field
        type='radio'
        name='whoYouWantToHelp'
        value='dzieciom'
        id='whoYouWantToHelp1'
      />
      <label
        htmlFor='whoYouWantToHelp1'
        className='form__radio'
        title='Dzieciom'
      />

      <Field
        type='radio'
        name='whoYouWantToHelp'
        value='samotnym matkom'
        id='whoYouWantToHelp2'
      />
      <label
        htmlFor='whoYouWantToHelp2'
        className='form__radio'
        title='Samotnym matkom'
      />

      <Field
        type='radio'
        name='whoYouWantToHelp'
        value='bezdomnym'
        id='whoYouWantToHelp3'
      />
      <label
        htmlFor='whoYouWantToHelp3'
        className='form__radio'
        title='Bezdomnym'
      />

      <Field
        type='radio'
        name='whoYouWantToHelp'
        value='niepełnosprawnym'
        id='whoYouWantToHelp4'
      />
      <label
        htmlFor='whoYouWantToHelp4'
        className='form__radio'
        title='Niepełnosprawnym'
      />

      <Field
        type='radio'
        name='whoYouWantToHelp'
        value='osobom starszym'
        id='whoYouWantToHelp5'
      />
      <label
        htmlFor='whoYouWantToHelp5'
        className='form__radio'
        title='Osobom starszym'
      />
      <h3>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
      <Field name='organization' />
    </>
  )
}

export default FormThirdStep
