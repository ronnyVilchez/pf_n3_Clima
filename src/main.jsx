import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FetchProvider } from './context/FetchCoontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FetchProvider>

      <App />
    </FetchProvider>
  </React.StrictMode>,
)
