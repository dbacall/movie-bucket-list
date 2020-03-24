import React from "react";

const SearchResults = ({ movies = [], onAdd }) => (
  <ul>
    {movies.map(movie => (
      <li key={movie.title}>
        {movie.title}{" "}
        <button
          onClick={() => {
            onAdd(movie);
          }}
        >
          Add
        </button>
      </li>
    ))}
  </ul>
);

export default SearchResults;
