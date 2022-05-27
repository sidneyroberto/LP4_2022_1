import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

type Props = {
  children: JSX.Element
}

const ProtectedRoute = ({ children }: Props) => {
  const { token } = useContext(UserContext)

  if (!token) {
    return <Navigate to='/login' replace />
  }

  return children
}

export default ProtectedRoute
