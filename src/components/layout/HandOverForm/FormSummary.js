import React from 'react'
import { useFormikContext } from 'formik'

const FormSummary = () => {
  const { values: formValues } = useFormikContext()

  const {
    numbersOfBag,
    whoYouWantToHelp,
    localization,
    address: { street, city, postalCod, phone, date, time, comments },
  } = formValues

  const handOver = () => {
    const arr = Object.values(formValues.handOver)
    return arr.map((item) => item.length > 1 && ` ${item},`)
  }

  return (
    <>
      <h2>Podsumowanie Twojej darowizny</h2>
      <h3>Oddajesz:</h3>
      {numbersOfBag} worki,
      {handOver()}
      {whoYouWantToHelp}
      <p>dla lokalizacji: {localization}</p>
      <div>
        <h3>Adres odbioru:</h3>
        <p>
          <span>Ulica: </span>
          {street}
        </p>
        <p>
          <span>Miasto: </span>
          {city}
        </p>
        <p>
          <span>Kod Pocztowy: </span>
          {postalCod}
        </p>
        <p>
          <span>Numer telefonu: </span>
          {phone}
        </p>
      </div>
      <div>
        <h3>Termin odbioru:</h3>
        <p>
          <span>Data: </span>
          {date}
        </p>
        <p>
          <span>Godzina: </span>
          {time}
        </p>
        <p>
          <span>Uwagi dla kuriera: </span>
          {comments}
        </p>
      </div>
    </>
  )
}

export default FormSummary
