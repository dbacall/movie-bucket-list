import React, { Component } from "react";
import ImdbSearch from "./imdb-search";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [{ name: "Harry Potter" }, { name: "Shrek" }]
    };
  }
  render() {
    return (
      <React.Fragment>
        <ImdbSearch />
        <h2>Movie List</h2>
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.name}>{movie.name}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default MovieList;
