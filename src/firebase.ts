// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBLIn1tBRtPYn92Wt6Y7MrRIfzW4T--DR8',
  authDomain: 'vuefireinform.firebaseapp.com',
  projectId: 'vuefireinform',
  storageBucket: 'vuefireinform.appspot.com',
  messagingSenderId: '394027282702',
  appId: '1:394027282702:web:2819c647850871d949a75f'
}

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { db, auth }
