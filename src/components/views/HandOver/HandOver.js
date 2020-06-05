import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../../Firebase'

const HandOver = () => {
  const firebase = useContext(FirebaseContext)

  let history = useHistory()

  useEffect(() => {
    let privateRoute = firebase.auth.onAuthStateChanged((authUser) => {
      if (!authUser) {
        history.push('/logowanie')
      }
    })
    return () => {
      privateRoute()
    }
  }, [firebase.auth, history])

  return <h1>Oddaj rzeczy</h1>
}

export default HandOver
