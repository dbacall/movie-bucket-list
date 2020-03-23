import React from "react";

const SearchResults = ({ movies = [] }) => (
  // console.log(this.props.movies)
  <ul>
    {console.log("here", movies)}
    {movies.map(({ title }) => (
      <li key={title}>{title}</li>
    ))}
  </ul>
);

export default SearchResults;
