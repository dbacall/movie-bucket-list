import React, { Component } from "react";

const SearchResults = ({ movies = [] }) => (
  <ul>
    {movies.map(({ name }) => (
      <li key={name}>{name}</li>
    ))}
  </ul>
);

export default SearchResults;
