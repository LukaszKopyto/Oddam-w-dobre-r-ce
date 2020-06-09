import React from 'react'
import HomeHeader from '../../layout/HomeHeader'
import ThreeColums from '../../layout/ThreeColumns'
import Hero from '../../layout/Hero'
import Info from '../../layout/Info'
import AboutUs from '../../layout/AboutUs'
import WhoWeHelp from '../../layout/WhoWeHelp'
import Contact from '../../layout/Contact'

const Home = () => {
  return (
    <>
      <HomeHeader />
      <Hero />
      <ThreeColums />
      <Info />
      <AboutUs />
      <WhoWeHelp />
      <Contact />
    </>
  )
}

export default Home
