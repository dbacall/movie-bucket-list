import React, { Component } from "react";
import SearchResults from "./search-results";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = e => {
    let value = e.target.value;
    this.setState({ value });
    console.log(this.state.value);
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
        <div>
          <SearchResults movies={this.props.movies} />
        </div>
      </div>
    );
  }
}

export default Search;
