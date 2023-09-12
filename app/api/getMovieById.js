const BASE_URL = "https://api.themoviedb.org/3/movie/";
const fetchMovieById = async (id) => {
  const fetchData = await fetch(
    `${BASE_URL}${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const res = await fetchData.json();
  return res;
};

module.exports = fetchMovieById;
