import React, { useContext } from 'react'
import { AuthUserContext } from '../Session'
import TopMenuAuth from './TopMenuAuth'
import TopMenuNoAuth from './TopMenuNoAuth'

const TopMenu = () => {
  let authUser = useContext(AuthUserContext)
  if (authUser) {
    console.log(authUser.displayName)
  }

  return <>{authUser ? <TopMenuAuth /> : <TopMenuNoAuth />}</>
}

export default TopMenu
