import React from "react";
import { BrowserRouter, Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Citadine from "./components/Citadine";
import Compact from "./components/Compact";
import Suv from "./components/Suv";
import About from "./components/About";


const App = () => {
  
  return (
    <div className="mainPage">
    <BrowserRouter>
      <Header />
      <Router>
      <Route path = "/" exact component = {App} />
        <Route path = "/citadine" component = {Citadine} />
        <Route path = "/compact" component = {Compact} />
        <Route path = "/suv" component = {Suv} />
        <Route path = "/about" component = {About} />
      </Router>
      </BrowserRouter>
    </div>
  );
};

export default App;
