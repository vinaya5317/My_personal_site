import React from "react";
import Cloud from "../images/cloud.png";
import Mountain from "../images/mountain.png";

function Header() {
  return (
    <div className="top-container">
      <img className="top-cloud" src={Cloud} alt="cloud" />
      <div className="title-text">
        <h1>Hi , I'm Vinaya Rekha.</h1>
        <h2>
          a <span className="pro"> pro</span>grammer.
        </h2>
        <div>
          <img className="bottom-cloud" src={Cloud} alt="cloud" />
          <img className="mountain" src={Mountain} alt="mountain-img" />
        </div>
      </div>
    </div>
  );
}

export default Header;
