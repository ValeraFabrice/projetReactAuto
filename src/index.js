import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Citadine from "./components/Citadine";
import Compact from "./components/Compact";
import Suv from "./components/Suv";
import Contact from "./components/Contact";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>      
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="citadine/" element={<Citadine />} />
        <Route path="compact/" element={<Compact />} />
        <Route path="suv/" element={<Suv />} />
        <Route path="contact/" element={<Contact />} />
      </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


