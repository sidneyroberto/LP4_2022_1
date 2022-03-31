import { createContext, ReactNode, useEffect, useState } from 'react'

type VsCurrencyType = {
  vsCurrency: string
  setVsCurrency: (newState: string) => void
}

const initialValue: VsCurrencyType = {
  vsCurrency: localStorage.getItem('vsCurrency') || 'usd',
  setVsCurrency: () => {},
}

type VsCurrencyContextProps = {
  children: ReactNode
}

export const VsCurrencyContext = createContext<VsCurrencyType>(initialValue)

export const VsCurrencyContextProvider = ({
  children,
}: VsCurrencyContextProps) => {
  const [vsCurrency, setVsCurrency] = useState(initialValue.vsCurrency)

  useEffect(() => {
    console.log('Entrou')
    localStorage.setItem('vsCurrency', vsCurrency)
  }, [vsCurrency])

  return (
    <VsCurrencyContext.Provider value={{ vsCurrency, setVsCurrency }}>
      {children}
    </VsCurrencyContext.Provider>
  )
}
