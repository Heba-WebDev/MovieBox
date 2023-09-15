"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import getMovieTrailer from "@/app/api/getMovieTrailer";
import getMovieById from "@/app/api/getMovieById";
import Genre from "./Genre";
import Error from "../globals/Error";

export default function MovieDetails({ movie }) {
  const optsBigScreens = {
    height: "360",
    width: "850",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const optsMidScreens = {
    height: "360",
    width: "650",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const optsSmallScreens = {
    height: "280",
    width: "250",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const [trailer, setTrailer] = useState("");
  const [selectedMovie, setSelectedMovie] = useState([]);
  useEffect(() => {
    getMovieTrailer(movie)
      .then((data) => setTrailer(data))
      .catch((error) => console.error(error));
    getMovieById(movie)
      .then((data) => setSelectedMovie(data))
      .catch((error) => {
        setSelectedMovie({ error: error.message });
        console.error(error);
      });
  }, [movie]);
  if (selectedMovie && selectedMovie.error) {
    return <Error />; // Render the error message
  }
  if (selectedMovie && trailer) {
    return (
      <aside className="grid gap-5 ">
        <section className="bg-black flex  items-center justify-center">
          {/* <YouTube
            videoId={trailer?.key}
            opts={optsBigScreens}
            className="hidden lg:block"
          />
          <YouTube
            videoId={trailer?.key}
            opts={optsMidScreens}
            className="hidden md:block lg:hidden"
          />
          <YouTube
            videoId={trailer?.key}
            opts={optsSmallScreens}
            className="block md:hidden"
          /> */}
          <iframe
            src={`https://www.youtube.com/embed/${trailer?.key}`}
            id={`${trailer?.key}`}
            width={300}
            height={300}
          ></iframe>
        </section>
        <section className="flex items-center justify-between flex-col md:flex-row">
          <div className="flex flex-col md:flex-row w-full justify-between md:justify-normal font-[500] gap-2 md:gap-4 flex-wrap">
            <h2 data-testid="movie-title">{selectedMovie?.title}</h2>

            <span data-testid="movie-release-date">
              {new Date(selectedMovie?.release_date).toUTCString()}
            </span>

            <span className="" data-testid="movie-runtime">
              {selectedMovie?.runtime} minutes
            </span>
          </div>
          <div className=" flex flex-col flex-wrap md:flex-row items-center md:justify-end gap-1 w-[100%] pt-3 md:pt-0">
            <div className="flex gap-2 w-full md:w-auto">
              <div className="flex items-center gap-1">
                {selectedMovie?.genres?.map((genre) => {
                  const { id, name } = genre;
                  return (
                    <div key={id} className="flex gap-1">
                      <Genre name={name} />
                    </div>
                  );
                })}
              </div>
              <Image
                src="/images/movies/Star.svg"
                width={23}
                height={10}
                alt="average votes"
                style={{ width: 23, height: 20 }}
              />
              <span className="text-lg">
                {selectedMovie?.vote_average?.toFixed(1)}
              </span>
            </div>
          </div>
        </section>
        <section className="">
          <div className="grid gap-4 text-lg ">
            <p
              className="w-full md:max-w-[60%] text-[1.1rem] text-gray-600"
              data-testid="movie-overview"
            >
              {selectedMovie?.overview}
            </p>
            <div className="border border-x-0 border-b-0 py-4 flex items-center gap-4">
              <h3 className="text-xl font-semibold">Movie Gallary</h3>
              <span className="text-[0.75rem] bg-red-600 text-white px-3 py-[0px] rounded-full">
                Coming Soon
              </span>
            </div>
          </div>
        </section>
      </aside>
    );
  }
}
