import Navbar from "@/components/globals/Navbar.js";
import NavbarDesktop from "../../components/globals/NavbarDesktop.js";

import { Poppins } from "next/font/google";

const dm = Poppins({ weight: ["400", "500", "700"], subsets: ["latin"] });
export default function Layout({ children }) {
  return (
    <main className={`grid grid-cols-8 ${dm.className}`}>
      <div className="col-span-8 block lg:hidden">
        <Navbar />
      </div>
      <div className="col-span-1 px-1 py-8 border rounded-tr-[3rem] rounded-br-[3rem] hidden lg:block">
        <NavbarDesktop />
      </div>
      <div className="col-span-8 lg:col-span-7 px-4 py-8">{children}</div>
    </main>
  );
}
