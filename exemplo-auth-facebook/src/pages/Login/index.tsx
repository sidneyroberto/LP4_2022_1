import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
} from 'firebase/auth'
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth'

import { UserContext } from '../../context/UserContext'
import firebaseApp from '../../config/firebase'
import { Container, ErrorMessage, InfoMessage } from './styles'
import LoginButton from '../../components/LoginButton'
import google from '../../assets/img/google.png'
import facebook from '../../assets/img/facebook.png'

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
  const [signInWithGoogle, googleUserCredentials, googleLoading, googleError] =
    useSignInWithGoogle(auth)

  const [
    signInWithFacebook,
    facebookUserCredentials,
    facebookLoading,
    facebookError,
  ] = useSignInWithFacebook(auth)

  if (facebookUserCredentials) {
    const credential = FacebookAuthProvider.credentialFromResult(
      facebookUserCredentials
    )

    const token = credential?.accessToken
    const { user } = facebookUserCredentials
    const userName = user?.displayName
    const profilePic = `${user.photoURL}?access_token=${token}`

    if (token) {
      setToken(token)
      setUserName(userName || '')
      setProfilePic(profilePic)
      navigate('/home')
    } else {
      setNoTokenProvided(true)
    }
  }

  if (facebookError) {
    console.log(facebookError)
  }

  return (
    <Container>
      <LoginButton
        onClick={signInWithFacebook}
        serviceLogo={facebook}
        serviceName='Facebook'
      />

      {facebookLoading && <InfoMessage>Autenticando...</InfoMessage>}

      {facebookError && <ErrorMessage>Autenticação falhou</ErrorMessage>}

      {noTokenProvided && (
        <ErrorMessage>
          Houve um erro ao tentar realizar a autenticação
        </ErrorMessage>
      )}
    </Container>
  )
}

export default Login
