import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../Components/Header";
import MovieSection from "../Components/MovieSection";
import Footer from "../Components/Footer";
import Movies from "../Components/Movies";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/"></Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
