import { useContext } from 'react'
import { VsCurrencyContext } from '../../context/VsCurrencyContext'
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
  const priceStyle =
    priceChange >= 0 ? priceIncreasedStyle : priceDecreasedStyle

  const { vsCurrency } = useContext(VsCurrencyContext)

  const moneyFormatter = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: vsCurrency,
  })

  return (
    <ViewLink to={`/crypto/${id}/${title}`}>
      <Card key={id} data-testid='cryptocard'>
        <CryptoLogo src={logo} alt={`${title} logo`} data-testid='logo' />
        <CryptoTitle data-testid='title'>{title}</CryptoTitle>
        <Price style={priceStyle} data-testid='price'>
          {moneyFormatter.format(price)}
        </Price>
      </Card>
    </ViewLink>
  )
}

export default CryptoCard
