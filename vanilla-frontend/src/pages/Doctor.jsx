import { Link } from "react-router-dom";
import GeneralDoctor from "../components/Doctor/GeneralDoctor";
import SpecialistDoctor from "../components/Doctor/SpecialistDoctor";
import "../styles/Doctor.css";

const Doctor = () => {
  return (
    <div className="doctor-container">
      <GeneralDoctor />
      <SpecialistDoctor />
    </div>
  );
};

export default Doctor;
