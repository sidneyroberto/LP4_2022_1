import { Button, GoogleLogo, SignInText } from './styles'

type Props = {
  onClick: () => void
  serviceLogo: string
  serviceName: string
}

const LoginButton = ({ onClick, serviceLogo, serviceName }: Props) => {
  return (
    <Button onClick={() => onClick()}>
      <GoogleLogo src={serviceLogo} alt='Google' />
      <SignInText>Entrar com {serviceName}</SignInText>
    </Button>
  )
}

export default LoginButton
