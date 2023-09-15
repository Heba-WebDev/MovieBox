"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function MovieCard({ id, title, date, votes, poster }) {
  const IMG_BASE_URL = process.env.NEXT_PUBLIC_BASE_IMG_URL;
  const [fav, setFav] = useState(false);
  return (
    <section
      className="grid grid-col-12 gap-1 max-w-[320px] md:max-w-[243px] pb-6 justify-self-center md:justify-self-auto"
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
          style={{
            width: "auto",
            height: "auto",
          }}
        />
        <button onClick={() => setFav(!fav)}>
          <Image
            src={`/images/globals/fav-empty.svg`}
            width={30}
            height={50}
            alt={`save ${title} as favorite`}
            className="absolute right-1 top-1"
            style={{ width: 30, height: 50 }}
          />
        </button>
        <button
          className={`absolute right-[9.1px] top-[19.5px] ${
            fav ? "block" : "hidden"
          }`}
          onClick={() => setFav(!fav)}
        >
          ❤️
        </button>
      </div>
      <span className="text-sm text-gray-400" data-testid="movie-release-date">
        Release Date: {date}
      </span>
      <Link
        href={`/movies/${id}`}
        className="font-bold text-lg min-h-[4rem] hover:text-red-600"
        data-testid="movie-title"
      >
        {title}
      </Link>
      <div className="flex gap-6 text-sm justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/images/globals/imdb.svg"
            width={32}
            height={10}
            alt="imdb rating"
            style={{ width: 32, height: 20 }}
          />
          <span>{votes} / 10</span>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/images/globals/rotten.svg"
            width={18}
            height={10}
            alt="rotten tomotto rating"
            style={{ width: 18, height: 20 }}
          />
          <span>{Math.floor((votes / 10) * 100)}% </span>
        </div>
      </div>
      <p></p>
    </section>
  );
}
