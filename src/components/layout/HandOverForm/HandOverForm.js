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
import ImportantInfo from './ImportantInfo'

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

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    if (step === 5) {
      firebase.setUserFormData(uid, values)
      firebase.setSummaryOfTheForm(
        values.numbersOfBag,
        values.whoYouWantToHelp.length
      )
      setSuccessMessage(true)
      setSubmitting(false)
      resetForm({})
    } else {
      setStep((step) => step + 1)
      setSubmitting(false)
    }
  }

  const handleBack = () => {
    setStep((step) => step - 1)
  }

  const validate = (values) => {
    let errors = {}
    if (step === 4) {
      errors = {
        address: {},
      }
    }

    if (!values.handOver && step === 1) {
      errors.handOver = 'Wybierz co chcesz oddać'
    }

    if (!values.numbersOfBag && step === 2) {
      errors.numbersOfBag = 'Wybierz ile worków chcesz przekazać'
    }

    if (!values.whoYouWantToHelp && step === 3) {
      errors.whoYouWantToHelp = 'Zaznacz komu chcesz pomóc'
    }

    if (!values.address.street && step === 4) {
      errors.address.street = 'Pole wymagane'
    } else if (!values.address.city && step === 4) {
      errors.address.city = 'Pole wymagane'
    } else if (
      !/^[0-9]{2}[-\s]*?[0-9]{3}$/i.test(values.address.postalCod) &&
      step === 4
    ) {
      errors.address.postalCod = 'Nieprawidłowy numer kod pocztowy'
    } else if (
      !/(?<!\w)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)/i.test(
        values.address.phone
      ) &&
      step === 4
    ) {
      errors.address.phone = 'Nieprawidłowy numer telefonu'
    } else {
      errors = {}
    }

    return errors
  }

  const formSteps = (step) => {
    switch (step) {
      case 1:
        return <FormFirstStep step={step} />
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

  return (
    <div className='handOverForm'>
      {step < 5 && <ImportantInfo step={step} />}
      <section
        className='handOverForm__wrapper'
        style={{ backgroundImage: `url(${backgroundForm})` }}
      >
        <div className='handOverForm__main'>
          {successMessage ? (
            <ThankYouMessage />
          ) : (
            <Formik
              initialValues={INITIAL_STATE}
              onSubmit={handleSubmit}
              validate={validate}
            >
              {({ isSubmitting }) => (
                <Form>
                  {formSteps(step)}
                  <StepsButtons
                    prev={handleBack}
                    step={step}
                    isSubmitting={isSubmitting}
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
