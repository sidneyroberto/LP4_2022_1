import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import LoginForm from '../../components/LoginForm'
import { UserContext } from '../../context/UserContext'
import { Container, CreateUserLink, InfoMessage } from './styles'

const Login = () => {
  const { token } = useContext(UserContext)

  if (token) {
    return <Navigate to='/home' />
  }

  return (
    <Container>
      <LoginForm />
      <InfoMessage>
        Clique <CreateUserLink to='/createuser'>aqui</CreateUserLink> para criar
        um novo usuário
      </InfoMessage>
    </Container>
  )
}

export default Login
