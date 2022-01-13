import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";




const Footer = () => {

    return (

        <footer className="footer">
            <div className="footer_social">
            <a href="https://www.instagram.com">
            <FaInstagram size="40"  color="#fff"/>
            </a>
            <a href="https://fr-fr.facebook.com">
            <FaFacebook size="40"  color="#fff"/>
            </a>
            <a href="https://www.twitter.com">
            <FaTwitter size="40"  color="#fff"/>
            </a>
            <a href="https://www.youtube.com">
            <FaYoutube size="40"  color="#fff"/>
            </a>  
            </div>
        <p className="footer_copyright">Made by AUTOSHOP - 2022</p>
        </footer>
    )
}

export default Footer;