// Imports
import React from "react";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="wrapper">
        <div className="left">
          <a href="#landing" className="logo">
            JTD Logo
          </a>
        </div>

        <div className="right">
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
