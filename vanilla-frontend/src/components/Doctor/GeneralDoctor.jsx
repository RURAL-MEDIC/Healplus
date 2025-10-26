import React from "react";
import Card from "../Common/Card";
import ShowMore from "../Common/ShowMore";
import Doctors from "../../data/doctorData.json";
import "../../styles/DoctorComponent/GeneralDoctor.css";
import { useTranslation } from "react-i18next";

const GeneralDoctor = () => {
  const { t } = useTranslation("doctor");

  const generalDoctor = Doctors.find((doc) => doc.category === "General");

  return (
    <div className="GeneralDoctor">
      <div className="heading-link">
        <h1>{t("doctor.general")} ➡</h1>
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
        {t("doctor.all")}
      </ShowMore>
    </div>
  );
};

export default GeneralDoctor;
