import React from "react";
import Whatwedoimage from "../assets/whatwedoimage3.jpg";
function Whatwedo() {
  return (
    <div>
      <div className="whatwedo-container">
        <div className="whatwedo-text">
          <div className="whatwedo-title">
            {" "}
            <h3>WHAT WE DO</h3>
          </div>
          <div className="whatwedo-description">
            <h1>
              {" "}
              We are aware of the hazardous chemicals in used oil, and we
              prevent the spread of those chemicals by cleaning it and making it
              reusable. Making for a healthier enviroment.{" "}
            </h1>
          </div>
          <div className="whatwedo-button">
            <button>Learn More</button>
          </div>
        </div>
        <div className="whatwedo-image">
          {" "}
          <img className="home-img" src={Whatwedoimage} alt="oil rigs" />
        </div>
      </div>
    </div>
  );
}
export default Whatwedo;
