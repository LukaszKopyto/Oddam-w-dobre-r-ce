import React from 'react'
import HomeHeader from '../../layout/HomeHeader'
import decoration from '../../../assets/Decoration.svg'
import { Link } from 'react-router-dom'

const SignOutPage = () => {
  return (
    <>
      <HomeHeader />
      <div className='SignOutPage'>
        <h1>
          <span>Wylogowanie nastąpiło</span> pomyślnie!
        </h1>
        <img src={decoration} alt='' className='decoration' />
        <Link to='/' className='btn-small' title='Strona główna'>
          Strona główna
        </Link>
      </div>
    </>
  )
}

export default SignOutPage
