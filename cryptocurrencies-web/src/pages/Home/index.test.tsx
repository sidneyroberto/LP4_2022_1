import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import Home from '.'

describe('<Home />', () => {
  it('should render loading gif when page is loaded', () => {
    const { getByTestId } = render(<Home />)

    expect(getByTestId('loading-area')).toBeInTheDocument()
  })

  it('should render correct CryptoCards when filter is applied', async () => {
    const { findByTestId, getByTestId, findAllByTestId } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )

    await findByTestId('filter-input')

    const filterText = 'ether'
    fireEvent.change(getByTestId('filter-input'), {
      target: { value: filterText },
    })

    const cryptoLogos = await findAllByTestId('cryptologo')

    cryptoLogos.forEach((element) => {
      const titleSpan = element.querySelector('span:first-of-type')
      expect(titleSpan?.textContent?.toLowerCase().includes(filterText)).toBe(
        true
      )
    })
  })

  it('should render all CryptoCards when filter is blank', async () => {
    const { findAllByTestId, findByTestId, getByTestId } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )

    await findByTestId('filter-input')

    const previousNumberOfCards = (await findAllByTestId('cryptologo')).length

    let filterText = 'bitcoin'
    fireEvent.change(getByTestId('filter-input'), {
      target: { value: filterText },
    })

    filterText = ''
    fireEvent.change(getByTestId('filter-input'), {
      target: { value: filterText },
    })

    const currentNumberOfCards = (await findAllByTestId('cryptologo')).length
    expect(previousNumberOfCards == currentNumberOfCards).toBe(true)
  })

  it('should render zero CryptoCards when filter does not match any cryptocurrency', async () => {
    const { getByTestId, findByTestId, queryByTestId } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )

    await findByTestId('filter-input')

    const filterText = 'banana123'
    fireEvent.change(getByTestId('filter-input'), {
      target: { value: filterText },
    })

    expect(queryByTestId('cryptologo')).toBeNull()
  })
})
