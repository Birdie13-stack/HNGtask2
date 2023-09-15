import React, { useEffect, useState } from "react";
import "./MovieSection.css";
import movie_poster from "../assets/movie-poster.jpg";
import imdb from "../assets/imdb-icon.jpg";
import tomato from "../assets/fruit-icon.jpg";
import { Link } from "react-router-dom";

function MovieCard() {
  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=b8439ce7f2ac5270724c09f4793240af"
    )
      .then((res) => res.json())
      .then((json) => {
        const limitedResults = json.results.slice(0, 10);
        setMovieList(limitedResults);
      });
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(movieList);
  return (
    <div className="movie-card-container">
      {movieList.map((movie) => (
        <div key={movie.id} className="movie-card">
          <Link to={`/movies/${movie.id}`} className="movie_id">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="Movie Poster"
              data-testid="movie-poster"
              className="movie_poster"
            />
            <p className="prod" data-testid="movie-release-date">
              USA, 2017
            </p>
            <h2 className="movie-title" data-testid="movie-title">
              {movie.title}
            </h2>
            <div className="movie-rating">
              <p>
                <img src={imdb} alt="" /> {movie.vote_average}/10
              </p>
              <p>
                <img src={tomato} alt="" /> {movie.vote_average}%
              </p>
            </div>
            <p className="genres">Action, Drama, History</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MovieCard;
