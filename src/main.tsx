import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/reports" element={<Reports />} />
        <Route path="/globe" element={<Globe />} /> */}
      </Routes>
    </HashRouter>
  </StrictMode>
)
