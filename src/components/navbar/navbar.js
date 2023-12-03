import React, { useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/user";
import "./navbar.css";

// Navbar
const Navbar = () => {
  // useNavigate is a hook used to navigate to different routes
  const navigate = useNavigate();
  // Get the user state
  const user = useSelector((state) => state.user);
  // Destructuring the state
  const { username, isAuth } = user;
  // Dispatch Actions
  const dispatch = useDispatch();
  // State for showing dropdown menu
  const [isToggledMenu, setIsToggledMenu] = useState(false);
  // Close the dropdown menu
  const closeMenu = () => {
    if (window.innerWidth <= 767) {
      setIsToggledMenu(false);
    }
  };
  // Logout
  const handleLogout = () => {
    dispatch(logout());
    navigate("/signin");
  };
  return (
    <div className="pmtNavbar">
      {/* Logo page */}
      <div className="logoWrapper">
        <img
          className="pmtLogo"
          src={require("../../assets/images/pmt.jpg")}
          alt="Logo"
        />
      </div>
      {isAuth ? (
        <div
          className={isToggledMenu ? "navbarContent toggled" : "navbarContent"}
        >
          {/* Navbar Items */}
          <ul className="navbarLinks">
            <li className="link">
              <NavLink to="/" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li className="link">
              <NavLink to="/profiles" onClick={closeMenu}>
                Profiles
              </NavLink>
            </li>
            <li className="link">
              <NavLink to="/about" onClick={closeMenu}>
                About
              </NavLink>
            </li>
          </ul>
          {/* User Account */}
          <div className="accountInfo">
            <p>{username}</p>
            <IconButton onClick={handleLogout}>
              <Tooltip title="Logout">
                <LogoutOutlinedIcon fontSize="large" color="error" />
              </Tooltip>
            </IconButton>
          </div>
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
      ) : null}
      {/* Animated Menu Icon */}
      {isAuth ? (
        <label
          className={isToggledMenu ? "menuIcon animated" : "menuIcon"}
          onClick={() => setIsToggledMenu(!isToggledMenu)}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </label>
      ) : (
        <NavLink to={"/signin"} className="signinLink">
          SignIn
        </NavLink>
      )}
    </div>
  );
};
export default Navbar;
