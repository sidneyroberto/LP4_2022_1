import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'

import { UserContext } from '../../context/UserContext'
import firebaseApp from '../../config/firebase'
import { Container, ErrorMessage, InfoMessage } from './styles'
import LoginButton from '../../components/LoginButton'

const Login = () => {
  const navigate = useNavigate()

  const { token, setToken, setUserName } = useContext(UserContext)

  useEffect(() => {
    if (token) {
      navigate('/home')
    }
  })

  const [noTokenProvided, setNoTokenProvided] = useState(false)

  const auth = getAuth(firebaseApp)
  auth.languageCode = 'pt-br'
  const [signInWithGoogle, userCredentials, loading, error] =
    useSignInWithGoogle(auth)

  if (userCredentials) {
    const credential = GoogleAuthProvider.credentialFromResult(userCredentials)
    const token = credential?.accessToken
    const { user } = userCredentials
    const userName = user.displayName

    if (token) {
      setToken(token)
      setUserName(userName || '')
      navigate('/home')
    } else {
      setNoTokenProvided(true)
    }
  }

  return (
    <Container>
      <LoginButton onClick={signInWithGoogle} />

      {loading && <InfoMessage>Autenticando...</InfoMessage>}

      {error && <ErrorMessage>Autenticação falhou</ErrorMessage>}

      {noTokenProvided && (
        <ErrorMessage>
          Houve um erro ao tentar realizar a autenticação
        </ErrorMessage>
      )}
    </Container>
  )
}

export default Login
