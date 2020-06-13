import React from 'react'
import { useFormikContext } from 'formik'
import icon1 from '../../../assets/Icon-1.svg'
import icon4 from '../../../assets/Icon-4.svg'

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
      <p className='handOverForm__info'>
        <img src={icon1} alt='' />
        {numbersOfBag} worki,
        {handOver()}
        {whoYouWantToHelp}
        {whoYouWantToHelp}
      </p>
      <p className='handOverForm__info'>
        <img src={icon4} alt='' />
        dla lokalizacji: {localization}
      </p>
      <div className='handOverForm__delivery'>
        <div className='handOverForm__address'>
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
        <div className='handOverForm__address'>
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
      </div>
    </>
  )
}

export default FormSummary
