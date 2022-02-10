import { useEffect, useState } from 'react'
import ReactLoading from 'react-loading'

import CryptoCard from '../../components/CryptoCard'
import Price from '../../models/Price'
import CurrencyService from '../../services/CurrencyService'
import { Container, Filter, LoadingArea } from './styles'

const Home = () => {
  const [prices, setPrices] = useState<Price[]>([])
  const [pricesToBeDisplayed, setPricesToBeDisplayed] = useState<Price[]>([])
  const [listLoaded, setListLoaded] = useState<boolean>(false)
  const currencyService = new CurrencyService()

  const loadPrices = async () => {
    let currentPrices = await currencyService.getPrices()
    currentPrices = [...prices, ...currentPrices]
    setPrices(currentPrices)
    setPricesToBeDisplayed(currentPrices)
    setListLoaded(true)
  }

  useEffect(() => {
    loadPrices()
  }, [])

  const renderPrice = (item: Price) => (
    <CryptoCard key={item.id}
      id={item.id}
      title={item.name}
      logo={item.image}
      price={item.currentPrice}
      priceChange={item.priceChange} />
  )

  const filterPrices = (filter: string) => {
    if (filter) {
      const filteredPrices: Price[] = prices.filter(
        p => p.name
          .toLocaleLowerCase()
          .includes(filter.toLocaleLowerCase())
      )

      setPricesToBeDisplayed(filteredPrices)
    } else {
      setPricesToBeDisplayed(prices)
    }
  }

  return (
    <Container>
      {
        listLoaded &&
        <div>
          <Filter placeholder="Type desired cryptocurrency" onChange={e => filterPrices(e.target.value)} />
          {pricesToBeDisplayed.map(p => renderPrice(p))}
        </div>
      }

      {
        !listLoaded &&
        <LoadingArea>
          <ReactLoading type='spin' color='#8c14fc' width={'100%'} />
        </LoadingArea>
      }
    </Container>
  )
}

export default Home