import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import MovieDetails from "./Pages/MovieDetails";
import Layout from "./Components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
