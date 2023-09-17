import React from "react";
import Navbar from "./Componant/Navbar/Navbar";
import Banner from "./Componant/banner/Banner";
import About from "./Componant/About/About";
import Projects from "./Componant/Projects/Projects";
import Contact from "./Componant/Contact/contact";
import FooterBottom from "./Componant/Footer/FooterBottom";


function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar/>
      <div className="max-w-screen-xl mx-auto">
        <Banner/>
        <About/>
        <Projects/>
        <Contact/>
        <FooterBottom/>
        
      </div>
    </div>
  );
}

export default App;
