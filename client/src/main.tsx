import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { GlobalStylesProvider, ReduxStoreProvider } from "./providers"

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxStoreProvider>
      <GlobalStylesProvider>
        <App />
      </GlobalStylesProvider>
    </ReduxStoreProvider>
  </StrictMode>,
)
