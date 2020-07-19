import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import SignOutButton from '../SignOutButton/SignOutButton'
import { AuthUserContext } from '../../Session'
import * as ROLES from '../../../constants/roles'

const TopMenu = () => {
  let authUser = useContext(AuthUserContext)

  return (
    <section className='topMenu'>
      <nav className='topMenu__nav'>
        <p className='topMenu__nav--greet'>
          Cześć {authUser && authUser.username}
        </p>

        <NavLink
          to='/oddaj-rzecz'
          className='topMenu__nav--item focus'
          title='Oddaj rzeczy'
        >
          Oddaj rzeczy
        </NavLink>
        {authUser && authUser.roles[ROLES.ADMIN] ? (
          <NavLink
            to='/admin'
            className='topMenu__nav--item focus'
            title='Admin'
          >
            Admin
          </NavLink>
        ) : null}

        <SignOutButton />
      </nav>
    </section>
  )
}

export default TopMenu
