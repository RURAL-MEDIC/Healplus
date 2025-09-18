import React from "react";
import "../styles/CallDocNAmbulance.css";

export default function CallDocNAmbulance() {
  // Change the phone number below to the emergency number you want to dial
  const ambulanceNumber = "+919831834794";

  return (
    <div className="CallDocNAmbulance">
      {/* Use an anchor with tel: so mobile devices open the dialer. Add aria for accessibility. */}
      <a
        className="ambulance"
        href={`tel:${ambulanceNumber}`}
        aria-label={`Call ambulance at ${ambulanceNumber}`}
        role="button"
        rel="noopener noreferrer"
      >
        <div>📞</div>
        <p>Call an Ambulance</p>
      </a>

      <button className="ambulance">
        <div>🩺</div>
        <p>
          Consult <br />
          Doctor
        </p>
      </button>
    </div>
  );
}
