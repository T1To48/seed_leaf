import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { GlobalStylesProvider } from "./providers"

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStylesProvider>
      <App />
    </GlobalStylesProvider>
  </StrictMode>,
)
