import React from 'react';
import Doctor from "../assets/calender.svg";
import Bed from "../assets/bed.svg";
import MedicineAvail from "../assets/medicine.png";
import "../styles/Features.css";

const Features = () => {
    return (
        <div className='Features'>
            <a href="#" target="_blank">
                <img src={MedicineAvail} alt=""/>
                <h3>Check Medicine</h3>
            </a>

            <a href="#" target="_blank">
                <img src={Bed} alt=""/>
                <h3>Check Hospital Bed</h3>
            </a>

            <a href="#" target="_blank">
                <img src={Doctor} alt=""/>
                <h3>Doctor Appointment</h3>
            </a>
        </div>
    );
}

export default Features;
