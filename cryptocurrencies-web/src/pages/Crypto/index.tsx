import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CryptoCoin from "../../models/CryptoCoin"
import CurrencyService from "../../services/CurrencyService"
import { BackButton, BackLink, BackLinkPanel, Container, CryptoPanel, PanelRow, RowKey, RowValue } from "./styles"

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
    const {id, name} = useParams<Params>()
    const [cryptoCoin, setCryptoCoin] = useState<CryptoCoin>({
        id: '',
        name: '',
        usd24hChange: 0,
        usd24hVolume: 0,
        usdMarketCap: 0,
        usdPrice: 0,
    })
    const currencyService = new CurrencyService()

    const loadCryptoCoin = async () => {
        if(id && name) {
            const crypto = await currencyService.getCoin(id, name)
            setCryptoCoin(crypto)
        }
    }

    useEffect(() => {
        loadCryptoCoin()
    }, [])

    return (
       <Container>
           <CryptoPanel>
               <PanelRow>
                   <RowKey>Coin:</RowKey>
                   <RowValue>{cryptoCoin.name}</RowValue>
               </PanelRow>
               <PanelRow>
                   <RowKey>USD value:</RowKey>
                   <RowValue>{cryptoCoin.usdPrice.toFixed(2)}</RowValue>
               </PanelRow>
               <PanelRow>
                   <RowKey>Market Cap (USD):</RowKey>
                   <RowValue>{cryptoCoin.usdMarketCap.toFixed(2)}</RowValue>
               </PanelRow>
               <PanelRow>
                   <RowKey>24 Volume (USD):</RowKey>
                   <RowValue>{cryptoCoin.usd24hVolume.toFixed(2)}</RowValue>
               </PanelRow>
               <PanelRow>
                   <RowKey>24h Change (USD):</RowKey>
                   <RowValue>{cryptoCoin.usd24hChange.toFixed(2)}%</RowValue>
               </PanelRow>
           </CryptoPanel>

           <BackLinkPanel>
               <BackLink to='/'>
                    <BackButton>Back to currencies</BackButton>
               </BackLink>
           </BackLinkPanel>
       </Container>
    )
}

export default Crypto