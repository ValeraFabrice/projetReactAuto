import React from "react";
import "./App.css";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";
import Footer from "./components/Footer";


const App = () => {
  
  return (
    <div className="mainPage">
    <Header />
    <main className="title">
      <h1 className="title1">AUTO<span>SHOP</span></h1>
      <h3 className="title2">Trouvez votre nouvelle voiture d'occasion chez nous. Pas satisfait, échangez!</h3>
    </main>
    <ImageSlider slides={SliderData} />
    
    <Footer />

    </div>
  );
};


export default App;
