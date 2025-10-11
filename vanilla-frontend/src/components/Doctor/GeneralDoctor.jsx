import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card";
import ShowMore from "../ShowMore";
import { GENERAL_DOCTORS } from "../../data/doctorData";
import "../../styles/DoctorComponent/GeneralDoctor.css";

const GeneralDoctor = () => {
  return (
    <div className="GeneralDoctor">
      <Link to="/allgeneraldoctors" className="heading-link">
        <h1>General Doctor ➡</h1>
      </Link>

      <ShowMore
        items={GENERAL_DOCTORS}
        limit={4}
        renderItem={(doc) => (
          <Card
            key={doc.id}
            variant="medium"
            path={`/doctor/${doc.id}`}
            img={doc.image}
            title={doc.name}
            info={doc.role}
          />
        )}
      >Show all General Doctor</ShowMore>
    </div>
  );
};

export default GeneralDoctor;
