import React from "react";
import Missionimage from "../assets/missionimg4.jpeg";
function Mission() {
  return (
    <div>
      <div className="mission-container">
        <div className="mission-text">
          <div className="mission-title">
            {" "}
            <h3>OUR MISSION</h3>
          </div>
          <div className="mission-description">
            <h1>
              {" "}
              We are aware of the hazardous chemicals in used oil, and we
              prevent the spread of those chemicals by cleaning it and making it
              reusable. Making for a healthier enviroment.{" "}
            </h1>
          </div>
          <div className="mission-button">
            <button>Learn More</button>
          </div>
        </div>
        <div className="mission-image">
          {" "}
          <img className="home-img" src={Missionimage} alt="oil rigs" />
        </div>
      </div>
    </div>
  );
}
export default Mission;
