import React, { Component } from "react";
import ImdbSearch from "./imdb-search";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

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
    const { user } = this.props.auth;

    return (
      <React.Fragment>
        <button
          style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "1rem"
          }}
          onClick={this.onLogoutClick}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
          Logout
        </button>
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

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(MovieList);
