import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/movie-list";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <MovieList />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
