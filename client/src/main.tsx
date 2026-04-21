import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Homepage from './Homepage.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="bg-gradient-to-br from-gray-900 to-purple-900">
    <App/>
    </div>
  </StrictMode>,
)
