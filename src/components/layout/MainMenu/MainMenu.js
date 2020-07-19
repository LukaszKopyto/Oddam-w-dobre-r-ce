import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const MainMenu = () => {
  return (
    <section className='mainMenu'>
      <nav className='mainMenu__nav'>
        <RouterLink to='/' className='mainMenu__nav--item' title='Start'>
          Start
        </RouterLink>
        <a href='/#info' className='mainMenu__nav--item' title='O co chodzi ?'>
          O co chodzi ?
        </a>
        <a href='/#about' className='mainMenu__nav--item' title='O nas'>
          O nas
        </a>
        <a
          href='/#help'
          className='mainMenu__nav--item'
          title='Fundacja i organizacje'
        >
          Fundacja i organizacje
        </a>
        <a href='/#contact' className='mainMenu__nav--item' title='Kontakt'>
          Kontakt
        </a>
      </nav>
    </section>
  )
}

export default MainMenu
