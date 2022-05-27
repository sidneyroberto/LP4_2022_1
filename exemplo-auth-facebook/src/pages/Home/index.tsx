import { useContext } from 'react'
import { getAuth } from 'firebase/auth'

import { UserContext } from '../../context/UserContext'
import { Container, SignOutButton, WelcomeMessage } from './styles'
import firebaseApp from '../../config/firebase'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'

const Home = () => {
  const { userName, setToken, setUserName } = useContext(UserContext)

  const navigate = useNavigate()

  const doLogout = () => {
    const auth = getAuth(firebaseApp)
    auth
      .signOut()
      .then(() => {
        setToken('')
        setUserName('')
        navigate('/login')
      })
      .catch((error) => console.log(error))
  }

  return (
    <div>
      <Header />
      <Container>
        <WelcomeMessage>Olá, {userName}!</WelcomeMessage>
        <SignOutButton onClick={() => doLogout()}>Sair</SignOutButton>
      </Container>
    </div>
  )
}

export default Home
