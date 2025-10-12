import React from "react";
import Card from "../Common/Card"
import ShowMore from "../Common/ShowMore"
import { GENERAL_DOCTORS } from "../../data/doctorData";
import "../../styles/DoctorComponent/GeneralDoctor.css";

const GeneralDoctor = () => {
  return (
    <div className="GeneralDoctor">
      <div className="heading-link">
        <h1>General Doctor ➡</h1>
      </div>

      <ShowMore
        items={GENERAL_DOCTORS}
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
      >View all General Doctor</ShowMore>
    </div>
  );
};

export default GeneralDoctor;
