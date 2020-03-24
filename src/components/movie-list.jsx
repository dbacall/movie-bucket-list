import React, { Component } from "react";
import ImdbSearch from "./imdb-search";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  addMovie = movie => {
    const movies = this.state.movies.concat(movie);
    this.setState({ movies });
  };

  render() {
    return (
      <React.Fragment>
        <ImdbSearch onAdd={this.addMovie} />
        <h2>Movie List</h2>
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.title}>{movie.title}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default MovieList;
