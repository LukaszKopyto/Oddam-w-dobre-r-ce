import React from 'react'
import HomeHeader from '../HomeHeader/HomeHeader'
import ThreeColums from '../ThreeColumns/ThreeColums'
import Hero from '../Hero/Hero'
import Info from '../Info/Info'
import AboutUs from '../AboutUs/AboutUs'
import Help from '../Help/Help'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <>
      <HomeHeader />
      <Hero />
      <ThreeColums />
      <Info />
      <AboutUs />
      <Help />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
