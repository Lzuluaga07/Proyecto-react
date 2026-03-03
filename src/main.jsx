import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom' // <-- PASO 1: IMPORTAR
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter> {/* <-- PASO 2: ENVOLVER APP */}
      <App />
    </HashRouter>
  </StrictMode>,
)

