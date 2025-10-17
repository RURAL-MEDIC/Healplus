import { Link } from "react-router-dom";
import Card from "../components/card";
import { GENERAL_DOCTORS, SPECIALISTS } from "../data/doctorData";
import "../styles/Doctor.css";
import profileIcon from "../assets/user-solid-full.svg";

const Doctor = () => {
  return (
    <div className="doctor-container">
      {/* General Doctors */}
      <div className="doctor-list-container">
        <Link
          to="/allgeneraldoctors"
          className="general-doctor doctorPage-Link-headings"
        >
          <h1>General Doctor ➡</h1>
        </Link>

        <div className="doctorPage-cardContainer">
          {/* show only first 4 */}
          {GENERAL_DOCTORS.slice(0,4).map((doc) => (
            <Card
              key={doc.id}
              variant="medium"
              path={`/doctor/${doc.id}`}
              img={doc.image}
              title={doc.name}
              info={doc.role}
            ></Card>
          ))}
        </div>

        {/* full list on new page */}
        <Link to="/allgeneraldoctors" className="view-all-doctors">
          <p>View All Doctors ➡</p>
        </Link>
      </div>

      {/* Specialists Categories */}
      <div className="specialists-list-container">
        <Link to="/specialists" className="specialist doctorPage-Link-headings">
          <h1>Specialists ➡</h1>
        </Link>

        <div className="specialist-container doctorPage-cardContainer">
          {SPECIALISTS.slice(0,4).map((spe) => (
            <Card
              key={spe.id}
              variant="small"
              path={`/specialist/${spe.id}`}
              img={profileIcon}
              title={spe.category}
            ></Card>
          ))}
        </div>

        <Link to="/specialists" className="view-all-specialists">
          <p>View All Specialists ➡</p>
        </Link>
      </div>
    </div>
  );
};

export default Doctor;
