import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="container-custom flex justify-between items-center text-black z-10 relative py-[2rem]">
      <Link href="/">
        <Image
          src="/images/globals/Logo-2.svg"
          alt="logo"
          width={135}
          height={35}
          style={{ width: 135, height: 35 }}
        />
      </Link>
      <div className="flex items-center gap-6">
        <Image
          src="/images/globals/magnifying-glass-dark.svg"
          alt="search for movies"
          width={15}
          height={10}
          className="block md:hidden"
          style={{ width: 18, height: 18 }}
        />
        <button>Sign in</button>
        <Image
          src="/images/home/hamburger.svg"
          alt="open menu"
          width={50}
          height={35}
          style={{ width: 45, height: 30 }}
        />
      </div>
    </nav>
  );
}
