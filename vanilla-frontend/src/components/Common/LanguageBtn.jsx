import React, { useEffect, useState, useRef } from "react";
import Language from "../../assets/language.svg";
import { useTranslation } from "react-i18next";
import "../../styles/Common/LanguageBtn.css";

const languages = [
  { code: "en", lang: "English" },
  { code: "pn", lang: "Punjabi" },
  { code: "hi", lang: "Hindi" },
];

const LanguageBtn = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="LanguageBtn-container" ref={dropdownRef}>
      <button
        className="langBtn"
        onClick={handleToggle}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <img src={Language} height="22px" />
      </button>

      {isOpen && (
        <div className="dropdown" role="menu">
          {languages.map((lng) => {
            return (
              <button
                key={lng.code}
                type="button"
                role="menuitem"
                className={`dropdown-item ${
                  lng.code === i18n.language ? "selected" : ""
                }`}
                onClick={() => changeLanguage(lng.code)}
              >
                {lng.lang}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageBtn;
