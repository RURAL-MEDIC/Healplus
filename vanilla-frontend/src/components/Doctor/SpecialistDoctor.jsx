import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card";
import ShowMore from "../ShowMore";
import profileIcon from "../../assets/user-solid-full.svg";
import { SPECIALISTS } from "../../data/doctorData";
import "../../styles/DoctorComponent/SpecialistDoctor.css";

const SpecialistDoctor = () => {
  return (
    <div className="SpecialistDoctor">
      <Link to="/specialists" className="heading-link">
        <h1>Specialists ➡</h1>
      </Link>

      <ShowMore
        items={SPECIALISTS}
        renderItem={(spe) => (
          <Card
            key={spe.id}
            variant="small"
            path={`/specialist/${spe.id}`}
            img={profileIcon}
            title={spe.category}
          />
        )}>View All Specialists</ShowMore>
    </div>
  );
};

export default SpecialistDoctor;
