"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const ROW_1 = [
  { name: "Shohagh", logo: "https://s3-ap-south-1.amazonaws.com/shohoz-bus/prod/operator-logos/shohagh.webp?v=1.0.3" },
  { name: "Royal Coach", logo: "https://s3-ap-south-1.amazonaws.com/shohoz-bus/prod/operator-logos/royalcoach.webp?v=1.0.3" },
  { name: "Evergreen", logo: "https://s3-ap-south-1.amazonaws.com/shohoz-bus/prod/operator-logos/evergreen.webp?v=1.0.3" },
  { name: "Emad", logo: "https://s3-ap-south-1.amazonaws.com/shohoz-bus/prod/operator-logos/emad.webp?v=1.0.3" },
  { name: "Pabna Express", logo: "https://s3-ap-south-1.amazonaws.com/shohoz-bus/prod/operator-logos/pabna-express.webp?v=1.0.3" },
  { name: "Arafat Paribahan", logo: "https://s3-ap-south-1.amazonaws.com/shohoz-bus/prod/operator-logos/arafat-paribahan.webp?v=1.0.3" },
  { name: "Akota", logo: "https://s3-ap-south-1.amazonaws.com/shohoz-bus/prod/operator-logos/akota.webp?v=1.0.3" },
  { name: "Shyamoli", logo: "https://s3-ap-south-1.amazonaws.com/shohoz-bus/prod/operator-logos/shyamoli.webp?v=1.0.3" },
  { name: "Nabil", logo: "https://s3-ap-south-1.amazonaws.com/shohoz-bus/prod/operator-logos/nabil.webp?v=1.0.3" },
  { name: "SR", logo: "https://s3-ap-south-1.amazonaws.com/shohoz-bus/prod/operator-logos/sr.webp?v=1.0.3" },
];

const ROW_2 = [
  { name: "Hanif", logo: "https://s3-ap-south-1.amazonaws.com/shohoz-bus/prod/operator-logos/hanif.webp?v=1.0.3" },
  { name: "Soudia", logo: "https://s3-ap-south-1.amazonaws.com/shohoz-bus/prod/operator-logos/soudianac.webp?v=1.0.3" },
  { name: "Robi Express", logo: "https://s3-ap-south-1.amazonaws.com/shohoz-bus/prod/operator-logos/robi-express.webp?v=1.0.3" },
  { name: "Green Line", logo: "https://s3-ap-south-1.amazonaws.com/shohoz-bus/prod/operator-logos/greenline.webp?v=1.0.3" },
  { name: "Royal Express", logo: "https://s3-ap-south-1.amazonaws.com/shohoz-bus/prod/operator-logos/royal-express.webp?v=1.0.3" },
  { name: "Orin Travels", logo: "https://s3-ap-south-1.amazonaws.com/shohoz-bus/prod/operator-logos/orintravels.webp?v=1.0.3" },
  { name: "Tungipara", logo: "https://s3-ap-south-1.amazonaws.com/shohoz-bus/prod/operator-logos/tungipara.webp?v=1.0.3" },
  { name: "Alhamra", logo: "https://s3-ap-south-1.amazonaws.com/shohoz-bus/prod/operator-logos/alhamra.webp?v=1.0.3" },
  { name: "Bilash", logo: "https://s3-ap-south-1.amazonaws.com/shohoz-bus/prod/operator-logos/bilash-paribahan.webp?v=1.0.3" },
  { name: "Manik Express", logo: "https://s3-ap-south-1.amazonaws.com/shohoz-bus/prod/operator-logos/manik.webp?v=1.0.3" },
];

function OperatorCard({ name, logo }) {
  return (
    <div className="relative flex items-center justify-center h-32 md:h-[200px] w-[201px] bg-[#f1f3f8] px-2 md:px-4 shadow-sm rounded-lg transition-transform duration-300 hover:scale-[1.02]">
      <div className="relative w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16">
        <Image src={logo} alt={name} fill className="object-contain" />
      </div>

      <span className="text-gray-400 text-xs md:text-sm absolute bottom-2 md:bottom-4 left-2 md:left-8">
        {name}
      </span>
    </div>
  );
}

export default function TrustedOperatorsSection() {
  return (
    <section className="bg-white py-12 md:py-16 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-2.5 flex flex-col md:flex-row justify-between md:items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-0">
          More Than <span className="text-green-600">100+</span> Trusted Bus Operators
        </h2>

        <button
          type="button"
          className="w-52 md:w-60 h-10 md:h-12 text-sm md:text-base bg-transparent border border-green-600 text-green-600 px-4 py-2 rounded-lg hover:border-green-800 hover:text-green-800 transition-all duration-300 inline-flex items-center justify-center gap-2"
        >
          Book Your Ticket Now
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path
              d="M13 6L19 12L13 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Row 1 */}
      <div className="marquee-mask">
        <Marquee speed={35} gradient={false} pauseOnHover>
          <div className="flex items-center gap-5 pr-5">
            {ROW_1.map((it) => (
              <OperatorCard key={it.name} name={it.name} logo={it.logo} />
            ))}
          </div>
        </Marquee>
      </div>

      {/* Row 2 */}
      <div className="mt-4 marquee-mask">
        <Marquee speed={35} gradient={false} pauseOnHover direction="right">
          <div className="flex items-center gap-5 pr-5">
            {ROW_2.map((it) => (
              <OperatorCard key={it.name} name={it.name} logo={it.logo} />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
