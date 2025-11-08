import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Common/Card";
import ShowMore from "../Common/ShowMore";
import profileIcon from "../../assets/user-solid-full.svg";
import Doctors from "../../data/doctorData.json";
import "../../styles/DoctorComponent/SpecialistDoctor.css";
import { useTranslation } from "react-i18next";

const SpecialistDoctor = () => {
  const {t} = useTranslation("doctor")
  return (
    <div className="SpecialistDoctor">
      <Link to="/specialists" className="heading-link">
        <h1>{t("spl.title")} ➡</h1>
      </Link>

      <ShowMore
        items={Doctors}
        renderItem={(spe) => (
          <Card
            key={spe.id}
            variant="small"
            path={`/specialist/${spe.id}`}
            img={profileIcon}
            title={spe.category}
          />
        )}
      >
        {t("spl.all")}
      </ShowMore>
    </div>
  );
};

export default SpecialistDoctor;
