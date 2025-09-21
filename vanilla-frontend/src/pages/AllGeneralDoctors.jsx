import { Link } from "react-router-dom";
import { GENERAL_DOCTORS } from "../data/doctorData";
import "../styles/AllGeneralDoctors.css";
import profileIcon from "../assets/user-solid-full.svg";

const AllGeneralDoctors = () => {
  return (
    <div className="all-general-doctors">
      <h1>All General Doctors</h1>

      <div className="allGeneralDoctor-list">
        {GENERAL_DOCTORS.map((doc) => (
          <Link key={doc.id} className="doctor-card" to={`/doctor/${doc.id}`}>
            <div className="profile-icon">
              <img src={doc.image} alt={doc.name} />
            </div>
            <div className="doctor-info">
              <p>
                <strong>{doc.name}</strong>
              </p>
              <small>{doc.role}</small>
              <p>{doc.bio}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllGeneralDoctors;
