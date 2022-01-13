import React from "react";
import "./App.css";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider"
import { SliderData } from "./components/SliderData";


const App = () => {
  
  return (
    <div className="mainPage">
    <Header />
    <main className="title">
      <h1 className="title1">AUTOSHOP</h1>
      <h2 className="title2">Trouvez votre nouvelle voiture d'occasion</h2>
    </main>
    <ImageSlider slides={SliderData} />

    </div>
  );
};


export default App;
