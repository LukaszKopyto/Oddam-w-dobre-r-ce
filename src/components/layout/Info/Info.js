import React from 'react'
import decoration from '../../../assets/Decoration.svg'
import icon1 from '../../../assets/Icon-1.svg'
import icon2 from '../../../assets/Icon-2.svg'
import icon3 from '../../../assets/Icon-3.svg'
import icon4 from '../../../assets/Icon-4.svg'
import { Link } from 'react-router-dom'

const Info = () => {
  return (
    <section className='info' name='info'>
      <p className='info__title'>Wystarczą 4 proste kroki</p>
      <img src={decoration} alt='' />
      <div className='info__fourSteps'>
        <div className='info__fourSteps-container'>
          <div className='info__fourSteps-step'>
            <img src={icon1} alt='' />
            <p>Wybierz rzeczy</p>
            <p>ubrania, zabawki, sprzęt i inne</p>
          </div>
          <div className='info__fourSteps-step'>
            <img src={icon2} alt='' />
            <p>Spakuj je</p>
            <p>skorzystaj z worków na śmieci</p>
          </div>
          <div className='info__fourSteps-step'>
            <img src={icon3} alt='' />
            <p>Zdecyduj komu chcesz pomóc</p>
            <p>wybierz zaufane miejsce</p>
          </div>
          <div className='info__fourSteps-step'>
            <img src={icon4} alt='' />
            <p>Zamów kuriera</p>
            <p>kurier przyjedzie w dogodnym terminie</p>
          </div>
        </div>
      </div>
      <Link to='/oddaj-rzecz' className='btn-primary'>
        <span>oddaj</span> rzecz
      </Link>
    </section>
  )
}

export default Info
