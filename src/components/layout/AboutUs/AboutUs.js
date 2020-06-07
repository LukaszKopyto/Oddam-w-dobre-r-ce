import React from 'react'
import decoration from '../../../assets/Decoration.svg'
import signature from '../../../assets/Signature.svg'
import people from '../../../assets/People.jpg'

const AboutUs = () => {
  return (
    <div className='about' name='aboutUs'>
      <div className='about__box'>
        <div className='about__box-container'>
          <h2>O nas</h2>
          <img src={decoration} alt='' />
          <p>
            Nori grape silver beet broccoli kombu beet greens fava bean potato
            quandong celery. Bunya nuts black-eyed pea prairie turnip leek
            lentil turnip greens parsnip.
          </p>
          <img src={signature} alt='' className='about__box-signature' />
        </div>
      </div>
      <div
        className='about__box'
        style={{ backgroundImage: `url(${people})` }}
      ></div>
    </div>
  )
}

export default AboutUs
