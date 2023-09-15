"use client";
import { useState, useEffect } from "react";
import fetchMovies from "../api/getMovies";
import MovieCard from "@/components/home/MovieCard";
import MoviesLoadingSkeleton from "@/components/home/MoviesLoadingSkeleton";
import Link from "next/link";

export default function Movies() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovies()
      .then((data) => {
        setIsLoading(false);
        setMovies(data);
      })
      .catch((err) => {
        setIsLoading(true);
        console.error(err);
      });
  }, []);
  return (
    <>
      {isLoading && <MoviesLoadingSkeleton />}
      {!isLoading && movies && (
        <main>
          {" "}
          {/* className="container-custom py-[4.5rem]" */}
          <div className="flex justify-between pb-10 pt-9">
            <h2 className="font-bold text-3xl">Featured Movies</h2>
            <Link href="/" className="text-red-500 flex items-center gap-2">
              <span>Homepage </span>&gt;
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
      )}
    </>
  );
}
