import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FirebaseContext } from '../../Firebase'
import Contact from '../../layout/Contact'
import Footer from '../../layout/Footer'
import { HeroHandOver } from '../../layout/Hero'

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

  return (
    <>
      <HeroHandOver />
      <Contact />
      <Footer />
    </>
  )
}

export default HandOver
