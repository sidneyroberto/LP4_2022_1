import { createContext, ReactNode, useEffect, useState } from 'react'

type UserType = {
  token: string
  setToken: (newState: string) => void
}

const initialValue: UserType = {
  token: localStorage.getItem('token') || '',
  setToken: () => {},
}

export const UserContext = createContext(initialValue)

type UserContextProps = {
  children: ReactNode
}

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [token, setToken] = useState(initialValue.token)

  useEffect(() => {
    console.log('Entrou')
    localStorage.setItem('token', token)
  }, [token])

  return (
    <UserContext.Provider value={{ token, setToken }}>
      {children}
    </UserContext.Provider>
  )
}
