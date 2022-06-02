import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { AppTitle, HeaderBar, ProfileName, ProfilePic } from './styles'

const Header = () => {
  const { userName, profilePic } = useContext(UserContext)

  return (
    <HeaderBar>
      <AppTitle>Exemplo Auth FB</AppTitle>
      <ProfilePic src={profilePic} alt={`Foto de ${userName}`} />
      <ProfileName>{userName}</ProfileName>
    </HeaderBar>
  )
}

export default Header
