import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import AppHeader from '.'

describe('<AppHeader />', () => {
  it('should render app title at header', () => {
    render(<AppHeader />)
    const appTitle = screen.getByText('Crypto Currencies')
    expect(appTitle).toBeInTheDocument()
  })
})
