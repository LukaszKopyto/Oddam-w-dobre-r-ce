import React, { useState, useEffect, useContext } from 'react'
import { FirebaseContext } from '../../Firebase'
import Background from '../../../assets/3ColumnsBackground.png'

const ThreeColums = () => {
  let firebase = useContext(FirebaseContext)
  const [summaryInfo, setSummaryInfo] = useState(null)

  useEffect(() => {
    firebase.summaryOfTheForm().on('value', (snapshot) => {
      let summary = snapshot.val()
      setSummaryInfo(summary)
    })
    return () => {
      firebase.summaryOfTheForm().off()
    }
  }, [firebase])

  return (
    <section
      className='threeColumns'
      id='threeColumns'
      name='threeColums'
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className='threeColumns__box'>
        <span>{summaryInfo ? summaryInfo.numberOfBag : 0}</span>
        <h2>oddanych worków</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim
          a elit viverra elementuma. Aliquam erat volutpat.
        </p>
      </div>
      <div className='threeColumns__box'>
        <span>{summaryInfo ? summaryInfo.numberOfOrganisations : 0}</span>
        <h2>wspartych organizacji</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim
          a elit viverra elementuma. Aliquam erat volutpat.
        </p>
      </div>
      <div className='threeColumns__box'>
        <span>{summaryInfo ? summaryInfo.numberOfPeople : 0}</span>
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
