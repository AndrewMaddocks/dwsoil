import React from "react";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Mission from "./components/Mission";
import Whatwedo from "./components/Whatwedo";
import Testimonials from "./components/Testimonials";
function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Mission />
      <Whatwedo />
      <Testimonials />

      <Footer />
    </div>
  );
}

export default App;
