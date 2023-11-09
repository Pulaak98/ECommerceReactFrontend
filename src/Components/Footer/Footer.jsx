import React from "react";
import "./Footer.css";
import footerLogo from "../Assets/logo_big.png";
import instagramLogo from "../Assets/instagram_icon.png";
import facebookLogo from "../Assets/pintester_icon.png";
import whatsapp from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img
          src={footerLogo}
          alt=""
        />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>offices</li>
        <li>about</li>
        <li>contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <img
            src={instagramLogo}
            alt=""
          />
        </div>
        <div className="footer-icon-container">
          <img
            src={facebookLogo}
            alt=""
          />
        </div>
        <div className="footer-icon-container">
          <img
            src={whatsapp}
            alt=""
          />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>copyright @ 2023 - All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
