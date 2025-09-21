import { useParams, Link } from "react-router-dom";
import { GENERAL_DOCTORS } from "../data/doctorData";
import "../styles/DoctorDetails.css";

const DoctorDetails = () => {
  const { id } = useParams();
  const doctor = GENERAL_DOCTORS.find((doc) => doc.id === id);

  if (!doctor) {
    return <h2>Doctor not found</h2>;
  }

  return (
    <div className="doctor-details-page">
      {/* Left side profile section */}
      <div className="doctor-profile-section">
        <img src={doctor.image} alt={doctor.name} className="doctor-profile-img" />
        <h1>{doctor.name}</h1>
        <h3>{doctor.role}</h3>
        <p><b>Qualification:</b> {doctor.qualification}</p>
        <p><b>Experience:</b> {doctor.experience}</p>
      </div>

      {/* Right side about + booking */}
      <div className="doctor-info-section">
        <div className="doctor-about-section">
            <h2>About Doctor</h2>
        <p className="about-text">{doctor.about}</p>
        </div>

        <div className="appointment-section">
          <Link to={`/appointment/${doctor.id}`} className="book-appointment-btn">
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
