import React from 'react'
import "../styles/Searchbar.css"
import Usericon from "../assets/user-solid-full.svg"
import Hamburger from "../assets/hamburger.svg"
import Language from "../assets/language.svg"
import Location from "../assets/location-dot.svg"
import Settings from "../assets/settingbtn.svg"
import Search from "../assets/searchicon.svg"

export default function Searchbar() {
  return (
    <>
    {/* // <!-- Top Navbar --> */}
    <div className="top-bar">
      <label className="menu-btn round-btn" for="hamburger"><input type="checkbox" name="hamburger" id="hamburger"/><img src={Hamburger} height="20px"/></label>
      {/* <form action="">
        <input type="text" placeholder="Search Medicine"/>
        <button type='submit'><img src={Search} height="22px" /></button>
      </form> */}
       <div className="search-wrapper">
            <form className="search-bar">
                <input type="text" id="search-inp" placeholder="Search Medicine..." />
                <button type="submit" className="search-btn"><img src={Search} alt="" /></button>
            </form>
        </div>
      
      <div className="right-btn-grp">
          <div className="lang-btn round-btn"><img src={Language} height="22px" /></div>
          <div className="offer-btn round-btn"><img src={Location} height="22px" /></div>
      </div>
    </div>
    {/* <!-- Hamburger Menu --> */}
    <div className="hamburger-menu">
      <div className="wrapper"></div>
      <div className="menu">
          <div className="upper">
              <ul>
                  <li>
                      <div className="profile">
                          <div className="profile-details">
                              <div className="profile-img">
                                  <img src={Usericon} alt=""/>
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
                  <li><a href=""><img src={Settings} alt="" className="icon"/></a></li>
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
