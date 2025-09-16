import React from 'react'
import "../styles/Navbar.css"
import Homeicon from "../assets/house.svg"
import Chaticon from "../assets/chatbot.png"
import Medicineicon from "../assets/pill.svg"
import Doctoricon from "../assets/stethoscope.svg"


export default function Navbar() {
  return (
    <div>
        <div className="navbar">
            <div className="links">
                <a href="#"><img src={Homeicon} alt=""/>Home</a>
                <a href="#"><img src={Chaticon} alt=""/>Chat</a>
                <a href="#"><img src={Medicineicon} alt=""/>Medicine</a>
                <a href="#"><img src={Doctoricon} alt=""/>Doctor</a>
            </div>
        </div>
    </div>
  )
}
