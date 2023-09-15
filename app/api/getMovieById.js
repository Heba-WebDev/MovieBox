const BASE_URL = "https://api.themoviedb.org/3/movie/";
const getMovieById = async (id) => {
  const fetchData = await fetch(
    `${BASE_URL}${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const res = await fetchData.json();
  if (res.success === false) {
    throw new Error(res.status_message);
  }
  return res;
};

module.exports = getMovieById;
