import { useContext, useState } from 'react'
import { getAuth } from 'firebase/auth'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'

import firebaseApp from '../../config/firebase'
import { UserContext } from '../../context/UserContext'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const auth = getAuth(firebaseApp)
  const [signInWithEmailAndPassword, userCredentials, loading, error] =
    useSignInWithEmailAndPassword(auth)

  const { setToken } = useContext(UserContext)

  const navigate = useNavigate()

  const doLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    signInWithEmailAndPassword(email, password)
  }

  if (userCredentials) {
    const { user } = userCredentials
    user
      .getIdToken()
      .then((token) => {
        setToken(token)
        navigate('/home')
      })
      .catch((error) => console.log(error))
  }

  return (
    <div>
      <form id="login-form" onSubmit={(event) => doLogin(event)}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Entrar</button>
      </form>

      {loading && <p>Autenticando</p>}

      {error && <p>Credenciais inválidas: {error.message}</p>}
    </div>
  )
}

export default LoginForm
