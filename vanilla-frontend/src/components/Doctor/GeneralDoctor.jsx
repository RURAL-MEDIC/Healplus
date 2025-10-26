import React from "react";
import Card from "../Common/Card";
import ShowMore from "../Common/ShowMore";
import Doctors from "../../data/doctorData.json";
import "../../styles/DoctorComponent/GeneralDoctor.css";

const GeneralDoctor = () => {
  const generalDoctor = Doctors.find(doc => doc.category === "General");

  return (
    <div className="GeneralDoctor">
      <div className="heading-link">
        <h1>General Doctor ➡</h1>
      </div>

      <ShowMore
        items={generalDoctor.doctors}
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
      >
        View all General Doctor
      </ShowMore>
    </div>
  );
};

export default GeneralDoctor;
