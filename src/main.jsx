import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Убираем BrowserRouter отсюда!
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* Router теперь только в App.jsx */}
  </React.StrictMode>
)