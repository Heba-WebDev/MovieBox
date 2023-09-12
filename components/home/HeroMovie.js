import Link from "next/link";
import Image from "next/image";

export default function HeroMovie({ title, averageVote, overview }) {
  return (
    <div
      className="text-white container-custom py-[8rem]
       z-10 relative flex flex-col gap-[1rem] justify-center "
    >
      {title && <h1 className="text-[3rem] max-w-[32rem]">{title}</h1>}
      {averageVote && (
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <Image
              src="/images/globals/imdb.svg"
              width={35}
              height={10}
              alt="imdb rating"
            />
            <span>{averageVote} / 10</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/images/globals/rotten.svg"
              width={20}
              height={10}
              alt="imdb rating"
            />
            <span>{Math.floor((averageVote / 10) * 100)}% </span>
          </div>
        </div>
      )}
      {overview && <p className="text-[1rem] max-w-[28rem]">{overview}</p>}
      <Link
        href=""
        className="bg-red-600 w-[12rem] p-2 rounded flex items-center gap-2 justify-center"
      >
        <Image
          src="/images/home/play.svg"
          width={20}
          height={10}
          alt="play trailer"
        />
        Watch Trailer
      </Link>
    </div>
  );
}
