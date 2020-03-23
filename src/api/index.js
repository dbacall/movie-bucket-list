// import { API_KEY } from "../../config";
import unirest from "unirest";

const fetchMovies = event => {
  return fetch(
    `https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s=${event}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
        "x-rapidapi-key": "272280765fmsh9bd2afaa4147a4cp1ffd55jsn16bd93f953e3"
      }
    }
  );
};

export default fetchMovies;
