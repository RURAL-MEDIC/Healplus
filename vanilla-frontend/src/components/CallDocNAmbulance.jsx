import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


import "../styles/CallDocNAmbulance.css";



export default function CallDocNAmbulance() {

  const { t } = useTranslation();


  // Change the phone number below to the emergency number you want to dial
  const ambulanceNumber = "+919831753398"; // Enter your ambulance number here

  const [showFallback, setShowFallback] = useState(false);
  const fallbackRef = useRef(null);
  const openButtonRef = useRef(null);

  // Feature detect if the environment likely supports tel: links opening the dialer.
  // We treat mobile browsers as supporting tel: links. This is a best-effort heuristic.
  const isProbablyMobile = () =>
    /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent || "");

  // Show fallback on click if we're not on mobile (desktop) or if developer wants fallback.
  const handleAmbulanceClick = (e) => {
    if (isProbablyMobile()) {
      // Let the anchor navigate (dialer) on mobile.
      return;
    }

    // On desktop, prevent default and show an accessible fallback dialog with copy option.
    e.preventDefault();
    setShowFallback(true);
  };

  // Focus management: move focus into dialog when opened and return focus when closed.
  useEffect(() => {
    if (showFallback) {
      // wait for element to be present
      const el = fallbackRef.current;
      if (el) el.focus();
      // lock body scroll if desired (small enhancement)
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      if (openButtonRef.current) openButtonRef.current.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showFallback]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(ambulanceNumber);
      // Provide a small visual confirmation; here we use alert for simplicity
      // You can replace with a transient toast component.
      alert("Number copied to clipboard: " + ambulanceNumber);
    } catch (err) {
      // Fallback: select the text so user can copy manually
      const el = document.getElementById("ambulance-number-text");
      if (el) {
        const range = document.createRange();
        range.selectNodeContents(el);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") setShowFallback(false);
  };

  return (
    <div className="CallDocNAmbulance">
      {/* Anchor kept for mobile; on desktop we intercept click and show fallback dialog */}
      <a
        ref={openButtonRef}
        className="ambulance"
        href={`tel:${ambulanceNumber}`}
        aria-label={`Call ambulance at ${ambulanceNumber}`}
        role="button"
        rel="noopener noreferrer"
        onClick={handleAmbulanceClick}
      >
        <div>📞</div>
        <p>{t('general.Call')} an Ambulance</p>
        {/* <p>Call an Ambulance</p> */}
      </a>

      <Link to="/doc-dashboard" className="ambulance">
        <div>🩺</div>
        <p>
          {t('Consult')} <br />
          Doctor
        </p>
      </Link>

      {/* Fallback modal for desktop users */}
      {showFallback && (
        <div
          className="ambulance-fallback-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Ambulance phone number"
          onKeyDown={handleKeyDown}
        >
          <div className="ambulance-fallback" tabIndex={-1} ref={fallbackRef}>
            <h2>{t('Call Ambulance')}</h2>
            <p id="ambulance-number-text" className="ambulance-number">
              {ambulanceNumber}
            </p>
            <div className="ambulance-actions">
              <a className="btn primary" href={`tel:${ambulanceNumber}`}>
                {t('Open Dialer')}
              </a>
              <button className="btn" onClick={handleCopy}>
                {t('Copy Number')}
              </button>
              <button className="btn" onClick={() => setShowFallback(false)}>
                {t('Close')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
