import { useState } from 'react'
import { getAuth } from 'firebase/auth'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'

import firebaseApp from '../../config/firebase'
import {
  Container,
  ErrorMessage,
  Form,
  Input,
  InfoMessage,
  CreateUserButton,
  LoginLink,
  Title,
} from './styles'

const CreateUser = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const auth = getAuth(firebaseApp)
  const [createUserWithEmailAndPassword, userCredentials, loading, error] =
    useCreateUserWithEmailAndPassword(auth)

  const createUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    createUserWithEmailAndPassword(email, password)
  }

  return (
    <Container>
      <Title>Novo usuário</Title>
      <Form onSubmit={(event) => createUser(event)}>
        <Input
          type='email'
          name='email'
          id='email'
          placeholder='E-mail'
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type='password'
          name='password'
          id='password'
          placeholder='Senha'
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <CreateUserButton>Criar</CreateUserButton>
      </Form>

      {loading && <InfoMessage>Criando usuário...</InfoMessage>}

      {error && (
        <ErrorMessage>Ocorreu um erro ao tentar criar o usuário</ErrorMessage>
      )}

      {userCredentials && (
        <InfoMessage>
          Usuário criado. Clique <LoginLink to='/login'>aqui</LoginLink> para
          realizar o login.
        </InfoMessage>
      )}
    </Container>
  )
}

export default CreateUser
