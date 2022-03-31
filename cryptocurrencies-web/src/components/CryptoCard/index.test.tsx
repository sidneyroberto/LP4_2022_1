import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import CryptoCard from '.'

describe('<CryptoCard />', () => {
  it('should render a CryptoCard with given data', () => {
    const id = 'bitcoin'
    const title = 'Bitcoin'
    const price = 40000.123
    const priceChange = -0.4567
    const imageUrl =
      'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'

    const { getByTestId } = render(
      <BrowserRouter>
        <CryptoCard
          id={id}
          logo={imageUrl}
          price={price}
          priceChange={priceChange}
          title={title}
        />
      </BrowserRouter>
    )

    expect(getByTestId('logo')).toHaveAttribute('src', imageUrl)
    expect(getByTestId('title')).toHaveTextContent(title)
    expect(getByTestId('price')).toHaveTextContent(price.toFixed(2))
  })

  it('should render price with red color when price change is negative', () => {
    const id = 'bitcoin'
    const title = 'Bitcoin'
    const price = 40000.123
    const priceChange = -0.4567
    const imageUrl =
      'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'

    const { getByTestId } = render(
      <BrowserRouter>
        <CryptoCard
          id={id}
          logo={imageUrl}
          price={price}
          priceChange={priceChange}
          title={title}
        />
      </BrowserRouter>
    )

    expect(getByTestId('price')).toHaveStyle('color: #ff4c30')
  })

  it('should render price with green color when price change is positive', () => {
    const id = 'bitcoin'
    const title = 'Bitcoin'
    const price = 40000.123
    const priceChange = 0.4567
    const imageUrl =
      'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'

    const { getByTestId } = render(
      <BrowserRouter>
        <CryptoCard
          id={id}
          logo={imageUrl}
          price={price}
          priceChange={priceChange}
          title={title}
        />
      </BrowserRouter>
    )

    expect(getByTestId('price')).toHaveStyle('color: #26c281')
  })

  it('should render price with green color when price change is zero', () => {
    const id = 'bitcoin'
    const title = 'Bitcoin'
    const price = 40000.123
    const priceChange = 0
    const imageUrl =
      'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'

    const { getByTestId } = render(
      <BrowserRouter>
        <CryptoCard
          id={id}
          logo={imageUrl}
          price={price}
          priceChange={priceChange}
          title={title}
        />
      </BrowserRouter>
    )

    expect(getByTestId('price')).toHaveStyle('color: #26c281')
  })
})
