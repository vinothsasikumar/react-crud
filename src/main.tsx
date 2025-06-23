import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { crudStore } from './app/store.ts'

const client = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={crudStore}>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
)
