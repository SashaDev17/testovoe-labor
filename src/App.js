import React from "react";

import "./App.css";

import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import ThirdBlock from "./components/ThirdBlock";
import SliderRev from "./components/SliderRev";
import QuestionsAnswers from "./components/QuestionsAnswers";

const App = () => {
  return (
    <div>
      <HeroSection />
      <div className="container">
        <HowItWorks />
        <ThirdBlock />
      </div>
      <SliderRev />
      <QuestionsAnswers/>
    </div>
  );
};

export default App;
