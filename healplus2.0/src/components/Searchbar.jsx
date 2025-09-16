import React from 'react'
import "../styles/Searchbar.css"

export default function Searchbar() {
  return (
    <>
    {/* // <!-- Top Navbar --> */}
    <div className="top-bar">
      <label className="menu-btn round-btn" for="hamburger"><input type="checkbox" name="hamburger" id="hamburger"/>≡</label>
      <input type="text" placeholder="Search Medicine"/>
      <div className="right-btn-grp">
          <div className="lang-btn round-btn">EN</div>
          <div className="offer-btn round-btn">%</div>
      </div>
    </div>
    {/* <!-- H  amburger Menu --> */}
    <div className="hamburger-menu">
      <div className="wrapper"></div>
      <div className="menu">
          <div className="upper">
              <ul>
                  <li>
                      <div className="profile">
                          <div className="profile-details">
                              <div className="profile-img">
                                  <img src="default-profile-pic.jpg" alt=""/>
                              </div>
                              <div className="details">
                                  <div className="profile-name"><h3>John Doe</h3></div>
                                  <div className="profile-ph">+91 1234567890 | <a href="">Verify</a></div>
                              </div>
                          </div>
                          <a href="">Edit Profile</a>
                      </div>
                  </li>
                  <li><a href="" className="hamburger-links">Medical History</a></li>
                  <li><a href="" className="hamburger-links"> Shceduled appoitment</a></li>
                  <li><a href="" className="hamburger-links">Get Help</a></li>
              </ul>
          </div>
          <div className="lower">
              <ul>
                  <li><a href=""><img src="settings.png" alt="" className="icon"/></a></li>
                  <li>version: 1.0.0</li>
              </ul>
          </div>
      </div>
      <label for="hamburger" className="close-btn">
          <p>Tap here to return</p>
          <input type="checkbox" name="hamburger" id="hamburger"/>
      </label>
    </div>
  </>
  )
}
