import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactLoading from 'react-loading'

import CryptoCoin from '../../models/CryptoCoin'
import CurrencyService from '../../services/CurrencyService'
import {
  BackButton,
  BackLink,
  BackLinkPanel,
  Container,
  CryptoPanel,
  LoadingArea,
  PanelRow,
  RowKey,
  RowValue,
} from './styles'
import { VsCurrencyContext } from '../../context/VsCurrencyContext'

type Params = {
  id: string
  name: string
}

const Crypto = () => {
  /**
   * Utilizaremos o hook useParams para
   * resgatar os parâmetros recebidos no
   * componente da página.
   */
  const { id, name } = useParams<Params>()
  const [cryptoCoin, setCryptoCoin] = useState<CryptoCoin>({
    id: '',
    name: '',
    usd24hChange: 0,
    usd24hVolume: 0,
    usdMarketCap: 0,
    usdPrice: 0,
  })
  const [areCoinDetailsLoaded, setAreCoinDetailsLoaded] = useState(false)

  const { vsCurrency } = useContext(VsCurrencyContext)

  const currencyService = new CurrencyService()

  const loadCryptoCoin = async () => {
    if (id && name) {
      setAreCoinDetailsLoaded(false)
      const crypto = await currencyService.getCoin(id, name, vsCurrency)
      setCryptoCoin(crypto)
      setAreCoinDetailsLoaded(true)
    }
  }

  useEffect(() => {
    loadCryptoCoin()
  }, [vsCurrency])

  const moneyFormatter = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: vsCurrency,
  })

  return (
    <Container>
      {areCoinDetailsLoaded && (
        <div>
          <CryptoPanel data-testid='panel'>
            <PanelRow>
              <RowKey>Coin:</RowKey>
              <RowValue data-testid='name'>{cryptoCoin.name}</RowValue>
            </PanelRow>
            <PanelRow>
              <RowKey>USD value:</RowKey>
              <RowValue data-testid='usd-value'>
                {moneyFormatter.format(cryptoCoin.usdPrice)}
              </RowValue>
            </PanelRow>
            <PanelRow>
              <RowKey>Market Cap (USD):</RowKey>
              <RowValue data-testid='market-cap'>
                {moneyFormatter.format(cryptoCoin.usdMarketCap)}
              </RowValue>
            </PanelRow>
            <PanelRow>
              <RowKey>24 Volume (USD):</RowKey>
              <RowValue data-testid='24h-volume'>
                {moneyFormatter.format(cryptoCoin.usd24hVolume)}
              </RowValue>
            </PanelRow>
            <PanelRow>
              <RowKey>24h Change (USD):</RowKey>
              <RowValue data-testid='24h-change'>
                {cryptoCoin.usd24hChange.toFixed(2)}%
              </RowValue>
            </PanelRow>
          </CryptoPanel>

          <BackLinkPanel>
            <BackLink to='/'>
              <BackButton>Back to currencies</BackButton>
            </BackLink>
          </BackLinkPanel>
        </div>
      )}

      {!areCoinDetailsLoaded && (
        <LoadingArea data-testid='loading-area'>
          <ReactLoading type='spin' color='#8c14fc' width={'100%'} />
        </LoadingArea>
      )}
    </Container>
  )
}

export default Crypto
