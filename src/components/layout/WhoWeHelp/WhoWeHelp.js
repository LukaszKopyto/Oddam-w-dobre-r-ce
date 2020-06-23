import React, { useState, useEffect, useContext } from 'react'
import { FirebaseContext } from '../../Firebase'
import decoration from '../../../assets/Decoration.svg'
import WhoWeHelpList from './WhoWeHelpList'

const WhoWeHelp = () => {
  const [organisations, setOrganisations] = useState(null)
  const [listItem, setListItem] = useState(null)

  const firebase = useContext(FirebaseContext)

  useEffect(() => {
    firebase.whoWeHelp().on('value', (snapshot) => {
      const whoWeHelpObject = snapshot.val()
      const firstKey = Object.keys(whoWeHelpObject)[0]
      setOrganisations(whoWeHelpObject)
      setListItem(whoWeHelpObject[firstKey])
    })
    return () => {
      firebase.whoWeHelp().off()
    }
  }, [firebase])

  const handleOnClick = (e) => {
    setListItem(organisations[e.target.textContent])
  }

  return (
    <div className='help' id='help' name='help'>
      <h2>Komu pomagamy?</h2>
      <img src={decoration} alt='' />
      <div className='help__nav'>
        {organisations &&
          Object.keys(organisations).map((item, id) => (
            <button
              key={`${item}${id}`}
              className='btn-small'
              title={item}
              onClick={handleOnClick}
            >
              {item}
            </button>
          ))}
      </div>
      {listItem && <WhoWeHelpList items={listItem} />}
    </div>
  )
}

export default WhoWeHelp
