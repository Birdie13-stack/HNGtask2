import React, { useEffect, useState } from "react";
import logo from "../assets/Logo.jpg";
import "./MovieDetails.css";
import home from "../assets/Home.jpg";
import movies from "../assets/Movie Projector.jpg";
import tv from "../assets/TV Show.jpg";
import calendar from "../assets/Calendar.jpg";
import logout from "../assets/Logout.jpg";
import { Link, useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);
  const [genres, setGenres] = useState({});
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b8439ce7f2ac5270724c09f4793240af`
    )
      .then((res) => res.json())
      .then((data) => setMovieDetails(data));
  }, [id]);

  if (!movieDetails) {
    return <div>Loading.....</div>;
  }

  let rating = undefined;
  if (movieDetails.adult) {
    rating = "PG-18";
  } else {
    rating = "PG-13";
  }

  return (
    <div className="movie">
      <div className="sidebar">
        <div className="logo">
          <img src={logo} alt="" className="logo-img" />

          <p className="logo-text">MovieBox</p>
        </div>

        <div className="links">
          <div className="link">
            <img src={home} alt="" />
            <Link to="/">Home</Link>
          </div>
          <div className="link-movie">
            <img src={movies} alt="" />
            <Link>Movies</Link>
          </div>
          <div className="link ">
            <img src={tv} alt="" />
            <Link>TV Series</Link>
          </div>
          <div className="link movie">
            <img src={calendar} alt="" />
            <Link>Upcoming</Link>
          </div>
        </div>

        <div className="aside">
          <p className="play">Play movie quizzes and earn free tickets</p>

          <p className="number">50k people are playing now</p>

          <Link className="play-button">Start playing</Link>
        </div>

        <div>
          <img src={logout} alt="" className="logout" />
          <Link className="logout-link">Logout</Link>
        </div>
      </div>

      <div className="movie-preview">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
          alt=""
          className="trailer-thumbnail"
        />

        <div className="main-info">
          <div className="title">
            <h1 className="movie-name" data-testid="movie-title">
              {movieDetails.title}
            </h1>
            <ul>
              <li data-testid="movie-release-date">
                {movieDetails.release_date}
              </li>
              <li>{rating}</li>
              <li data-testid="movie-runtime">
                {movieDetails.runtime} minutes
              </li>
            </ul>
          </div>

          <div className="genres">
            <div className="genre">Action</div>
            <div className="genre">History</div>
          </div>
          <p className="reviews">⭐️ 8.5|350k</p>
        </div>
        <p className="summary" data-testid="movie-overview">
          {movieDetails.overview}
        </p>

        <p className="credits">
          Director:
          <span className="name"> Joseph Kosinski</span>
        </p>
        <p className="credits">
          Writers:
          <span className="name"> Jim Cash, Jack Epps Jr, Peter Craig</span>
        </p>
        <p className="credits">
          Stars:
          <span className="name">
            {" "}
            Tom Cruise, Jennifer Connelly, Miles Teller
          </span>
        </p>

        <div className="awards">
          <aside>
            <p>Top rated movie #65</p>
          </aside>
          <p>Awards: 8 nominations</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
