import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

type Props = {
  token: string
  children: JSX.Element
}

const ProtectedRoute = ({ token, children }: Props): JSX.Element => {
  if (!token) {
    return <Navigate to='/login' replace />
  }

  return children
}

export default ProtectedRoute
