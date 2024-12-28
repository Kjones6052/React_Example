import React from "react"
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

// BrowserRouter wrapping App applies the BrowserRouter to all App files and pages
// Improves app performance by rendering only what is needed at the time
// State persistence, helps keep track of permissions and access via state (if x render a, else render b)
// Efficient resource management via improved app performance