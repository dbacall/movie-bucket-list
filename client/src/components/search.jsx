import React, { Component } from "react";
import SearchResults from "./search-results";
import "./styles/search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      placeholder: "Search for a movie..."
    };
  }

  handleChange = e => {
    let value = e.target.value;
    this.setState({ value });
    this.props.performSearch(value);
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  handleAdd = movie => {
    this.props.onAdd(movie);
    this.setState({
      value: "",
      placeholder: "Search for a movie..."
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder={this.state.placeholder}
            value={this.state.value}
            onChange={this.handleChange}
            onClick={() => {
              this.setState({ placeholder: "" });
            }}
            id="search-bar"
          />
        </form>
        <div className="search-results">
          <SearchResults movies={this.props.movies} onAdd={this.handleAdd} />
        </div>
      </div>
    );
  }
}

export default Search;
