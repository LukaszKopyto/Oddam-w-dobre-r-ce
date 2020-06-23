import React from 'react'
import { useLocation } from 'react-router-dom'
import TopMenu from '../TopMenu/TopMenu'
import MainMenu from '../MainMenu/MainMenu'
import { MainMenuHomePage } from '../MainMenu'

const HomeHeader = () => {
  let location = useLocation()
  console.log(location)

  return (
    <div className='homeHeader'>
      <TopMenu />
      {location.pathname === '/' ? <MainMenuHomePage /> : <MainMenu />}
    </div>
  )
}

export default HomeHeader
