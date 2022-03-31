import axios, { AxiosInstance } from 'axios'
import CryptoCoin from '../models/CryptoCoin'
import Price from '../models/Price'

const PER_PAGE: number = 250

export default class CurrencyService {
  private _http: AxiosInstance

  constructor() {
    this._http = axios.create({
      baseURL: 'https://api.coingecko.com/api/v3',
    })
  }

  async getPrices(vsCurrency: string): Promise<Price[]> {
    const response = await this._http.get('/coins/markets', {
      params: {
        vs_currency: vsCurrency,
        per_page: PER_PAGE,
        price_change_percentage: '1h',
      },
    })

    let pricesList: Price[] = []

    if (response.status == 200) {
      const { data } = response

      pricesList = data.map((p: any) => {
        const {
          id,
          name,
          image,
          current_price,
          price_change_percentage_1h_in_currency,
        } = p

        const price: Price = {
          id,
          name,
          image,
          currentPrice: current_price,
          priceChange: price_change_percentage_1h_in_currency,
        }

        return price
      })
    }

    return pricesList
  }

  async getCoin(
    id: string,
    name: string,
    vsCurrency: string
  ): Promise<CryptoCoin> {
    const response = await this._http.get('/simple/price', {
      params: {
        ids: id,
        vs_currencies: vsCurrency,
        include_market_cap: true,
        include_24hr_vol: true,
        include_24hr_change: true,
      },
    })

    let cryptoCoin: CryptoCoin = {
      id: id,
      name: name,
      usd24hChange: 0,
      usd24hVolume: 0,
      usdMarketCap: 0,
      usdPrice: 0,
    }

    if (response.status == 200) {
      const data = response.data[id]
      cryptoCoin = {
        id: id,
        name: name,
        usd24hChange: data[`${vsCurrency}_24h_change`],
        usd24hVolume: data[`${vsCurrency}_24h_vol`],
        usdMarketCap: data[`${vsCurrency}_market_cap`],
        usdPrice: data[`${vsCurrency}`],
      }
    }

    return cryptoCoin
  }
}
