import React from 'react';
import "../styles/Features.css";

const Features = () => {
    return (
        <div className='Features'>
            <a href="#" target="_blank">
                <img src="../img/medicine.png" alt=""/>
                <h3>Check Medicine</h3>
            </a>

            <a href="#" target="_blank">
                <img src="../img/bed.svg" alt=""/>
                <h3>Inquire Empty Bed</h3>
            </a>

            <a href="#" target="_blank">
                <img src="../img/doctor.png" alt=""/>
                <h3>Doctor Appointment</h3>
            </a>
        </div>
    );
}

export default Features;
