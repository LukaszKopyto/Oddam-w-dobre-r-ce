import React from 'react'
import { NavLink } from 'react-router-dom'

const TopMenu = () => {
  return (
    <section className='topMenu'>
      <nav className='topMenu__nav'>
        <NavLink to='/logowanie' className='topMenu__nav--item' title='Zaloguj'>
          Zaloguj
        </NavLink>
        <NavLink
          to='/rejestracja'
          className='topMenu__nav--item focus'
          title='Załó konto'
        >
          Załóż konto
        </NavLink>
      </nav>
    </section>
  )
}

export default TopMenu
