import { Route, Routes } from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'
import { UserContextProvider } from './context/UserContext'
import Home from './pages/Home'
import Login from './pages/Login'

const App = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route index element={<Login />} />
        <Route path='login' element={<Login />} />
        <Route
          path='home'
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </UserContextProvider>
  )
}

export default App
