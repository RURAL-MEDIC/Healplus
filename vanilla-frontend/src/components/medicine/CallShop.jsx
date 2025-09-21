// import React from 'react';
// import '../styles/EmergencyBtn.css';

// const EmergencyBtn = () => {
//     return (
//         <div className='EmergencyBtn'>
//             <button className="button-24" role="button">Emergency Button</button>            
//         </div>
//     );
// }

// export default EmergencyBtn;


import React, { useState, useRef, useEffect } from 'react';
import '../../styles/EmergencyBtn.css';

const EmergencyBtn = () => {
    const emergencyNumber = "+919831753398"; // change as needed

    const [showFallback, setShowFallback] = useState(false);
    const fallbackRef = useRef(null);
    const openButtonRef = useRef(null);

    const isProbablyMobile = () =>
      /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent || "");

    const handleClick = (e) => {
      if (isProbablyMobile()) {
        // allow default anchor behavior on mobile
        return;
      }
      e.preventDefault();
      setShowFallback(true);
    };

    useEffect(() => {
      if (showFallback) {
        const el = fallbackRef.current;
        if (el) el.focus();
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
        if (openButtonRef.current) openButtonRef.current.focus();
      }
      return () => { document.body.style.overflow = ""; };
    }, [showFallback]);

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(emergencyNumber);
        alert("Number copied to clipboard: " + emergencyNumber);
      } catch {
        const el = document.getElementById("emergency-number-text");
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
        <div className='EmergencyBtn'>
            <a
              ref={openButtonRef}
              className="button-24"
              href={`tel:${emergencyNumber}`}
              aria-label={`Call emergency at ${emergencyNumber}`}
              onClick={handleClick}
              role="button"
            >
              Call Nearest Medicine Shop
            </a>

            {showFallback && (
              <div
                className="emergency-fallback-overlay"
                role="dialog"
                aria-modal="true"
                aria-label="emergency phone number"
                onKeyDown={handleKeyDown}
              >
                <div className="emergency-fallback" tabIndex={-1} ref={fallbackRef}>
                  <h2>Call Nearest Medicine Shop</h2>
                  <p id="emergency-number-text" className="emergency-number">
                    {emergencyNumber}
                  </p>
                  <div className="emergency-actions">
                    <a className="btn primary" href={`tel:${emergencyNumber}`}>
                      Open Dialer
                    </a>
                    <button className="btn" onClick={handleCopy}>
                      Copy Number
                    </button>
                    <button className="btn" onClick={() => setShowFallback(false)}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
        </div>
    );
}

export default EmergencyBtn;