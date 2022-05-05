import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import { UserContext } from './context/UserContext'
import Home from './pages/Home'
import Login from './pages/Login'

const App = () => {
  const { token } = useContext(UserContext)

  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path='login' element={<Login />} />
      <Route
        path='home'
        element={
          <ProtectedRoute token={token}>
            <Home />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default App
