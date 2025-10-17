import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/Searchbar.css";
import Usericon from "../assets/user-solid-full.svg";
import Hamburger from "../assets/hamburger.svg";
import Language from "../assets/language.svg";
import Location from "../assets/location-dot.svg";
import Settings from "../assets/settingbtn.svg";
import Search from "../assets/searchicon.svg";
import { useSearch } from "../contexts/SearchContext";

export default function Searchbar() {
  const navigate = useNavigate();
  const { updateSearchTerm, performSearch, searchTerm, clearSearch } =
    useSearch();
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);
  const { t, i18n } = useTranslation();

  const handleLanguageSwitch = () => {
    const currentLang = i18n.language;
    const newLang = currentLang === 'en' ? 'pn' : 'en';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    setLocalSearchTerm(searchTerm);
  }, [searchTerm]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    updateSearchTerm(localSearchTerm);
    performSearch([], localSearchTerm); // We'll pass medicine data from the Medicine component

    // Navigate to medicine page if not already there
    if (window.location.pathname !== "/medicine") {
      navigate("/medicine");
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setLocalSearchTerm(value);

    // Update search term immediately for live filtering
    updateSearchTerm(value);
  };

  return (
    <>
      <div className="top-bar">
        <label className="menu-btn round-btn" htmlFor="hamburger">
          <input type="checkbox" name="hamburger" id="hamburger" />
          <img src={Hamburger} height="20px" />
        </label>

        <div className="search-wrapper">
          <form className="search-bar" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              id="search-inp"
              placeholder="Search medicines..."
              value={localSearchTerm}
              onChange={handleInputChange}
            />
            <button type="submit" className="search-btn">
              <img src={Search} alt="" />
            </button>
          </form>
        </div>

        <div className="right-btn-grp">
          <div className="lang-btn round-btn">
            <img src={Language} height="22px" />
          </div>
          <button
            className="offer-btn round-btn"
            onClick={() => navigate("/map")}
          >
            <img src={Location} height="22px" />
          </button>
        </div>
      </div>

      {/* Rest of the hamburger menu remains the same */}
      <div className="hamburger-menu">
        <div className="wrapper"></div>
        <div className="menu">
          <div className="upper">
            <ul>
              <li>
                <div className="profile">
                  <div className="profile-details">
                    <div className="profile-img">
                      <img src={Usericon} alt="" />
                    </div>
                    <div className="details">
                      <div className="profile-name">
                        <h3>John Doe</h3>
                      </div>
                      <div className="profile-ph">
                        +91 1234567890 | <a href="">Verify</a>
                      </div>
                    </div>
                  </div>
                  <a href="">Edit Profile</a>
                </div>
              </li>
              <li>
                <a href="" className="hamburger-links">
                  Medical History
                </a>
              </li>
              <li>
                <a href="" className="hamburger-links">
                  {" "}
                  Shceduled appoitment
                </a>
              </li>
              <li>
                <a href="" className="hamburger-links">
                  Get Help
                </a>
              </li>
            </ul>
          </div>
          <div className="lower">
            <ul>
              <li>
                <a href="">
                  <img src={Settings} alt="" className="icon" />
                </a>
              </li>
              <li>version: 1.0.0</li>
            </ul>
          </div>
        </div>
        <label htmlFor="hamburger" className="close-btn">
          <p>Tap here to return</p>
          <input type="checkbox" name="hamburger" id="hamburger" />
        </label>
      </div>
    </>
  );
}
