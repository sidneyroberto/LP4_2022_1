import { useContext } from 'react'
import { VsCurrencyContext } from '../../context/VsCurrencyContext'
import {
  Header,
  SelectVsCurrency,
  Title,
  VsCurrencyLabel,
  VsCurrencyOption,
} from './styles'

const AppHeader = () => {
  const { vsCurrency, setVsCurrency } = useContext(VsCurrencyContext)

  return (
    <Header>
      <Title>Crypto Currencies</Title>
      <VsCurrencyLabel>Vs. Currency:</VsCurrencyLabel>
      <SelectVsCurrency
        value={vsCurrency}
        onChange={(event) => setVsCurrency(event.target.value)}
      >
        <VsCurrencyOption value='usd'>US Dolar</VsCurrencyOption>
        <VsCurrencyOption value='brl'>BR Real</VsCurrencyOption>
        <VsCurrencyOption value='eur'>Euro</VsCurrencyOption>
        <VsCurrencyOption value='jpy'>Yen</VsCurrencyOption>
        <VsCurrencyOption value='cny'>Renminbi</VsCurrencyOption>
      </SelectVsCurrency>
    </Header>
  )
}

export default AppHeader
