import React from 'react'
import HomeHeroImage from '../../../assets/Home-Hero-Image.jpg'
import decoration from '../../../assets/Decoration.svg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='hero' name='hero'>
      <div
        className='hero__firstSection'
        style={{ backgroundImage: `url(${HomeHeroImage})` }}
      ></div>
      <div className='hero__secondSection'>
        <h1>
          <span>Zacznij pomagać!</span> Oddaj niechciane rzeczy w zaufane ręce
        </h1>
        <img src={decoration} alt='' />
        <div className='hero__links'>
          <Link to='/oddaj-rzecz' className='btn-primary'>
            ODDAJ RZECZY
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
