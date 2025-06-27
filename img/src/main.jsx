
import { createRoot } from 'react-dom/client'
// vite.config.js
// vite.config.js
import './App.css';

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AppcontextProvider } from './context/Appcontext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AppcontextProvider>
     <App />
  </AppcontextProvider>
 
  </BrowserRouter>
    
  
 
)
