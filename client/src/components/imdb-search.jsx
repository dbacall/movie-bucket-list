import React, { Component } from "react";
import Search from "./search";
import $ from "jquery";
class ImdbSearch extends Component {
  state = { movies: [] };

  performSearch = event => {
    $.ajax({
      url: `https://api.themoviedb.org/3/search/movie?api_key=05315aa6a94fb9d6ca8936af306c120f&query=${event}&page=1&include_adult=false`,
      success: data => {
        const newData = data.results.filter(movie => movie.title !== "Ca$h");
        this.setState({
          movies: newData.slice(0, 9)
        });
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
        this.setState({ movies: [] });
      }
    });
  };

  render() {
    return (
      <Search
        movies={this.state.movies}
        performSearch={this.performSearch}
        onAdd={this.props.onAdd}
      />
    );
  }
}

export default ImdbSearch;
