import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
// windicss utilities should be the last style import
import 'virtual:windi-utilities.css'
// // windicss devtools support (dev only)
import 'virtual:windi-devtools'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
