import React from "react";

import "./App.css";

import HeroSection from './components/Hero/HeroSection'
import HowItWorks from "./components/HowItWorks/HowItWorks";
import ThirdBlock from "./components/ThirdBlock/ThirdBlock";
import SliderRev from "./components/Slider/SliderRev";
import QuestionsAnswers from "./components/Accordion/QuestionsAnswers";
import Info from "./components/Info/Info";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";

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
      <Info/>
      <Form/>
      <Footer/>
    </div>
  );
};

export default App;
