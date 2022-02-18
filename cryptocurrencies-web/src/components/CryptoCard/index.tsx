import {Card,CryptoLogo,CryptoTitle,Price, ViewLink} from './styles'

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

const CryptoCard = ({id, logo, title, price, priceChange}: Props) => {

    const priceStyle = 
        priceChange >= 0 
        ? priceIncreasedStyle
        : priceDecreasedStyle

    return (
        <ViewLink to={`/crypto/${id}/${title}`}>
            <Card key={id}>
                <CryptoLogo src={logo} alt={`${title} logo`} />
                <CryptoTitle>{title}</CryptoTitle>
                <Price style={priceStyle}>U$ {price.toFixed(2)}</Price>
            </Card>
        </ViewLink>
    )
}

export default CryptoCard