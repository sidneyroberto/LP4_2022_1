import { signOut, getAuth } from 'firebase/auth'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import firebaseApp from '../../config/firebase'
import { UserContext } from '../../context/UserContext'

const Home = () => {
  const { setToken } = useContext(UserContext)
  const auth = getAuth(firebaseApp)
  const navigate = useNavigate()

  const doLogout = () => {
    signOut(auth)
    setToken('')
    navigate('/login')
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => doLogout()}>Sair</button>
    </div>
  )
}

export default Home
