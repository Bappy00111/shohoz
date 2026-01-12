import { Libre_Franklin,Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/features/navbar/Navbar";
import Footer from "@/components/features/footer/Footer";

// const libreFranklin = Libre_Franklin({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800", "900"],
// });

const montserrat = Montserrat({
  // variable: "--font-geist-sans",
  weight: ['400', '500', '600', '700'], // ✅ bold added
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main className="">{children}</main>
      </body>
    </html>
  );
}
