import { Card, CryptoLogo, CryptoTitle, Price, ViewLink } from './styles'

type Props = {
  id: string
  logo: string
  title: string
  price: number
  priceChange: number
}

const priceIncreasedStyle = {
  color: '#26c281',
}

const priceDecreasedStyle = {
  color: '#ff4c30',
}

const CryptoCard = ({ id, logo, title, price, priceChange }: Props) => {
  return (
    <ViewLink to={`/crypto/${id}/${title}`}>
      <Card data-testid='cryptologo'>
        <CryptoLogo data-testid='logo' src={logo} alt={`${title} logo`} />
        <CryptoTitle data-testid='title'>{title}</CryptoTitle>
        <Price
          data-testid='price'
          style={priceChange >= 0 ? priceIncreasedStyle : priceDecreasedStyle}
        >
          U$ {price.toFixed(2)}
        </Price>
      </Card>
    </ViewLink>
  )
}

export default CryptoCard
