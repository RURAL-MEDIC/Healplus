import { useParams, Link } from "react-router-dom";
import { GENERAL_DOCTORS } from "../data/doctorData"; // ✅ make sure path is correct
import "../styles/DoctorDetails.css";

const DoctorDetails = () => {
  const { id } = useParams();
  const doctor = GENERAL_DOCTORS.find((doc) => doc.id === id);

  if (!doctor) {
    return <h2 className="doctor-not-found">Doctor not found</h2>;
  }

  return (
    <div className="doctor-details-page">
      {/* Left side profile section */}
      <div className="doctor-profile-section">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="doctor-profile-img"
        />
        <h1 className="doctor-name">{doctor.name}</h1>
        <h3 className="doctor-role">{doctor.role}</h3>
        <p className="doctor-qualification">
          <strong>Qualification:</strong> {doctor.qualification}
        </p>
        <p className="doctor-experience">
          <strong>Experience:</strong> {doctor.experience}
        </p>
      </div>

      {/* Right side about + booking */}
      <div className="doctor-info-section">
        <div className="doctor-about-section">
          <h2 className="about-heading">About Doctor</h2>
          <p className="about-text">{doctor.about}</p>
        </div>

        <div className="appointment-section">
          <h4
            className={`appointment-status ${
              doctor.available ? "status-available" : "status-unavailable"
            }`}
          >
            Appointment Status:{" "}
            {doctor.available ? "Available" : "Not Available"}
          </h4>

          <Link
            to={doctor.available ? `/appointment/${doctor.id}` : "#"}
            className={`book-appointment-btn ${
              doctor.available ? "" : "disabled"
            }`}
            onClick={(e) => !doctor.available && e.preventDefault()}
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
