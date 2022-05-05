import { createContext, ReactNode, useEffect, useState } from 'react'

type UserType = {
  token: string
  userName: string
  setToken: (newState: string) => void
  setUserName: (newState: string) => void
}

const initialValue: UserType = {
  token: localStorage.getItem('token') || '',
  userName: localStorage.getItem('userName') || '',
  setToken: () => {},
  setUserName: () => {},
}

export const UserContext = createContext(initialValue)

type UserContextProps = {
  children: ReactNode
}

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [token, setToken] = useState(initialValue.token)
  const [userName, setUserName] = useState(initialValue.userName)

  useEffect(() => {
    localStorage.setItem('token', token)
    localStorage.setItem('userName', userName)
  }, [token, userName])

  return (
    <UserContext.Provider value={{ token, setToken, userName, setUserName }}>
      {children}
    </UserContext.Provider>
  )
}
