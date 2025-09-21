import React, { useState } from "react";

const offlineHospitals = [
  { name: "City Hospital", phone: "1234567890", lat: 30.3400, lng: 76.3900 },
  { name: "Community Hospital", phone: "0987654321", lat: 30.3450, lng: 76.4000 },
];

const CheckHospital = () => {
  const [nearestHospital, setNearestHospital] = useState(null);
  const [error, setError] = useState("");

  const getNearestHospital = () => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported. Using offline data.");
      setNearestHospital(offlineHospitals[0]);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        let nearest = offlineHospitals[0];
        let minDist = Number.MAX_VALUE;

        offlineHospitals.forEach((hosp) => {
          const dist = Math.sqrt(
            (hosp.lat - latitude) ** 2 + (hosp.lng - longitude) ** 2
          );
          if (dist < minDist) {
            minDist = dist;
            nearest = hosp;
          }
        });

        setNearestHospital(nearest);
        setError("");
      },
      (err) => {
        setError("Could not get location. Using offline data.");
        setNearestHospital(offlineHospitals[0]);
      }
    );
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Check Nearest Hospital Bed</h2>
      <button
        onClick={getNearestHospital}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Find Nearest Hospital
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {nearestHospital && (
        <div style={{ marginTop: "20px" }}>
          <h3>{nearestHospital.name}</h3>
          <p>Phone: {nearestHospital.phone}</p>
          <a
            href={`tel:${nearestHospital.phone}`}
            style={{
              padding: "10px 20px",
              backgroundColor: "#2196F3",
              color: "white",
              borderRadius: "5px",
              textDecoration: "none",
            }}
          >
            Call Now
          </a>
        </div>
      )}
    </div>
  );
};

export default CheckHospital;
