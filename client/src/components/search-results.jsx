import React from "react";
import "./styles/search-results.css";

const SearchResults = ({ movies = [], onAdd, resetSearch }) => (
  <ul>
    {movies.map(movie => (
      <div className="search-result">
        <li key={movie.title}>
          {movie.title}{" "}
          <button
            onClick={() => {
              onAdd(movie);
            }}
            className="add-btn btn btn-sm btn-success"
          >
            Add
          </button>
        </li>
      </div>
    ))}
  </ul>
);

export default SearchResults;
