import React from 'react';
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_logo from "../Assets/instagram_icon.png";
import pinterest_logo from "../Assets/pintester_icon.png";
import whatsapp_logo from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo}/>
            <p>H & K</p>
        </div>
        <ul className='footer-list'>
           <li>Home</li>
           <li>offices</li>
           <li>products</li>
           <li>About</li>
           <li>Contact</li>
        </ul>
        <div className="social-icons">
            <div className='social'>
                  <img src={instagram_logo}/>
            </div>
            <div className='social'>
                  <img src={pinterest_logo}/>
            </div>
            <div className='social'>
                  <img src={whatsapp_logo}/>
            </div>
        </div>
        <div className="copyright">
            <hr />
            <p>copyright &copy; 2024 - All rights reserved</p>
        </div>
    </div>
  )
}
export default Footer;