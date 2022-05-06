import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyD7a8b5CVUJtT29-oF4KYFsguz4DfPythc',
  authDomain: 'exemplo-autenticacao-react.firebaseapp.com',
  projectId: 'exemplo-autenticacao-react',
  storageBucket: 'exemplo-autenticacao-react.appspot.com',
  messagingSenderId: '414684093833',
  appId: '1:414684093833:web:776ff52338427584c9d558',
}

const firebaseApp = initializeApp(firebaseConfig)

export default firebaseApp
