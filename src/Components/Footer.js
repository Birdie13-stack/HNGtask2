import React from "react";
import "./Footer.css";
import facebook from "../assets/facebook.jpg";
import instagram from "../assets/instagram.jpg";
import twitter from "../assets/twitter.jpg";
import youtube from "../assets/youtube.jpg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="socials">
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />
        <img src={youtube} alt="" />
      </div>
      <div className="legal">
        <Link href="#">Conditions of Use</Link>
        <Link href="#">Privacy Policy</Link>
        <Link href="#">Press Room</Link>
      </div>

      <p className="copyright">&copy; 2021 MovieBox by Adriana Eka Prayudha</p>
    </div>
  );
}

export default Footer;
