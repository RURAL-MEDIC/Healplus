import { GENERAL_DOCTORS } from "../data/doctorData";
import "../styles/AllGeneralDoctors.css"
import profileIcon from "../assets/user-solid-full.svg";

const AllGeneralDoctors = () => {
  return (
    <div className="all-general-doctors">
      <h1>All General Doctors</h1>
      <div className="doctor-list doctorPage-cardContainer">
        {GENERAL_DOCTORS.map((doc) => (
          <div key={doc.id} className="doctor-card">
            <div className="profile-icon">
              <img src={profileIcon} alt={doc.name} />
            </div>
            <div className="doctor-info">
              <p><strong>{doc.name}</strong></p>
              <small>{doc.role}</small>
              <p>{doc.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllGeneralDoctors;
