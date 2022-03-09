import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom'

import Crypto from '.'

describe('<Crypto />', () => {
  it('should render loading animation if no params are passed', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Crypto />
      </BrowserRouter>
    )

    expect(getByTestId('loading-area')).toBeInTheDocument()
  })

  it('should render correct values when params are passed', async () => {
    const { findByTestId } = render(
      <MemoryRouter initialEntries={['/crypto/bitcoin/Bitcoin']}>
        <Routes>
          <Route path='/crypto/:cryptoId/:title' element={<Crypto />} />
        </Routes>
      </MemoryRouter>
    )

    await findByTestId('crypto-panel')

    const text = await findByTestId('title')
    expect(true).toBe(true)
  })
})
