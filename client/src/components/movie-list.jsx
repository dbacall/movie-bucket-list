import React, { Component } from "react";
import ImdbSearch from "./imdb-search";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import axios from "axios";
import "./styles/movie-list.css";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    const { user } = this.props.auth;
    axios
      .get(
        `https://movie-bucket-list.herokuapp.com/${process.env.PORT}/movies/${user.id}`
      )
      .then((response) => {
        this.setState({ movies: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  addMovie = (movie) => {
    const { user } = this.props.auth;
    const newMovie = {
      title: movie.title,
      overview: movie.overview,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
      userId: user.id,
    };

    axios.post("/movies", newMovie);

    this.setState({
      movies: this.state.movies.concat(movie),
    });
  };

  handleDelete = (movie) => {
    axios.delete(
      `https://movie-bucket-list.herokuapp.com/${process.env.PORT}/movies/${movie._id}`
    );

    this.setState({
      movies: this.state.movies.filter(
        (thisMovie) => thisMovie.title !== movie.title
      ),
    });
  };

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  getUrl = (poster_path) => {
    return `https://image.tmdb.org/t/p/w370_and_h556_bestv2/${poster_path}`;
  };

  render() {
    const { user } = this.props.auth;
    console.log(this.state.movies);
    return (
      <React.Fragment>
        <ImdbSearch onAdd={this.addMovie} />
        <h2>{user.name}'s Movie List</h2>
        <div className="movie-list">
          <ul>
            {this.state.movies.reverse().map((movie) => (
              <li key={movie.title}>
                <div className="movie">
                  <div className="movie-poster">
                    <img
                      src={this.getUrl(movie.poster_path)}
                      className="movie-image"
                    />
                  </div>
                  <div className="movie-info">
                    <h4>{movie.title}</h4>
                    <span className="score">
                      Score:{" "}
                      <i className="score-number">{movie.vote_average * 10}</i>
                    </span>
                    <p className="movie-summary">Summary: {movie.overview}</p>
                  </div>
                  <span className="release-date">
                    Release Date: {movie.release_date}
                  </span>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="delete-btn btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(MovieList);
