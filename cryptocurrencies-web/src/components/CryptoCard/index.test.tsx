import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CryptoCard from '.'
import { BrowserRouter } from 'react-router-dom'

describe('<CryptoCard />', () => {
  it('should render a CryptoCard with given data', () => {
    const id = '1'
    const title = 'Bitcoin'
    const price = 42424
    const imageUrl =
      'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'
    const priceChange = -0.14438805871820323

    const { getByTestId } = render(
      <BrowserRouter>
        <CryptoCard
          id={id}
          logo={imageUrl}
          title={title}
          price={price}
          priceChange={priceChange}
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
    const price = 42424
    const imageUrl =
      'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'
    const priceChange = -0.14438805871820323

    const { getByTestId } = render(
      <BrowserRouter>
        <CryptoCard
          id={id}
          logo={imageUrl}
          title={title}
          price={price}
          priceChange={priceChange}
        />
      </BrowserRouter>
    )

    expect(getByTestId('price').style.color).toBe('rgb(255, 76, 48)')
  })

  it('should render price with green color when price change is positive', () => {
    const id = '1'
    const title = 'Bitcoin'
    const price = 42424
    const imageUrl =
      'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'
    const priceChange = 0.14438805871820323

    const { getByTestId } = render(
      <BrowserRouter>
        <CryptoCard
          id={id}
          logo={imageUrl}
          title={title}
          price={price}
          priceChange={priceChange}
        />
      </BrowserRouter>
    )

    expect(getByTestId('price').style.color).toBe('rgb(38, 194, 129)')
  })

  it('should render price with green color when price change is zero', () => {
    const id = '1'
    const title = 'Bitcoin'
    const price = 42424
    const imageUrl =
      'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'
    const priceChange = 0

    const { getByTestId } = render(
      <BrowserRouter>
        <CryptoCard
          id={id}
          logo={imageUrl}
          title={title}
          price={price}
          priceChange={priceChange}
        />
      </BrowserRouter>
    )

    expect(getByTestId('price').style.color).toBe('rgb(38, 194, 129)')
  })
})
