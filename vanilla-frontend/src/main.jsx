import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import ChatBotAI from "./pages/aiinterface.jsx";
import Medicine from "./pages/Medicine.jsx";
import Doctor from "./pages/Doctor.jsx";
import Appointment from "./pages/Appointment.jsx";
import Map from "./pages/MapPage.jsx";
import DocDashboard from "./pages/DocDashboard.jsx";
import DoctorDetails from "./pages/DoctorDetails.jsx";
import NotFound from "./pages/NotFound.jsx";
import "./i18n/i18n.js";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />

          <Route path="/map" element={<Map />} />

          <Route path="/doc-dashboard" element={<DocDashboard />} />

          <Route path="/doctor" element={<Doctor />} />
          <Route path="/doctor/:id" element={<DoctorDetails />} />
          <Route path="/appointment/:id" element={<Appointment />} />

          <Route path="/medicine" element={<Medicine />} />

          <Route path="/chat" element={<ChatBotAI />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
