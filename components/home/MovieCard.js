"use client";
import Image from "next/image";
import { useState } from "react";
export default function MovieCard({ id, title, date, votes, poster }) {
  const IMG_BASE_URL = process.env.NEXT_PUBLIC_BASE_IMG_URL;
  const [fav, setFav] = useState(false);
  const handleFav = () => setFav(!fav);
  return (
    <aside
      className="grid grid-col-12 gap-1 max-w-[280px] md:max-w-[243px] pb-6"
      data-testid="movie-card"
    >
      <div className="relative">
        <Image
          src={`https://image.tmdb.org/t/p/w780${poster}`}
          width={280}
          height={100}
          alt={title}
          className=""
          data-testid="movie-poster"
        />
        <button onClick={() => setFav(!fav)}>
          <Image
            src={`/images/globals/fav-empty.svg`}
            width={30}
            height={50}
            alt={`save ${title} as favorite`}
            className="absolute right-1 top-1"
            data-testid="movie-poster"
          />
        </button>
        <button
          className={`absolute right-[9.1px] top-2 ${fav ? "block" : "hidden"}`}
          onClick={() => setFav(!fav)}
        >
          ❤️
        </button>
      </div>
      <span className="text-sm text-gray-400" data-testid="movie-release-date">
        Release Date: {date}
      </span>
      <h2 className="font-bold text-lg min-h-[4rem]" data-testid="movie-title">
        {title}
      </h2>
      <div className="flex gap-6 text-sm justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/images/globals/imdb.svg"
            width={32}
            height={10}
            alt="imdb rating"
          />
          <span>{votes} / 10</span>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/images/globals/rotten.svg"
            width={18}
            height={10}
            alt="imdb rating"
          />
          <span>{Math.floor((votes / 10) * 100)}% </span>
        </div>
      </div>
      <p></p>
    </aside>
  );
}
