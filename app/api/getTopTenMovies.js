const BASE_URL =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=";
const fetchTopTenMovies = async () => {
  const fetchData = await fetch(
    `${BASE_URL}${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const res = await fetchData.json();
  return res?.results?.slice(0, 10); // Use slice() instead of split() to get the first 10 results.
};

module.exports = fetchTopTenMovies;
