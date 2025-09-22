import React from 'react';
import { Link } from 'react-router-dom';
import Doctor from "../assets/calender.svg";
import Bed from "../assets/bed.svg";
import MedicineAvail from "../assets/chatbot2.0.png";
import "../styles/Features.css";

const Features = () => {
    return (
        <div className='Features'>
            <Link to="/chat">
                <img src={MedicineAvail} alt=""/>
                <h3>AI Chat</h3>
            </Link>

            <a href="/CheckBed.html">
                <img src={Bed} alt=""/>
                <h3>Check Hospital Bed</h3>
            </a>

            <a href="#">
                <img src={Doctor} alt=""/>
                <h3>Medical History</h3>
            </a>
        </div>
    );
}

export default Features;
