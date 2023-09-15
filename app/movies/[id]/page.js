"use client";

import MovieDetails from "@/components/movies/MovieDetails.js";

export default function Page({ params }) {
  const movie = params.id;

  return (
    <section className="">
      <MovieDetails movie={movie} />
    </section>
  );
}
