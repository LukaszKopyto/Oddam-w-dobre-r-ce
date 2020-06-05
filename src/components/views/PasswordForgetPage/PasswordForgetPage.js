import React from 'react'
import PasswordForget from '../../layout/PasswordForget'
import { Link } from 'react-router-dom'

const PasswordForgetPage = () => {
  return (
    <div>
      <h1>Przypomnij hasło</h1>
      <PasswordForget />
      <Link to='/logowanie'>Wróć do strony logowania</Link>
    </div>
  )
}

export default PasswordForgetPage
