import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Index from './Pages/Index.tsx'
import { BrowserRouter } from 'react-router-dom';
// import tailwindcss from '@tailwindcss/vite'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
     </StrictMode>,
)
