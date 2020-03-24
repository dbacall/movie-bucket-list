import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/movie-list";
import Navbar from "./components/navbar";
import Register from "./components/register";
import Login from "./components/login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={MovieList} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
