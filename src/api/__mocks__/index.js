const range = n => [...Array(n).keys()];

const fetchMovies = () => {
  return Promise.resolve({
    response: {
      results: range(10).map(i => ({
        name: `Movie ${i}`
      }))
    }
  });
};

export default fetchMovies;
