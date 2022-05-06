import { signOut, getAuth } from 'firebase/auth'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import firebaseApp from '../../config/firebase'
import { UserContext } from '../../context/UserContext'
import { Container, SignOutButton, WelcomeMessage } from './styles'

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
    <Container>
      <WelcomeMessage>Olá! Seja bem vindo!</WelcomeMessage>
      <SignOutButton onClick={() => doLogout()}>Sair</SignOutButton>
    </Container>
  )
}

export default Home
