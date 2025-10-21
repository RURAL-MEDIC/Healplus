import React from 'react';
import { Link } from 'react-router-dom';
import Doctor from "../../assets/calender.svg";
import Bed from "../../assets/bed.svg";
import MedicineAvail from "../../assets/chatbot2.0.png";
import "../../styles/Sections/Features.css";
import { useTranslation } from 'react-i18next';

const Features = () => {
    const {t} = useTranslation();

    return (
        <div className='Features'>
            <Link to="/chat">
                <img src={MedicineAvail} alt=""/>
                <h3>{t("ai_chat.line1")}</h3>
            </Link>

            <Link to="/CheckBed">
                <img src={Bed} alt=""/>
                <h3>{t("check_bed")}</h3>
            </Link>

            <Link to="medical-history">
                <img src={Doctor} alt=""/>
                <h3>{t("medical_history")}</h3>
            </Link>
        </div>
    );
}

export default Features;
