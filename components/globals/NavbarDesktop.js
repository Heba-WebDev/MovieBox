import Image from "next/image";
import Link from "next/link";
export default function NavbarDesktop() {
  return (
    <nav className="container-custom flex flex-col justify-between items-center text-black z-10 relative py-[2rem]">
      <Link href="/">
        <Image
          src="/images/globals/Logo-2.svg"
          alt="logo"
          width={130}
          height={35}
          style={{ width: 130, height: 35 }}
        />
      </Link>
      <div className="flex flex-col gap-[4rem] py-[3rem] ">
        <Link
          href="/"
          className="flex items-center gap-[8px] hover:text-red-600"
        >
          <Image
            src="/images/globals/home.svg"
            alt="home"
            width={5}
            height={25}
            className="opacity-75"
            style={{ width: 22, height: 35 }}
          />{" "}
          <span className="mt-1">Home</span>
        </Link>
        <Link
          href="/"
          className="flex items-center gap-[8px] hover:text-red-600"
        >
          <Image
            src="/images/globals/movies.svg"
            alt="movies"
            width={8}
            height={25}
            className="opacity-75"
            style={{ width: 25, height: 35 }}
          />{" "}
          <span>Movies</span>
        </Link>
        <Link
          href="/"
          className="flex items-center gap-[5px] hover:text-red-600"
        >
          <Image
            src="/images/globals/upcoming.svg"
            alt="upcoming"
            width={8}
            height={35}
            className="opacity-75"
            style={{ width: 18, height: 35 }}
          />{" "}
          Upcoming
        </Link>
        <Link
          href="/"
          className="flex items-center gap-[8px] hover:text-red-600"
        >
          <Image
            src="/images/globals/signin-icon.svg"
            alt="signin"
            width={26}
            height={15}
            className="opacity-75"
            style={{ width: 20, height: 35 }}
          />
          <span>Sign in</span>
        </Link>
      </div>
      <div className="border border-red-400 px-[6px] pt-6 pb-4 bg-red-50 rounded-2xl text-sm grid gap-2">
        <h2 className="font-semibold text-[0.86rem]">
          Play movie quizzes and earn free tickets
        </h2>
        <span className="text-gray-500 text-[0.75rem]">
          50k people are playing now
        </span>
        <Link
          href="/"
          className="bg-red-200 text-red-600 p-1 rounded-full text-center"
        >
          Start Playing
        </Link>
      </div>
    </nav>
  );
}
