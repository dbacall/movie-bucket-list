import React, { Component } from "react";
import Search from "./search";
import fetchMovies from "../api/";

class ImdbSearch extends Component {
  state = { movies: [] };

  performSearch = e => {
    // console.log("here");
    // return fetchMovies(e).then(data =>
    //   // this.setState({ movies: data.response.results })
    //   console.log(data)
    // );
    fetch(
      "https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s=Avengers%20Endgame",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
          "x-rapidapi-key": "272280765fmsh9bd2afaa4147a4cp1ffd55jsn16bd93f953e3"
        }
      }
    )
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Search articles={this.state.movies} performSearch={this.performSearch} />
    );
  }
}

export default ImdbSearch;
