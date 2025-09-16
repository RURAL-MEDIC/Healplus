import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import MainStruc from './pages/MainStruc.jsx'
import CallDocNAmbulance from './components/CallDocNAmbulance.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<MainStruc/>}>
            {/* <Route path='/home' element={<CallDocNAmbulance/>}/> */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
