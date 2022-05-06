import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import FontStyles from './assets/fonts/fonts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <FontStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
