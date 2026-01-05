"use client";

import Image from "next/image";
import { MapPin, CalendarDays,Navigation  } from "lucide-react";
import park from '../../../public/img//park//park.webp'

/* Reusable field shell */
function SearchField({ label, placeholder, icon }) {
  return (
    <div className="flex flex-col justify-center gap-1 rounded-xl border border-gray-200 bg-white/90 px-4 py-3 backdrop-blur">
      <p className="text-[11px] font-semibold uppercase text-orange-500">
        {label}
      </p>
      <div className="flex items-center gap-2">
        <span className="text-emerald-600">{icon}</span>
        <input
          placeholder={placeholder}
          className="w-full bg-transparent text-sm font-medium text-gray-700 placeholder:text-gray-400 outline-none"
        />
      </div>
    </div>
  );
}

export default function ParkHero() {
  /* Floating filter card */
  const HeroCard = (
    <div className="mx-auto w-full max-w-[560px] md:max-w-[680px] lg:max-w-[860px] xl:max-w-6xl rounded-[28px] bg-white/95 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.12)] ring-1 ring-black/5 backdrop-blur">

      {/* ✅ Filter UI only */}
      <div className="grid grid-cols-1 gap-3 px-2 pb-2 md:grid-cols-2 xl:grid-cols-[1.5fr_1.5fr_auto] xl:items-center">

        {/* Location */}
         <SearchField
              label="Locations"
              placeholder="Search Locations"
              icon={<Navigation className="h-5 w-5" />}
            />

        {/* From Date */}
             <SearchField
              label="Parks"
              placeholder="Search Parks"
              icon={<MapPin className="h-5 w-5" />}
            />

        {/* Coming Soon Button */}
          <button
            type="button"
            className="
               h-14 xl:h-full w-full md:w-[180px]
              rounded-xl
              bg-emerald-600
              text-sm font-extrabold tracking-wide
              text-white
              transition hover:bg-emerald-700
            "
          >
            SEARCH
          </button>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {/* ✅ MOBILE / MD / LG */}
      <section className="xl:hidden">
        {/* Hero image strip */}
        <div className="relative w-full overflow-hidden h-[90px] sm:h-[120px] md:h-[150px] lg:h-[180px]">
          <Image
            src='https://www.shohoz.com/park-tickets/static/media/Shohoz-Park-Banner-1350x291.95348d19a6636581ac27.webp'
            alt="Hero background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
        </div>

        {/* Floating card */}
        <div className="mx-auto max-w-7xl px-3 sm:px-4 -mt-8 sm:-mt-10 md:-mt-12 pb-8">
          {HeroCard}
        </div>
      </section>

      {/* ✅ XL+ DESKTOP */}
      <section className="relative hidden xl:block isolate overflow-hidden min-h-[400px]">
        <div className="absolute inset-0">
          <Image
            src='https://www.shohoz.com/park-tickets/static/media/Shohoz-Park-Banner-1350x291.95348d19a6636581ac27.webp'
            alt="Hero background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {/* ✅ Black opacity overlay (XL only) */}
          {/* <div className="absolute inset-0 bg-black/40" /> */}
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pt-48 pb-10">
          {HeroCard}
        </div>
      </section>
    </div>
  );
}



// "use client";

// import Image from "next/image";
// import { MapPin, Navigation } from "lucide-react";
// import park from "../../../public/img/park/park.webp";

// /* Reusable Input Field */
// function SearchField({ label, placeholder, icon }) {
//   return (
//     <div className="flex flex-col justify-center gap-1 rounded-xl border border-gray-200 bg-white/90 px-4 py-3 backdrop-blur">
//       <p className="text-[11px] font-semibold uppercase text-orange-500">
//         {label}
//       </p>
//       <div className="flex items-center gap-2">
//         <span className="text-emerald-600">{icon}</span>
//         <input
//           placeholder={placeholder}
//           className="w-full bg-transparent text-sm font-medium text-gray-700 placeholder:text-gray-400 outline-none"
//         />
//       </div>
//     </div>
//   );
// }

// export default function ParkHero() {
//   return (
//     <section className="relative w-full overflow-hidden">
//       {/* Background Image */}
//       <div className="relative h-[220px] sm:h-[260px] md:h-[320px] xl:h-[420px]">
//         <Image
//           src={park}
//           alt="Park Hero"
//           fill
//           priority
//           sizes="100vw"
//           className="object-cover"
//         />

//         {/* subtle dark overlay */}
//         <div className="absolute inset-0 bg-black/20" />
//       </div>

//       {/* Floating Search Bar */}
//       <div
//         className="
//           absolute left-1/2 top-[65%] sm:top-[70%] xl:top-[75%]
//           -translate-x-1/2
//           z-20
//           w-[92%] max-w-6xl
//         "
//       >
//         <div
//           className="
//             flex flex-col gap-3
//             rounded-2xl bg-white/80
//             p-4 shadow-[0_20px_50px_rgba(0,0,0,0.25)]
//             backdrop-blur-md
//             md:flex-row md:items-center
//           "
//         >
//           {/* Search Locations */}
//           <div className="flex-1">
//             <SearchField
//               label="Locations"
//               placeholder="Search Locations"
//               icon={<Navigation className="h-5 w-5" />}
//             />
//           </div>

//           {/* Search Parks */}
//           <div className="flex-1">
//             <SearchField
//               label="Parks"
//               placeholder="Search Parks"
//               icon={<MapPin className="h-5 w-5" />}
//             />
//           </div>

//           {/* Search Button */}
//           <button
//             type="button"
//             className="
//               h-14 w-full md:w-[180px]
//               rounded-xl
//               bg-emerald-600
//               text-sm font-extrabold tracking-wide
//               text-white
//               transition hover:bg-emerald-700
//             "
//           >
//             SEARCH
//           </button>
//         </div>
//       </div>

//       {/* Spacer so next section doesn’t overlap */}
//       <div className="h-[120px] sm:h-[140px] xl:h-[160px]" />
//     </section>
//   );
// }

