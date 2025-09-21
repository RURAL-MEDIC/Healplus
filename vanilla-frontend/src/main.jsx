import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import ChatBotAI from './pages/aiinterface.jsx'
import Medicine from './pages/Medicine.jsx'
import Doctor from './pages/Doctor.jsx'

import DocDashboard from './components/DocDashboard.jsx'
import Map from './pages/MapPage.jsx'


import AllGeneralDoctors from './pages/AllGeneralDoctors.jsx'
import DoctorDetails from './pages/DoctorDetails.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route index element={<Home/>}/>
          <Route path="/chat" element={<ChatBotAI />} />
          <Route path="/doctor" element={<Doctor />} />

          <Route path="/medicine" element={<Medicine />} /> 
          <Route path="/doc-dashboard" element={<DocDashboard />} />
          <Route path="/medicine" element={<Medicine />} />

          <Route path="/map" element={<Map />} />

          <Route path="/allgeneraldoctors" element={<AllGeneralDoctors />} />
          <Route path="/doctor/:id" element={<DoctorDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
