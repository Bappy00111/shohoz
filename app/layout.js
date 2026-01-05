import { Libre_Franklin } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/features/navbar/Navbar";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={libreFranklin.className}>
        <Navbar />
        <main className="pt-[70px]">{children}</main>
      </body>
    </html>
  );
}
