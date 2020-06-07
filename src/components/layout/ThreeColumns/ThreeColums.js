import React from 'react'
import Background from '../../../assets/3ColumnsBackground.png'

const ThreeColums = () => {
  return (
    <section
      className='threeColumns'
      name='threeColums'
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className='threeColumns__box'>
        <span>10</span>
        <h2>oddanych worków</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim
          a elit viverra elementuma. Aliquam erat volutpat.
        </p>
      </div>
      <div className='threeColumns__box'>
        <span>5</span>
        <h2>wspartych organizacji</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim
          a elit viverra elementuma. Aliquam erat volutpat.
        </p>
      </div>
      <div className='threeColumns__box'>
        <span>7</span>
        <h2>zorganizowanych zbiórek</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim
          a elit viverra elementuma. Aliquam erat volutpat.
        </p>
      </div>
    </section>
  )
}

export default ThreeColums
