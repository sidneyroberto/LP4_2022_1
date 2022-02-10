import { Card, CryptoLogo, CryptoTitle, Price, ViewLink } from './styles'

type Props = {
  id: string
  logo: string
  title: string
  price: number
  priceChange: number
}

const priceIncreasedStyle = {
  color: '#26c281'
}

const priceDecreasedStyle = {
  color: '#ff4c30'
}

const CryptoCard = ({ id, logo, title, price, priceChange }: Props) => {

  return (
    <ViewLink to={`/crypto/${id}/${title}`}>
      <Card>
        <CryptoLogo src={logo} alt={`${title} logo`} />
        <CryptoTitle>{title}</CryptoTitle>
        <Price style={priceChange >= 0 ? priceIncreasedStyle : priceDecreasedStyle}>U$ {price}</Price>
      </Card>
    </ViewLink>
  )
}

export default CryptoCard