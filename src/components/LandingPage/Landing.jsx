import React from "react";
import "./landing.scss";
import { init } from "ityped";

const Landing = () => {
  return (
    <div className="landing" id="landing">
      <div className="left">
        <div className="imgContainer">
          <img
            src="Assets/Images/profilePic.jpeg"
            alt="Profile pic of Josiah Djan, standing at the emirates stadium. COYG"
          />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Josiah Djan</h1>
          <h3>
            Jnr Software developer <span>Designer</span>
          </h3>
          <a href="#about">
            {/* <img src="" alt="" /> */}
            down icon
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
