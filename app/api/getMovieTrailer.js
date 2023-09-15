const BASE_URL = "https://api.themoviedb.org/3/movie/";
const getMovieTrailer = async (id) => {
  const fetchData = await fetch(
    `${BASE_URL}${id}/videos?language=en-US&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const res = await fetchData.json();
  const trailer = res?.results?.filter((x) => x.type === "Trailer");
  if (trailer.length === 0) {
    return res?.results?.filter((x) => x.type === "Clip")[0];
  }
  return trailer[0];
};

module.exports = getMovieTrailer;
