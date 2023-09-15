import React from "react";
import MovieCard from "./MovieCard.js";
import "./MovieSection.css";
import { Link } from "react-router-dom";

function MovieSection() {
  return (
    <div className="movie-section">
      <div className="container">
        <h2 className="feature">Featured Movie</h2>

        <Link className="more">See More &gt;</Link>
      </div>
      <div className="cards">
        <MovieCard />
      </div>
    </div>
  );
}

export default MovieSection;
