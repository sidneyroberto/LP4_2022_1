import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

import Crypto from '.'

describe('<Crypto />', () => {
  it('should render loading gif when page is loaded', () => {
    const { getByTestId } = render(<Crypto />)
    expect(getByTestId('loading-area')).toBeInTheDocument()
  })

  it('should render correct values when params are passed', async () => {
    const { findByTestId, getByTestId } = render(
      <MemoryRouter initialEntries={['/crypto/kucoin-shares/KuCoin Token']}>
        <Routes>
          <Route path='/crypto/:id/:name' element={<Crypto />} />
        </Routes>
      </MemoryRouter>
    )

    await findByTestId('panel')

    expect(getByTestId('name').textContent).toBe('KuCoin Token')
    expect(getByTestId('usd-value').textContent).toMatch(/^\d+\.\d{2}/)
    expect(getByTestId('market-cap').textContent).toMatch(/^\d+\.\d{2}/)
    expect(getByTestId('24h-volume').textContent).toMatch(/^\d+\.\d{2}/)
    expect(getByTestId('24h-change').textContent).toMatch(/^\d+\.\d{2}/)
  })
})
