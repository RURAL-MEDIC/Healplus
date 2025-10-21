import React from 'react'
import "../styles/Navbar.css"
import Homeicon from "../assets/house.svg"
import Chaticon from "../assets/chatbot.png"
import Medicineicon from "../assets/pill.svg"
import Doctoricon from "../assets/stethoscope.svg"
import { NavLink } from 'react-router-dom'


export default function Navbar() {
  return (
    <div>
        <div className="navbar">
            <div className="links">
                
                <NavLink to="/" className={({isActive}) => isActive ? "selected" : ""}><img src={Homeicon} alt=""/>Home</NavLink>
                <NavLink to="/doctor" className={({isActive}) => isActive ? "selected" : ""}><img src={Doctoricon} alt=""/>Doctor</NavLink>
                <NavLink to="/medicine"  className={({isActive}) => isActive ? "selected" : ""}><img src={Medicineicon} alt=""/>Medicine</NavLink>
                <NavLink to="/chat"  className={({isActive}) => isActive ? "selected" : ""}><img src={Chaticon} alt=""/>Chat</NavLink>
              
            </div>
        </div>
    </div>
  )
}
