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

    axios.post("http://localhost:5000/api/movies", newMovie);

    const movies = this.state.movies.concat(movie);
    this.setState({
      movies
    });
  };

  handleDelete = movie => {
    axios.delete(`http://localhost:5000/api/movies/${movie._id}`);

    const movies = this.state.movies.filter(
      thisMovie => thisMovie.title !== movie.title
    );

    this.setState({ movies });
  };

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  getUrl = posterPath => {
    return `https://image.tmdb.org/t/p/w370_and_h556_bestv2/${posterPath}`;
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
            {this.state.movies.reverse().map(movie => (
              <li key={movie.title}>
                <div className="movie">
                  <div className="movie-poster">
                    <img
                      src={this.getUrl(movie.posterPath)}
                      className="movie-image"
                    />
                  </div>
                  <div className="movie-info">
                    <h4>{movie.title}</h4>
                    <p className="movie-summary">Summary: {movie.overview}</p>
                  </div>
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

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(MovieList);
