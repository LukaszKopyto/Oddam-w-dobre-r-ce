import React, { useContext } from 'react'
import { AuthUserContext } from '../Session'
import TopMenuAuth from './TopMenuAuth'
import TopMenuNoAuth from './TopMenuNoAuth'

const TopMenu = () => {
  let authUser = useContext(AuthUserContext)

  return <>{authUser ? <TopMenuAuth /> : <TopMenuNoAuth />}</>
}

export default TopMenu
