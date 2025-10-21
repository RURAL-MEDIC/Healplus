import React from "react";
import { NavLink } from "react-router-dom";
import Homeicon from "../../assets/house.svg";
import Chaticon from "../../assets/chatbot.png"
import Medicineicon from "../../assets/pill.svg";
import Doctoricon from "../../assets/stethoscope.svg";
import "../../styles/Common/Navbar.css";

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "selected" : "")}
          >
            <img src={Homeicon} alt="" />
            <p>Home</p>
          </NavLink>
          <NavLink
            to="/doctor"
            className={({ isActive }) => (isActive ? "selected" : "")}
          >
            <img src={Doctoricon} alt="" />
            <p>Doctor</p>
          </NavLink>
          <NavLink
            to="/medicine"
            className={({ isActive }) => (isActive ? "selected" : "")}
          >
            <img src={Medicineicon} alt="" />
            <p>Medicine</p>
          </NavLink>
          <NavLink
            to="/chat"
            className={({ isActive }) => (isActive ? "selected" : "")}
          >
            <img src={Chaticon} alt="" />
            <p>Chat</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
