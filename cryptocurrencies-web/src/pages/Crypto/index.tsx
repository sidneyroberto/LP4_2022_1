import { useEffect, useState } from 'react'
import ReactLoading from 'react-loading'
import { useParams } from 'react-router-dom'

import CryptoCoin from '../../models/CryptoCoin'
import CurrencyService from '../../services/CurrencyService'
import {
  Container,
  CryptoPanel,
  PanelRow,
  RowKey,
  RowValue,
  BackLinkPanel,
  BackLink,
  BackButton,
  LoadingArea,
} from './styles'

type Params = {
  cryptoId: string
  title: string
}

const Crypto = () => {
  const { cryptoId, title } = useParams<Params>()
  const [crypto, setCrypto] = useState<CryptoCoin>({
    id: '',
    title: '',
    usd: 0,
    usdMarketCap: 0,
    usd24hVolume: 0,
    usd24hChange: 0,
  })
  const [isCryptoInfoLoaded, setIsCryptoInfoLoaded] = useState<boolean>(false)

  const currencyService = new CurrencyService()

  const loadCryptoPrice = async () => {
    if (cryptoId && title) {
      const crypto = await currencyService.getCrypto(cryptoId, title)
      setCrypto(crypto)
      setIsCryptoInfoLoaded(true)
    }
  }

  useEffect(() => {
    loadCryptoPrice()
  }, [])

  return (
    <Container>
      {isCryptoInfoLoaded && (
        <CryptoPanel data-testid='crypto-panel'>
          <PanelRow>
            <RowKey>Coin:</RowKey>
            <RowValue data-testid='title'>{crypto.title}</RowValue>
          </PanelRow>
          <PanelRow>
            <RowKey>USD value:</RowKey>
            <RowValue data-testid='usd'>{crypto.usd.toFixed(2)}</RowValue>
          </PanelRow>
          <PanelRow>
            <RowKey>Market Cap (USD):</RowKey>
            <RowValue data-testid='market-cap'>
              {crypto.usdMarketCap.toFixed(2)}
            </RowValue>
          </PanelRow>
          <PanelRow>
            <RowKey>24h Volume (USD):</RowKey>
            <RowValue data-testid='usd-24h-volume'>
              {crypto.usd24hVolume.toFixed(2)}
            </RowValue>
          </PanelRow>
          <PanelRow>
            <RowKey>24h Change (USD):</RowKey>
            <RowValue data-testid='usd-24h-change'>
              {crypto.usd24hChange.toFixed(2)}%
            </RowValue>
          </PanelRow>
        </CryptoPanel>
      )}

      {!isCryptoInfoLoaded && (
        <LoadingArea data-testid='loading-area'>
          <ReactLoading type='spin' color='#8c14fc' width={'100%'} />
        </LoadingArea>
      )}

      <BackLinkPanel>
        <BackLink to='/'>
          <BackButton>Back to currencies</BackButton>
        </BackLink>
      </BackLinkPanel>
    </Container>
  )
}

export default Crypto
