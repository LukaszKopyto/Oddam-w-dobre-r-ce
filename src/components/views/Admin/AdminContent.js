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
      <section className='admin__container'>
        <h1>Admin</h1>
        <p>Tylko użytkownicy z rolą administratora są upoważnieni.</p>
        {loading && <p>Loading...</p>}
        <h2>Lista użytkowników: </h2>
        <div className='admin__table-header'>
          <div>
            <strong>Imię</strong>
          </div>
          <div>
            <strong>e-mail</strong>
          </div>
          <div>
            <strong>Zbiórka</strong>
          </div>
          <div>
            <strong>Uprawnienia admina:</strong>
          </div>
        </div>
        {users.map((user) => (
          <div className='admin__table-row' key={user.uid}>
            <div>
              <strong>{user.username}</strong>
            </div>
            <div>
              <strong>{user.email}</strong>
            </div>
            <div> {user.formData ? 'TAK' : 'NIE'}</div>
            <div>
              {user.roles && user.roles.ADMIN === 'ADMIN' ? 'TAK' : 'NIE'}
            </div>
          </div>
        ))}
        <h2>Lista darowizn: </h2>
        {users.map(
          (user) =>
            user.formData && (
              <div key={user.uid}>
                <h3>Darowizna od {user.username}</h3>
                <h3>{user.email}</h3>
                <div className='admin__table-row'>
                  <div>
                    Lokalizacja: <strong>{user.formData.localization}</strong>
                  </div>
                  <div>
                    Do oddania:
                    <p>
                      <strong>
                        {user.formData.handOver}, {user.formData.numbersOfBag}{' '}
                        worków
                      </strong>
                    </p>
                  </div>
                  <div>
                    <strong>{user.formData.whoYouWantToHelp.join(', ')}</strong>
                  </div>
                </div>
                <div className='admin__table-row'>
                  <div>Adres odbioru: </div>
                  <div>
                    <p>
                      {user.formData.address.postalCod}{' '}
                      {user.formData.address.city}
                    </p>
                    ul. {user.formData.address.street}
                  </div>
                  <div>Tel: {user.formData.address.phone}</div>
                </div>
                <div className='admin__table-row'>
                  <div>Data odbioru: {user.formData.address.date}</div>
                  <div>Uwagi: {user.formData.address.comments}</div>
                  <div>Godzina: {user.formData.address.time}</div>
                </div>
              </div>
            )
        )}
      </section>
    </>
  )
}

export default AdminContent
