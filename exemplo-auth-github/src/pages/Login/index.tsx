import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, GithubAuthProvider } from 'firebase/auth'
import { useSignInWithGithub } from 'react-firebase-hooks/auth'

import { UserContext } from '../../context/UserContext'
import firebaseApp from '../../config/firebase'
import { Container, ErrorMessage, InfoMessage } from './styles'
import LoginButton from '../../components/LoginButton'
import github from '../../assets/img/github.png'

const Login = () => {
  const navigate = useNavigate()

  const { token, setToken, setUserName, setProfilePic } =
    useContext(UserContext)

  useEffect(() => {
    if (token) {
      navigate('/home')
    }
  })

  const [noTokenProvided, setNoTokenProvided] = useState(false)

  const auth = getAuth(firebaseApp)
  auth.languageCode = 'pt-br'

  const [signInWithGithub, userCredentials, loading, error] =
    useSignInWithGithub(auth)

  if (userCredentials) {
    const credential = GithubAuthProvider.credentialFromResult(userCredentials)

    const token = credential?.accessToken
    const { user } = userCredentials
    const userName = user?.displayName
    const profilePic = user.photoURL

    if (token) {
      setToken(token)
      setUserName(userName || '')
      setProfilePic(profilePic || '')
      navigate('/home')
    } else {
      setNoTokenProvided(true)
    }
  }

  if (error) {
    console.log(error)
  }

  return (
    <Container>
      <LoginButton
        onClick={signInWithGithub}
        serviceLogo={github}
        serviceName='Github'
      />

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
