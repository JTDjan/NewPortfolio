import { React, useEffect, useRef } from "react";
import "./landing.scss";
import { init } from "ityped";

const Landing = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Designer", "Learner!"],
    });
  }, []);
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
            Jnr Software developer <span ref={textRef}></span>
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
