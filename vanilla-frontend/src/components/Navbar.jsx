import React from 'react'
import "../styles/Navbar.css"
import Homeicon from "../assets/house.svg"
import Chaticon from "../assets/chatbot.png"
import Medicineicon from "../assets/pill.svg"
import Doctoricon from "../assets/stethoscope.svg"

import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <div>
        <div className="navbar">
            <div className="links">
                
                <Link to="/"><img src={Homeicon} alt=""/>Home</Link>
                <Link to="/doctor"><img src={Doctoricon} alt=""/>Doctor</Link>
                <Link to="/medicine"><img src={Medicineicon} alt=""/>Medicine</Link>
                <Link to="/chat"><img src={Chaticon} alt=""/>Chat</Link>
              
            </div>
        </div>
    </div>
  )
}
