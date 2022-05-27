import { createContext, ReactNode, useEffect, useState } from 'react'

type UserType = {
  token: string
  userName: string
  profilePic: string
  setToken: (newState: string) => void
  setUserName: (newState: string) => void
  setProfilePic: (newState: string) => void
}

const initialValue: UserType = {
  token: localStorage.getItem('token') || '',
  setToken: () => {},
  userName: localStorage.getItem('userName') || '',
  setUserName: () => {},
  profilePic: localStorage.getItem('profilePic') || '',
  setProfilePic: () => {},
}

export const UserContext = createContext(initialValue)

type Props = {
  children: ReactNode
}

export const UserContextProvider = ({ children }: Props) => {
  const [token, setToken] = useState(initialValue.token)
  const [userName, setUserName] = useState(initialValue.userName)
  const [profilePic, setProfilePic] = useState(initialValue.profilePic)

  useEffect(() => {
    localStorage.setItem('token', token)
    localStorage.setItem('userName', userName)
    localStorage.setItem('profilePic', profilePic)
  }, [token, userName, profilePic])

  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
        userName,
        setUserName,
        profilePic,
        setProfilePic,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
