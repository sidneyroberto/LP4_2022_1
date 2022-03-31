import { useRoutes } from 'react-router-dom'
import AppHeader from './components/AppHeader'
import { VsCurrencyContextProvider } from './context/VsCurrencyContext'
import routes from './routes'

const App = () => {
  const elements = useRoutes(routes)

  return (
    <VsCurrencyContextProvider>
      <AppHeader />
      {elements}
    </VsCurrencyContextProvider>
  )
}

export default App
