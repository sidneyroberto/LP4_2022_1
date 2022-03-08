import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import AppHeader from '.'

describe('<AppHeader />', () => {
  it('should render app title at header', () => {
    render(<AppHeader />)
    const appName = screen.getByText(/Crypto Currencies/)
    expect(appName).toBeInTheDocument()
  })
})
