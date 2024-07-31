import React from "react";

import "./App.css";

import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import ThirdBlock from "./components/ThirdBlock";

const App = () => {
  return (
    <div>
      <HeroSection />
      <div className="container">
        <HowItWorks/>
        <ThirdBlock/>
      </div>
    </div>
  );
};

export default App;
