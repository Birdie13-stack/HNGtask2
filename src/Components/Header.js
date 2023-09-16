import React from "react";
import "./Header.css";
import main_img from "../assets/main-img.jpg";
import logo from "../assets/Logo.jpg";
// import search from "../assets/Search.jpg";
import imdb from "../assets/imdb-icon.jpg";
import tomato from "../assets/fruit-icon.jpg";
import { AiFillPlayCircle } from "react-icons/ai";

function Header() {
  return (
    <div className="header">
      <div className="header-text">
        <nav>
          <img src={logo} alt="" />

          <input
            type="text"
            id="search-input"
            placeholder="What do you want to watch?"
          />
        </nav>
        <h1>John Wick 3: Parabellum</h1>
        <div className="rating">
          <p>
            <img src={imdb} alt="" /> 86.0/100
          </p>
          <p>
            <img src={tomato} alt="" /> 97%
          </p>
        </div>

        <p className="movie-desc">
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </p>

        <button className="watch-trailer">
          <AiFillPlayCircle />
          Watch Trailer
        </button>
      </div>
    </div>
  );
}

export default Header;
