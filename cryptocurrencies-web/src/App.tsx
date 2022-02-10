import { useRoutes } from "react-router-dom"
import AppHeader from "./components/AppHeader"
import routes from "./routes"

const App = () => {

  const elements = useRoutes(routes)

  return (
    <div>
      <AppHeader />
      {elements}
    </div>
  )
}

export default App