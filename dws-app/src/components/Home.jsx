import React from "react";
import Oilrig from "../assets/oilrig2.png";
function Home() {
  return (
    <div>
      <div className="home-container">
        <img className="home-img" src={Oilrig} alt="oil rigs" />
        <div className="home-title">
          <h1>We are DWS, an oil cleaning company</h1>
          <a>Learn More </a>
        </div>
      </div>
    </div>
  );
}
export default Home;
