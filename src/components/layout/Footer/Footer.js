import React from 'react'
import facebookIcon from '../../../assets/Facebook.svg'
import instagramIcon from '../../../assets/Instagram.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <p>Copyright by Coders Lab</p>
      <div className='footer__social'>
        <img src={facebookIcon} alt='' />
        <img src={instagramIcon} alt='' />
      </div>
    </div>
  )
}

export default Footer
