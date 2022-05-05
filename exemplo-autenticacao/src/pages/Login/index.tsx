import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import LoginForm from '../../components/LoginForm'
import { UserContext } from '../../context/UserContext'

const Login = () => {
  const { token } = useContext(UserContext)

  if (token) {
    return <Navigate to="/home" />
  }

  return <LoginForm />
}

export default Login
