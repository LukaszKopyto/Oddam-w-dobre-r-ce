import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
}

class Firebase {
  constructor() {
    app.initializeApp(config)

    this.auth = app.auth()
    this.db = app.database()
  }

  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password)

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password)

  doSignOut = () => this.auth.signOut()

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email)

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password)

  // *** User API ***

  user = (uid) => this.db.ref(`users/${uid}`)

  users = () => this.db.ref('users')

  whoWeHelp = () => this.db.ref('whoWeHelp')

  summaryOfTheForm = () => this.db.ref('summaryOfTheForm')

  setUserFormData = (uid, values) =>
    this.db.ref(`users/${uid}/formData`).set({ ...values })

  setSummaryOfTheForm = (numberOfBag, numberOfOrganisations) => {
    numberOfBag = parseInt(numberOfBag)
    this.db.ref(`summaryOfTheForm`).once('value', (snapshot) => {
      const prevValue = snapshot.val()
      this.db.ref(`summaryOfTheForm`).set({
        numberOfBag: prevValue.numberOfBag + numberOfBag,
        numberOfOrganisations:
          prevValue.numberOfOrganisations + numberOfOrganisations,
        numberOfPeople: prevValue.numberOfPeople + 1,
      })
    })
  }
}

export default Firebase
