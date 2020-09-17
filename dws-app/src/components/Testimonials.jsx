import React from "react";
import Slider from "infinite-react-carousel";
import ImportantPerson from "../assets/markwhalberg.jpg";
function Testimonials() {
  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div>
      <div className="testimonials-container">
        <Slider dots {...settings} className="sliderdiv">
          <div className="innerslidediv">
            <h1>
              "I truly love what they do and they are very efficent at their
              job"
            </h1>
            <img className="home-img" src={ImportantPerson} alt="oil rigs" />
            <h2>Mark Whalberg</h2>
            <h3>Famous actor and comedian</h3>
          </div>
          <div className="innerslidediv">
            <h1>
              "I truly love what they do and they are very efficent at their
              job"
            </h1>
            <img className="home-img" src={ImportantPerson} alt="oil rigs" />
            <h2>Mark Whalberg</h2>
            <h3>Famous actor and comedian</h3>
          </div>
          <div className="innerslidediv">
            <h1>
              "I truly love what they do and they are very efficent at their
              job"
            </h1>
            <img className="home-img" src={ImportantPerson} alt="oil rigs" />
            <h2>Mark Whalberg</h2>
            <h3>Famous actor and comedian</h3>
          </div>
          <div className="innerslidediv">
            <h1>
              "I truly love what they do and they are very efficent at their
              job"
            </h1>
            <img className="home-img" src={ImportantPerson} alt="oil rigs" />
            <h2>Mark Whalberg</h2>
            <h3>Famous actor and comedian</h3>
          </div>
          <div className="innerslidediv">
            <h1>
              "I truly love what they do and they are very efficent at their
              job"
            </h1>
            <img className="home-img" src={ImportantPerson} alt="oil rigs" />
            <h2>Mark Whalberg</h2>
            <h3>Famous actor and comedian</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
}
export default Testimonials;
