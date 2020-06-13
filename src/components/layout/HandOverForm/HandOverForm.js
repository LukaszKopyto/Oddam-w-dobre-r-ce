import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import FormFirstStep from './FormFirstStep'
import FormSecondStep from './FormSecondStep'
import FormThirdStep from './FormThirdStep'
import FormFourthStep from './FormFourthStep'

const HandOverForm = () => {
  const [step, setStep] = useState(4)

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

  const handleSubmit = () => {
    setStep((step) => step + 1)
  }

  const handleBack = () => {
    setStep((step) => step - 1)
  }

  const formSteps = (step) => {
    switch (step) {
      case 1:
        return <FormFirstStep />
      case 2:
        return <FormSecondStep step={step} />
      case 3:
        return <FormThirdStep step={step} />
      case 4:
        return <FormFourthStep step={step} />
      default:
        return <FormFirstStep />
    }
  }

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
        <Form>{formSteps(step)}</Form>
      </Formik>
    </div>
  )
}

export default HandOverForm
