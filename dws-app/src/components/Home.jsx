import React from "react";
import Oilrig from "../assets/oilrig.jpg";
function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="home-content">
          <img src={Oilrig} alt="oil rigs" />
        </div>
      </div>
    </div>
  );
}
export default Home;
