import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DocDashboard.css"; // We'll create this CSS file separately
import { useTranslation } from "react-i18next";

const DoctorDashboard = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "" });

  // Load saved theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
    }
  }, []);

  // Apply theme class to body
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    // Cleanup when component unmounts
    return () => {
      document.body.classList.remove("dark");
    };
  }, [isDark]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const copyRoomId = async (roomId) => {
    try {
      await navigator.clipboard.writeText(roomId);
      showToast("Room ID copied to clipboard!");
    } catch (err) {
      // Fallback for older browsers
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
    // REPLACE THIS WITH YOUR ACTUAL VIDEO CALL LOGIC
    // Example: window.open('https://meet.jit.si/' + roomId, '_blank');
    // Or integrate with your existing video call system

    // For now, just showing an alert
    // alert('Joining video call for room: ' + roomId + '\n\nReplace this with your actual video call link!');

    // You can replace the above with:
    window.open(
      "https://video-app-8115-6825-dev.twil.io?passcode=23849981156825",
      "_blank"
    );
    // or navigate to another component: navigate('/video-call/' + roomId);
  };

  const goBack = () => {
    navigate(-1); // Go back to previous page
  };

  const doctors = [
    { name: "Dr Raj", available: true, roomId: "54324" },
    { name: "Dr Roy", available: true, roomId: "49345" },
    { name: "Dr Pal", available: false, roomId: "23556" },
    { name: "Debiot", available: true, roomId: "23123" },
  ];

  return (
    <div className="doctor-dashboard-container">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <button className="back-btn" onClick={goBack}>
            ← Back
          </button>
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDark ? "🌙 Dark" : "☀️ Light"}
          </button>
          <h1>Doctor Notification Dashboard</h1>
        </div>

        {doctors.map((doctor, index) => (
          <div
            key={index}
            className={`doctor-card ${!doctor.available ? "unavailable" : ""}`}
          >
            <div className="doctor-info">
              <div>
                <div className="doctor-name">{doctor.name}</div>
                <div
                  className={`availability-status ${
                    doctor.available ? "available" : "unavailable-status"
                  }`}
                >
                  {doctor.available ? "Available" : "Not Available"}
                </div>
                <div className="room-info">
                  <span className="room-id">Room ID: {doctor.roomId}</span>
                  <button
                    className="copy-btn"
                    onClick={() => copyRoomId(doctor.roomId)}
                  >
                    📋 Copy
                  </button>
                </div>
              </div>
              <div>
                <button
                  className="video-call-btn"
                  onClick={() => joinVideoCall(doctor.roomId)}
                  disabled={!doctor.available}
                >
                  📹 Video Call
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Toast notification */}
      {toast.show && <div className="toast show">{toast.message}</div>}
    </div>
  );
};

export default DoctorDashboard;
