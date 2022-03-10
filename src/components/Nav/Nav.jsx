// Imports
import React from "react";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
       <div className="logoContainer">
           <p>LOGO JTD</p>
        </div> 
      <div className="linkContainer">
          <ul>
              <li>
                {" "}
                <a className="linkStyle" href="#Home">Home</a>{" "}
              </li>
              <li>
                {" "}
                <a className="linkStyle" href="#About">About</a>
              </li>
              <li>
                {" "}
                <a className="linkStyle" href="#Project">Project</a>
              </li>
              <li>
                {" "}
                <a className="linkStyle" href="#Contact">Contact</a>
              </li>
          </ul>
          </div>
              </nav>
     
  );
};

export default Nav;
