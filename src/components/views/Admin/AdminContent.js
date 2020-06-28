import React, { useState, useEffect, useContext } from 'react'
import { FirebaseContext } from '../../Firebase'
import HomeHeader from '../../layout/HomeHeader'

const AdminContent = () => {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  const firebase = useContext(FirebaseContext)

  useEffect(() => {
    setLoading(true)

    firebase.users().on('value', (snapshot) => {
      const userObject = snapshot.val()
      const userList = Object.keys(userObject).map((key) => ({
        ...userObject[key],
        uid: key,
      }))
      setUsers(userList)
      setLoading(false)
    })
    return () => {
      firebase.users().off()
    }
  }, [firebase])

  return (
    <>
      <HomeHeader />
      <section>
        <h1>Admin</h1>
        <p>Tylko użytkownicy z rolą administratora są upoważnieni.</p>
        {loading && <p>Loading...</p>}
        <h2>Lista użytkowników: </h2>
        {users.map((user) => (
          <ul key={user.uid}>
            <li>
              <strong>name: {user.username}</strong>
              <span>, mail: {user.email}</span>
              <span>, odbiór: {user.formData ? 'TAK' : 'NIE'}</span>
            </li>
          </ul>
        ))}
        <h2>Lista darowizn: </h2>
        {users.map(
          (user) =>
            user.formData && (
              <div key={user.uid}>
                <h3>{user.username}</h3>
                <h3>{user.email}</h3>
                <ul>
                  <li>
                    Do oddania:
                    {user.formData.handOver}, {user.formData.numbersOfBag}{' '}
                    worków
                  </li>
                  <li>Lokalizacja: {user.formData.localization}</li>
                  <li>Dla: {user.formData.whoYouWantToHelp.join(', ')}</li>
                  <li>
                    <ul>
                      <p>Adres odbioru:</p>
                      <li>
                        Miasto:
                        {user.formData.address.postalCod}{' '}
                        {user.formData.address.city}
                      </li>
                      <li>Ulica: {user.formData.address.street}</li>
                      <li>Tel: {user.formData.address.phone}</li>
                      <li>Data: {user.formData.address.date}</li>
                      <li>Godzina: {user.formData.address.time}</li>
                      <li>Uwagi: {user.formData.address.comments}</li>
                    </ul>
                  </li>
                </ul>
              </div>
            )
        )}
      </section>
    </>
  )
}

export default AdminContent
