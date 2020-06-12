import React from 'react'
import { Link } from 'react-router-dom'

const SignUpLink = () => (
  <p className='form__links'>
    Nie masz konta? <Link to='/rejestracja'>Załóż konto</Link>
  </p>
)

export default SignUpLink
