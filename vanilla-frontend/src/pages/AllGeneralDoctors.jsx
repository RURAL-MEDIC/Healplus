import { Link } from "react-router-dom";
import Card from "../components/card";
import { GENERAL_DOCTORS } from "../data/doctorData";
import "../styles/AllGeneralDoctors.css";
import profileIcon from "../assets/user-solid-full.svg";

const AllGeneralDoctors = () => {
  return (
    <div className="all-general-doctors">
      <h1>All General Doctors</h1>

      <div className="allGeneralDoctor-list">
        {GENERAL_DOCTORS.map((doc) => (
          <Card
            key={doc.id}
            variant="medium"
            path={`/doctor/${doc.id}`}
            img={doc.image}
            title={doc.name}
            info={doc.role}
          >
            <small>{doc.bio}</small>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllGeneralDoctors;
