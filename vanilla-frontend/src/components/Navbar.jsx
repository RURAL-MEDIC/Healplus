import React from 'react'
import { useTranslation } from 'react-i18next';
import "../styles/Navbar.css"
import Homeicon from "../assets/house.svg"
import Chaticon from "../assets/chatbot.png"
import Medicineicon from "../assets/pill.svg"
import Doctoricon from "../assets/stethoscope.svg"

import { Link } from "react-router-dom";


export default function Navbar() {
  const { t } = useTranslation();

  return (
    <div>
        <div className="navbar">
            <div className="links">

                <Link to="/"><img src={Homeicon} alt=""/>{t('navbar.home')}</Link>
                <Link to="/doctor"><img src={Doctoricon} alt=""/>{t('navbar.doctor')}</Link>
                <Link to="/medicine"><img src={Medicineicon} alt=""/>{t('navbar.medicine')}</Link>
                <Link to="/chat"><img src={Chaticon} alt=""/>{t('navbar.chat')}</Link>

            </div>
        </div>
    </div>
  )
}
