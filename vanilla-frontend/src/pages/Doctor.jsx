import React from "react";
import { Link } from "react-router-dom";
import profileIcon from "../assets/user-solid-full.svg";

import "../styles/Doctor.css";

const Doctor = () => {
  return (
    <div className="doctor-container">
      {/* main container for general doctor */}

      <div className="doctor-list-container">
        {/* Heading / description */}
        <Link to="#" className="general-doctor doctorPage-Link-headings">
          {/* put same link in to as div.view-all-doctor */}
          <h1>General Doctor ➡</h1>
        </Link>

        {/* Doctor list */}
        <div className="doctor-list doctorPage-cardContainer">
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

        {/* View all doctors link */}
        <Link to="#" className="view-all-doctors">
          <p>View All Doctors ➡</p>
        </Link>
      </div>

      {/* container for specialists catalog */}
      <div className="specialists-list-container">
        <Link to="#" className="speacialist doctorPage-Link-headings">
          <h1>Specialists ➡</h1>
        </Link>
        <div className="specialist-container doctorPage-cardContainer">
          <Link className="specialist-card">
            <div className="specialist-icon">
              <img src={profileIcon} alt="" />
            </div>
            <div className="specialist-name">
              <p>Jhon Doe</p>
            </div>
          </Link>
          <Link className="specialist-card">
            <div className="specialist-icon">
              <img src={profileIcon} alt="" />
            </div>
            <div className="specialist-name">
              <p>Jhon Doe</p>
            </div>
          </Link>
          <Link className="specialist-card">
            <div className="specialist-icon">
              <img src={profileIcon} alt="" />
            </div>
            <div className="specialist-name">
              <p>Jhon Doe</p>
            </div>
          </Link>
          <Link className="specialist-card">
            <div className="specialist-icon">
              <img src={profileIcon} alt="" />
            </div>
            <div className="specialist-name">
              <p>Jhon Doe</p>
            </div>
          </Link>
        </div>
        <Link to="#" className="view-all-specialists">
          <p>View All Specialists ➡</p>
        </Link>
      </div>
    </div>
  );
};

export default Doctor;
