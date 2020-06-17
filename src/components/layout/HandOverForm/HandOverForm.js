import React, { useState, useContext } from 'react'
import { Formik, Form } from 'formik'
import FormFirstStep from './FormFirstStep'
import FormSecondStep from './FormSecondStep'
import FormThirdStep from './FormThirdStep'
import FormFourthStep from './FormFourthStep'
import StepsButtons from './StepsButtons'
import FormSummary from './FormSummary'
import backgroundForm from '../../../assets/Background-Form.jpg'
import { AuthUserContext } from '../Session'
import { FirebaseContext } from '../../Firebase'
import ThankYouMessage from './ThankYouMessage'

const HandOverForm = () => {
  const [step, setStep] = useState(1)
  const [successMessage, setSuccessMessage] = useState(false)

  const INITIAL_STATE = {
    handOver: '',
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
  let authUser = useContext(AuthUserContext)
  let firebase = useContext(FirebaseContext)
  let uid = null
  if (authUser) {
    uid = authUser.uid
  }

  const handleSubmit = (values, resetForm) => {
    firebase.setUserFormData(uid, values)
    firebase.setSummaryOfTheForm(
      values.numbersOfBag,
      values.whoYouWantToHelp.length
    )
    setSuccessMessage(true)
    resetForm({})
  }

  const handleNext = () => {
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
      case 5:
        return <FormSummary />
      default:
        return <FormFirstStep />
    }
  }

  const importantInfo = (step) => {
    switch (step) {
      case 1:
        return 'Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.'
      case 2:
        return 'Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.'
      case 3:
        return 'Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.'
      case 4:
        return 'Podaj adres oraz termin odbioru rzeczy.'
      default:
        return 'Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.'
    }
  }

  return (
    <div className='handOverForm'>
      {step < 5 && (
        <header>
          <h2>Ważne!</h2>
          <p>{importantInfo(step)}</p>
        </header>
      )}
      <section
        className='handOverForm__wrapper'
        style={{ backgroundImage: `url(${backgroundForm})` }}
      >
        <div className='handOverForm__main'>
          {successMessage ? (
            <ThankYouMessage />
          ) : (
            <Formik enableReinitialize initialValues={INITIAL_STATE}>
              {({ values, resetForm }) => (
                <Form>
                  {formSteps(step)}
                  <StepsButtons
                    prev={handleBack}
                    next={handleNext}
                    submit={() => handleSubmit(values, resetForm)}
                    step={step}
                  />
                </Form>
              )}
            </Formik>
          )}
        </div>
      </section>
    </div>
  )
}

export default HandOverForm
