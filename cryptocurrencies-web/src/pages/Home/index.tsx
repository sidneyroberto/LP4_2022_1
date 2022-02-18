import { useEffect, useState } from 'react'
import CryptoCard from '../../components/CryptoCard'
import Price from '../../models/Price'
import CurrencyService from '../../services/CurrencyService'
import { Container } from './styles'

const Home = () => {
    /**
     * Utilizaremos um hook chamado useState
     * para armazenar valores dentro do estado
     * do componente
     */
    const [prices, setPrices] = useState<Price[]>([])

    const currencyService = new CurrencyService()

    const loadPrices = async () => {
        let currentPrices = await currencyService.getPrices()
        setPrices(currentPrices)
    }

    /**
     * Utilizaremos um hook chamado useEffect para
     * invocar o service de preços para nos trazer os
     * preços atuais assim que o componente Home for
     * renderizado. Isto deverá ocorrer apenas uma vez
     * após a renderização do componente.
     */
    useEffect(() => {
        loadPrices()
    }, [])

    const renderCryptoCard = (price: Price) => (
        <CryptoCard key={price.id}
            id={price.id}
            title={price.name}
            logo={price.image}
            price={price.currentPrice}
            priceChange={price.priceChange}/>
    )

    return (
        <Container>
            {prices.map(p => renderCryptoCard(p))}
        </Container>
    )
}

export default Home