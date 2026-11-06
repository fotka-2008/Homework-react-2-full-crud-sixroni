import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ItemsProvider } from './context.tsx'

createRoot(document.getElementById('root')!).render(
  <ItemsProvider>
    <App />
  </ItemsProvider>,
)
