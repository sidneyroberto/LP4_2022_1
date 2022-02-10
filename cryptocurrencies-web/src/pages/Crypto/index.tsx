import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CryptoCoin from '../../models/CryptoCoin'
import CurrencyService from '../../services/CurrencyService'
import {
  Container,
  CryptoPanel,
  PanelRow,
  RowKey,
  RowValue,
  BackLinkPannel,
  BackLink,
  BackButton
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
    usd24hChange: 0
  })
  const currencyService = new CurrencyService()

  const loadCryptoPrice = async () => {
    if (cryptoId && title) {
      const crypto = await currencyService.getCrypto(cryptoId, title)
      setCrypto(crypto)
    }
  }

  useEffect(() => {
    loadCryptoPrice()
  }, [])

  return (
    <Container>
      <CryptoPanel>
        <PanelRow>
          <RowKey>Coin:</RowKey>
          <RowValue>{crypto.title}</RowValue>
        </PanelRow>
        <PanelRow>
          <RowKey>USD value:</RowKey>
          <RowValue>{crypto.usd}</RowValue>
        </PanelRow>
        <PanelRow>
          <RowKey>Market Cap (USD):</RowKey>
          <RowValue>{crypto.usdMarketCap}</RowValue>
        </PanelRow>
        <PanelRow>
          <RowKey>24h Volume (USD):</RowKey>
          <RowValue>{crypto.usd24hVolume}</RowValue>
        </PanelRow>
        <PanelRow>
          <RowKey>24h Change (USD):</RowKey>
          <RowValue>{crypto.usd24hChange}</RowValue>
        </PanelRow>
      </CryptoPanel>

      <BackLinkPannel>
        <BackLink to='/'>
          <BackButton>Back to currencies</BackButton>
        </BackLink>
      </BackLinkPannel>
    </Container>
  )
}

export default Crypto