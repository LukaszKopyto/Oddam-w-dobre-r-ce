import React from 'react'
import decoration from '../../../assets/Decoration.svg'

const ThankYouMessage = () => {
  return (
    <div className='successMessage'>
      <p>Dziękujemy za przesłanie formularza</p>
      <p>Na maila prześlemy wszelkie</p>
      <p>informacje o odbiorze.</p>
      <img src={decoration} alt='' />
    </div>
  )
}

export default ThankYouMessage
