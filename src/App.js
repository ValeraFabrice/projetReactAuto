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
    <section>
      <h2>Qui sommes-nous?</h2>
      <p>En créant AUTOSHOP, Nous avons tout simplement inventé une nouvelle solution pour changer de voiture, </p> <br/>
      <p>Comment ? En vous offrant la possibilité d’acheter en ligne, au téléphone, ou en agence, au meilleur prix et en toute transparence, une voiture neuve ou une voiture d’occasion reconditionnée parmi des dizaines de marques et des centaines de modèles ! </p> <br/>
      <p>L’ambition : apporter la meilleure réponse au consommateur qui change de voiture, l'offre la plus large, des prix justes, un niveau de garantie et de service imbattable, et des solutions de consommation innovantes.</p>
    </section>

    <Footer />

    </div>
  );
};


export default App;
