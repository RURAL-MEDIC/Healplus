import React from "react";
import { Link } from "react-router-dom";
import profileIcon from "../assets/user-solid-full.svg";

import "../styles/Doctor.css";

const Doctor = () => {
  return (
    <div className="doctor-container">
      {/* main container doctor slid */}
      <div className="doctor-list-container">
        <Link to="#" className="general-doctor">
          <h1>General Doctor ➡</h1>
        </Link>
        <div className="doctor-list">
          <Link className="doctor-card">
            <div className="profile-icon">
              <img src={profileIcon} alt="" />
            </div>
            <div className="doctor-name">
              <p>Jhon Doe</p>
            </div>
          </Link>
          <Link className="doctor-card">
            <div className="profile-icon">
              <img src={profileIcon} alt="" />
            </div>
            <div className="doctor-name">
              <p>Jhon Doe</p>
            </div>
          </Link>
          <Link className="doctor-card">
            <div className="profile-icon">
              <img src={profileIcon} alt="" />
            </div>
            <div className="doctor-name">
              <p>Jhon Doe</p>
            </div>
          </Link>
          <Link className="doctor-card">
            <div className="profile-icon">
              <img src={profileIcon} alt="" />
            </div>
            <div className="doctor-name">
              <p>Jhon Doe</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
