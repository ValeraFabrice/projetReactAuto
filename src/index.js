import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Citadine from "./components/Citadine";
import Compact from "./components/Compact";
import Suv from "./components/Suv";
import About from "./components/About";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>      
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="citadine/" element={<Citadine />} />
        <Route path="compact/" element={<Compact />} />
        <Route path="suv/" element={<Suv />} />
        <Route path="about/" element={<About />} />
      </Routes>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
