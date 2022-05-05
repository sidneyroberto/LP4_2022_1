import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyDhMzrq4lx3_shxYThQqL_Q_jaS8flQg3k',
  authDomain: 'exemplo-autenticacao-b678a.firebaseapp.com',
  projectId: 'exemplo-autenticacao-b678a',
  storageBucket: 'exemplo-autenticacao-b678a.appspot.com',
  messagingSenderId: '919085554699',
  appId: '1:919085554699:web:7e0120c26caa6d4e9efb0e',
}

const firebaseApp = initializeApp(firebaseConfig)

export default firebaseApp
