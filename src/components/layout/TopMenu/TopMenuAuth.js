import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import SignOutButton from '../SignOutButton/SignOutButton'
import { AuthUserContext } from '../../Session'

const TopMenu = () => {
  let authUser = useContext(AuthUserContext)

  return (
    <section className='topMenu'>
      <nav className='topMenu__nav'>
        <p className='topMenu__nav--greet'>
          Cześć {authUser && authUser.displayName}
        </p>

        <NavLink
          to='/oddaj-rzecz'
          className='topMenu__nav--item focus'
          title='Oddaj rzeczy'
        >
          Oddaj rzeczy
        </NavLink>
        <SignOutButton />
      </nav>
    </section>
  )
}

export default TopMenu
