import React from 'react'
import FormHeroImage from '../../../assets/Form-Hero-Image.jpg'
import decoration from '../../../assets/Decoration.svg'
import { Link } from 'react-router-dom'
import HomeHeader from '../HomeHeader'

const Hero = () => {
  return (
    <>
      <HomeHeader />
      <section className='hero' name='hero'>
        <div
          className='hero__firstSection--handOver'
          style={{ backgroundImage: `url(${FormHeroImage})` }}
        ></div>
        <div className='hero__secondSection'>
          <h1>
            <span>Oddaj rzeczy, których już nie chcesz</span> POTRZEBUJĄCYM
          </h1>
          <img src={decoration} alt='' />
          <h2>Wystarczą 4 proste kroki:</h2>
          <div className='hero__steps'>
            <div className='hero__step'>
              <p>1</p>
              <p>
                <span>Wybierz</span> rzeczy
              </p>
            </div>
            <div className='hero__step'>
              <p>2</p>
              <p>
                <span>Spakuj je</span> w worki
              </p>
            </div>
            <div className='hero__step'>
              <p>3</p>
              <p>
                <span>Wybierz</span> fundację
              </p>
            </div>
            <div className='hero__step'>
              <p>4</p>
              <p>
                <span>Zamów</span> kuriera
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
