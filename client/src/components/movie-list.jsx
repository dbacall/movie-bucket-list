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

  render() {
    const { user } = this.props.auth;
    console.log(user === null);
    return (
      <React.Fragment>
        <ImdbSearch onAdd={this.addMovie} />
        <h2>{user.name}'s Movie List</h2>
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.title}>
              {movie.title}{" "}
              <button onClick={() => this.handleDelete(movie)}>Delete</button>
            </li>
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
