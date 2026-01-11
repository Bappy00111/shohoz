import { Libre_Franklin } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/features/navbar/Navbar";
import Footer from "@/components/features/footer/Footer";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={libreFranklin.className}>
        <main className="">{children}</main>
      </body>
    </html>
  );
}
