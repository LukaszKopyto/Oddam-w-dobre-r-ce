import React, { useState, useEffect, useContext } from 'react'
import { FirebaseContext } from '../../Firebase'

const Admin = () => {
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
    <div>
      <h1>Admin</h1>
      {loading && <p>Loading...</p>}
      {users.map((user) => (
        <ul key={user.uid}>
          <li>name: {user.username}</li>
          <li>mail: {user.email}</li>
        </ul>
      ))}
    </div>
  )
}

export default Admin
