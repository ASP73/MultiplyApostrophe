// import React from "react";
import PropTypes from "prop-types";
import lhpsLogo from "../assets/lhps logo.png";
import settingsIcon from "../assets/settings-svgrepo-com.svg";
import { Link } from "react-router-dom";

const Header = ({ isAdmin }) => {
  return (
    <header className="header">
      <div className="header-left">
        <img className="schoollogo" src={lhpsLogo} alt="LHPS Logo" />
        <p>Little Hill Primary School</p>
      </div>
      <div className="header-right">
        {isAdmin && (
          <>
            <p>Settings</p>
            <Link to="/settings">
              <img
                className="settingsIcon"
                src={settingsIcon}
                alt="Settings Icon"
              />
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
};

export default Header;
