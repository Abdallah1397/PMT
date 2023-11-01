import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";

// Navbar
const Navbar = () => {
  const [isToggledMenu, setIsToggledMenu] = useState(false);
  return (
    <div className="pmtNavbar">
      {/* Logo page */}
      <img
        src={require("../../assets/images/pmt.jpg")}
        alt="Logo"
        className="pmtLogo"
      />
      <div
        className={isToggledMenu ? "navbarContent toggled" : "navbarContent"}
      >
        {/* Navbar Items */}
        <ul className="navbarLinks">
          <li className="link">
            <NavLink to="/" onClick={() => setIsToggledMenu(!isToggledMenu)}>
              Home
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              to="/about"
              onClick={() => setIsToggledMenu(!isToggledMenu)}
            >
              About
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              to="/contactus"
              onClick={() => setIsToggledMenu(!isToggledMenu)}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        {/* Social Media Wrapper */}
        <div className="socialMediaWrapper">
          <img
            src={require("../../assets/images/welcome.png")}
            alt="welcomeImage"
          />
          {/* Social Media Icons */}
          <div className="socialMediaIcons">
            <Link to="https://www.facrbook.com/">
              <img
                src={require("../../assets/images/facebookIcon.png")}
                alt="facebookIcon"
              />
            </Link>
            <Link to="https://www.instagram.com/">
              <img
                src={require("../../assets/images/instagramIcons.png")}
                alt="instagramIcons"
              />
            </Link>
            <Link to="https://www.linkedin.com/">
              <img
                src={require("../../assets/images/linkedinIcon.png")}
                alt="linkedinIcon"
              />
            </Link>
            <Link to="https://www.pinterest.com/">
              <img
                src={require("../../assets/images/pinterestIcon.png")}
                alt="pinterestIcon"
              />
            </Link>
          </div>
        </div>
      </div>
      {/* Animated Menu Icon */}
      <label
        className={isToggledMenu ? "menuIcon animated" : "menuIcon"}
        onClick={() => setIsToggledMenu(!isToggledMenu)}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </label>
    </div>
  );
};
export default Navbar;
