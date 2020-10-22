import React from "react";

function Nav() {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <h1>
          DWS
          <i
            className="fas fa-tint"
            style={{ marginLeft: "10px", fontSize: "30px", color: "#fcdd00" }}
          ></i>
        </h1>
      </div>

      <div className="links">
        {/* <a href="#home">HOME</a> */}
        <a href="#services">SERVICES</a>
        <a href="#contact">CONTACT</a>
      </div>
    </div>
  );
}
export default Nav;
