import React from "react";

function Nav() {
  return (
    <div className="nav-container">
      {/* <h1>
        DWS
        <i
          className="fas fa-tint"
          style={{ marginLeft: "10px", fontSize: "24px", color: "#f0d334" }}
        ></i>
      </h1> */}
      <div className="links">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#portfolio">PROJECTS</a>
        <a href="#contact">CONTACT</a>
      </div>
    </div>
  );
}
export default Nav;
