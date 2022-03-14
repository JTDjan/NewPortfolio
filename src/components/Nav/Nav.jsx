// Imports
import React from "react";
import "./Nav.scss";

const Nav = ({menuOpen, setMenuOpen}) => {
  return (
    <nav className={"nav " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#landing" className="logo">
            JTD Logo
          </a>
        </div>

        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
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
