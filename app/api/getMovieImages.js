const BASE_URL = "https://api.themoviedb.org/3/movie/";
const getMovieImages = async (id) => {
  const fetchData = await fetch(
    `${BASE_URL}${id}/images?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const res = await fetchData.json();
  if (res.success === false) {
    throw new Error(res.status_message);
  }
  return res?.backdrops?.slice(0, 4);
};

module.exports = getMovieImages;
