import React from 'react'
import { Link } from 'react-router-dom'

export const PasswordForgetLink = () => {
  return (
    <p className='form__links'>
      <Link to='/przypomnij-haslo'>Przypomnij hasło?</Link>
    </p>
  )
}
