import React from "react";
import "./Header.css";
import logo from "../assets/logo.jpg";


const Header = () => {
    
    return (
        <div className="headerContainer">
            <img className='logo' alt='logo' src={logo} width="100" height="50"/>
            
            <div className="menu">
                
                <span>Citadine</span>
                <span>Compact</span>
                <span>SUV</span>
                <span>Qui sommes-nous?</span>


            </div>
        </div>
    );
};

export default Header;