import { useParams } from "react-router-dom";
import Doctors from "../data/doctorData.json";
import { useState } from "react";
import "../styles/Appointment.css";

const Appointment = () => {
  const { id } = useParams();
  const doctor = Doctors.find((doc) => doc.id === id);

  const [toast, setToast] = useState({ show: false, message: "" });

  const copyRoomId = async (roomId) => {
    try {
      await navigator.clipboard.writeText(roomId);
      showToast("Room ID copied to clipboard!");
    } catch (err) {
      const textArea = document.createElement("textarea");
      textArea.value = roomId;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      showToast("Room ID copied to clipboard!");
    }
  };

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: "" });
    }, 3000);
  };

  const joinVideoCall = (roomId) => {
    // 🔹 Same as DoctorDashboard
    window.open(
      "https://video-app-8115-6825-dev.twil.io?passcode=23849981156825",
      "_blank"
    );
    // OR if you want to use the dynamic room id:
    // window.open(`https://meet.jit.si/${roomId}`, "_blank");
  };

  if (!doctor) {
    return <p className="appointment-error">Doctor not found</p>;
  }

  return (
    <div className="appointment-page">
      <div className="appointment-card">
        {/* Doctor Info */}
        <div className="doctor-info">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="doctor-avatar"
          />
          <h2 className="doctor-name">{doctor.name}</h2>
          <p className="doctor-role">{doctor.role}</p>
          <p
            className={`doctor-status ${
              doctor.available ? "available" : "unavailable-status"
            }`}
          >
            {doctor.available ? "Available" : "Not Available"}
          </p>
        </div>

        {/* Room Info */}
        <div className="room-info">
          <p className="room-id">
            Room ID: <span>{doctor.roomId}</span>
          </p>
          <button
            onClick={() => copyRoomId(doctor.roomId)}
            className="copy-btn"
          >
            📋 Copy
          </button>
        </div>

        {/* Video Call */}
        <button
          className="video-call-btn"
          onClick={() => joinVideoCall(doctor.roomId)}
          disabled={!doctor.available}
        >
          📹 Video Call
        </button>
      </div>

      {/* Toast */}
      {toast.show && <div className="toast show">{toast.message}</div>}
    </div>
  );
};

export default Appointment;
