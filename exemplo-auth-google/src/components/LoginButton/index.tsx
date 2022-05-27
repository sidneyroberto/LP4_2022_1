import google from '../../assets/img/google.png'
import { Button, GoogleLogo, SignInText } from './styles'

type Props = {
  onClick: () => void
}

const LoginButton = ({ onClick }: Props) => {
  return (
    <Button onClick={() => onClick()}>
      <GoogleLogo src={google} alt='Google' />
      <SignInText>Entrar com Google</SignInText>
    </Button>
  )
}

export default LoginButton
