import Image from "next/image";
import Link from "next/link";
export default function HeroNav() {
  return (
    <nav className="container-custom flex justify-between items-center text-white z-10 relative">
      <Link href="/">
        <Image
          src="/images/globals/Logo.svg"
          alt="logo"
          width={135}
          height={35}
        />
      </Link>
      <form className="hidden md:block">
        <div className="relative">
          <label htmlFor="movie"></label>
          <input
            type="text"
            id="movie"
            name="movie"
            placeholder="What do you want to watch?"
            className="px-3 w-[25rem] bg-transparent border p-1 border-white rounded
             placeholder:text-white placeholder:text-sm placeholder:opacity-[0.55] focus:outline-0"
          />
          <Image
            src="/images/globals/magnifying-glass.svg"
            alt="search"
            width={15}
            height={30}
            className="absolute top-[33%] right-3 opacity-[0.7]"
          />
        </div>
      </form>

      <div className="flex items-center gap-6">
        <Image
          src="/images/globals/magnifying-glass.svg"
          alt="search for movies"
          width={15}
          height={10}
          className="block md:hidden"
        />
        <button>Sign in</button>
        <Image
          src="/images/home/hamburger.svg"
          alt="open menu"
          width={34}
          height={35}
        />
      </div>
    </nav>
  );
}
