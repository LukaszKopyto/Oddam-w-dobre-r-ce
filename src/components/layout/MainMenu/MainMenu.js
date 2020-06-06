import React from 'react'
import { Link } from 'react-scroll'
import { Link as RouterLink } from 'react-router-dom'

const MainMenu = () => {
  return (
    <section className='mainMenu'>
      <nav className='mainMenu__nav'>
        <RouterLink to='/' className='mainMenu__nav--item' title='Start'>
          Start
        </RouterLink>
        <Link
          to='info'
          smooth={'easeInQuint'}
          duration={1200}
          className='mainMenu__nav--item'
          title='O co chodzi ?'
        >
          O co chodzi ?
        </Link>
        <Link
          to='aboutUs'
          smooth={'easeInQuint'}
          duration={1200}
          className='mainMenu__nav--item'
          title='O nas'
        >
          O nas
        </Link>
        <Link
          to='help'
          smooth={'easeInQuint'}
          duration={1200}
          className='mainMenu__nav--item'
          title='Fundacja i organizacje'
        >
          Fundacja i organizacje
        </Link>
        <Link
          to='contact'
          className='mainMenu__nav--item'
          smooth={'easeInQuint'}
          duration={1200}
          title='Kontakt'
        >
          Kontakt
        </Link>
      </nav>
    </section>
  )
}

export default MainMenu
