import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  FilterProvider } from './context/FilterContext.jsx'
import { DegreesProvider } from './context/DegreesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
//  <React.StrictMode>
   
      <FilterProvider>
        <DegreesProvider>
        <App />
        </DegreesProvider>
      </FilterProvider>
    
//  </React.StrictMode>,
)
