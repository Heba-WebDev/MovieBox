import "./globals.css";
import Footer from "@/components/globals/Footer";
import { DM_Sans } from "next/font/google";

const dm = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "MovieBox",
  description: "Never miss a movie again",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
