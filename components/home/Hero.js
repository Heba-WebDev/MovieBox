"use client";
import HeroNav from "./HeroNav";
import { useEffect, useState } from "react";
import HeroMovie from "./HeroMovie";

export default function Hero() {
  const [heroMovie, setHeroMovie] = useState({
    title: "",
    overview: "",
    averageVote: "",
  });
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const imageBaseUrl = process.env.NEXT_PUBLIC_BASE_IMG_URL;
  const [poster, setPoster] = useState("");

  const fetchMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=e00d19ac91253e96984de28cdf1c4370"
    )
      .then((data) => data.json())
      .then((res) => {
        console.log(res.results);
        const posterUrl = `${imageBaseUrl}/original/${res.results[13].poster_path}`;
        setPoster(posterUrl);
        setHeroMovie({
          title: res.results[13].title,
          overview: res.results[13].overview,
          averageVote: res.results[13].vote_average,
        });
      });
  };

  useEffect(() => {
    fetchMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header
      style={{
        "--image-url": `url(${poster})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="bg-blue-400 py-10 bg-[image:var(--image-url)] drop-shadow-2xl relative"
    >
      <HeroNav />
      <HeroMovie
        title={heroMovie.title}
        overview={heroMovie.overview}
        averageVote={heroMovie.averageVote}
      />
      <div className="w-[100%] h-[100%] absolute bg-gray-900 top-0 opacity-[0.7] z-0"></div>
    </header>
  );
}
