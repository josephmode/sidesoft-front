import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Components/AppComponent/App.jsx'
import { CoinMarket } from './Components/CoinMarketComponent/CoinMarket.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <CoinMarket />
  </StrictMode>
)
