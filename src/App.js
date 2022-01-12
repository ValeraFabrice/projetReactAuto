import React from "react";
import "./App.css";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider"
import { SliderData } from "./components/SliderData";


const App = () => {
  
  return (
    <div className="mainPage">
    <Header />
    <ImageSlider slides={SliderData} />
    
    </div>
  );
};


export default App;
