import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  const today = new Date();
  return (
    <footer className="container-custom py-[4rem] grid justify-center gap-7">
      <div className="flex gap-12 justify-center">
        <Link href="/">
          <Image
            src="/images/globals/facebook.svg"
            alt="facebook"
            width={25}
            height={15}
          />
        </Link>
        <Link href="/">
          <Image
            src="/images/globals/instagram.svg"
            alt="instagram"
            width={25}
            height={15}
          />
        </Link>
        <Link href="/">
          <Image
            src="/images/globals/twitter.svg"
            alt="twitter"
            width={25}
            height={15}
          />
        </Link>
        <Link href="/">
          <Image
            src="/images/globals/youtube.svg"
            alt="youtube"
            width={25}
            height={15}
          />
        </Link>
      </div>
      <div className="flex flex-col m-auto md:m-0 gap-4 font-semibold text-sm justify-center md:flex-row text-center">
        <Link href="">Conditions of Use</Link>

        <Link href="">Privacy & Policy</Link>

        <Link href="">Press Room</Link>
      </div>
      <div className="flex flex-col justify-center gap-3">
        <Link
          href="https://www.themoviedb.org"
          target="_blank"
          className="text-sm text-gray-400 max-w-[22rem] md:max-w-[30rem] text-center"
        >
          This product uses the TMDb API but is not endorsed or certified by
          TMDb
        </Link>
        <span className="text-gray-400 text-sm text-center">
          Made with ❤️ by{" "}
          <Link
            href="https://github.com/Heba-WebDev"
            target="_blank"
            className="underline"
          >
            Heba
          </Link>{" "}
          &copy; {today.getFullYear()}{" "}
        </span>
      </div>
    </footer>
  );
}
