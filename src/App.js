import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/movie-list";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Movies</h1>
        <MovieList />
      </React.Fragment>
    );
  }
}

export default App;
