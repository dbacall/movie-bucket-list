import React, { Component } from "react";
import ImdbSearch from "./imdb-search";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import axios from "axios";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    const { user } = this.props.auth;
    axios
      .get(`http://localhost:5000/api/movies/${user.id}`)
      .then(response => {
        this.setState({ movies: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
    console.log("here");
  }

  addMovie = movie => {
    const { user } = this.props.auth;
    const newMovie = {
      title: movie.title,
      overview: movie.overview,
      posterPath: movie.poster_path,
      releaseDate: movie.release_date,
      voteAverage: movie.vote_average,
      userId: user.id
    };
    console.log(newMovie);

    axios
      .post("http://localhost:5000/api/movies", newMovie)
      .then(res => {
        console.log(res.data);
      })
      .then(
        axios
          .get(`http://localhost:5000/api/movies/${user.id}`)
          .then(response => {
            this.setState({ movies: response.data });
          })
          .catch(function(error) {
            console.log(error);
          })
      );
  };

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
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
        {console.log(this.state.movies, user)}
        <ImdbSearch onAdd={this.addMovie} />
        <h2>{user.name}'s Movie List</h2>
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
