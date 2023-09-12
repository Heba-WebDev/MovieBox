"use client";
import { useState, useEffect } from "react";
import fetchTopTenMovies from "@/app/api/getTopTenMovies";
import MovieCard from "./MovieCard";
import Link from "next/link";

export default function TopMovies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchTopTenMovies()
      .then((data) => setMovies(data))
      .catch((err) => console.error(err));
  });
  return (
    <main className="container-custom py-[4.5rem]">
      <div className="flex justify-between pb-10">
        <h2 className="font-bold text-3xl">Featured Movies</h2>
        <Link href="" className="text-red-500 flex items-center gap-2">
          <span>See more </span>&gt;
        </Link>
      </div>
      <div className="cards">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            date={movie.release_date}
            votes={movie.vote_average}
          />
        ))}
      </div>
    </main>
  );
}
