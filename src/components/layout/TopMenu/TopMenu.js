import React from 'react'
import { NavLink } from 'react-router-dom'

const TopMenu = () => {
  return (
    <section className='topMenu'>
      <nav className='topMenu__nav'>
        <NavLink
          to='/logowanie'
          activClassName='active'
          className='topMenu__nav--item'
        >
          Zaloguj
        </NavLink>
        <NavLink
          to='/rejestracja'
          activClassName='active'
          className='topMenu__nav--item'
        >
          Załóż konto
        </NavLink>
      </nav>
    </section>
  )
}

export default TopMenu
