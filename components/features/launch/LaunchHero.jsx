// "use client";

// import Image from "next/image";
// import { ArrowLeftRight, CalendarDays, MapPin, Send, MessageCircle } from "lucide-react";
// import { useState } from "react";

// function FieldShell({ label, icon, rightAddon, children }) {
//   return (
//     <div className="flex h-16 xl:h-[72px] items-stretch gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3">
//       <div className="mt-1 text-emerald-600">{icon}</div>
//       <div className="flex min-w-0 flex-1 flex-col">
//         <div className="flex items-center justify-between gap-3">
//           <p className="text-[11px] xl:text-xs font-semibold text-emerald-600">{label}</p>
//           {rightAddon}
//         </div>
//         {children}
//       </div>
//     </div>
//   );
// }

// export default function LaunchHero() {
//   const [tripType, setTripType] = useState("oneway");
//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");
//   const [journeyDate, setJourneyDate] = useState("");

//   const swap = () => {
//     setFrom(to);
//     setTo(from);
//   };

//   const HeroCard = (
//     <div className="mx-auto w-full max-w-[560px] md:max-w-[680px] lg:max-w-[860px] xl:max-w-6xl rounded-[28px] bg-white/95 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.12)] ring-1 ring-black/5 backdrop-blur">
//       {/* Trip type */}
//       <div className="flex items-center gap-10 px-2 pb-3 pt-1">
//         <label className="flex cursor-pointer items-center gap-3">
//           <input
//             type="radio"
//             name="tripType"
//             checked={tripType === "oneway"}
//             onChange={() => setTripType("oneway")}
//             className="h-5 w-5 accent-black"
//           />
//           <span className="text-sm font-medium text-gray-900">One Way</span>
//         </label>

//         <label className="flex cursor-pointer items-center gap-3">
//           <input
//             type="radio"
//             name="tripType"
//             checked={tripType === "roundway"}
//             onChange={() => setTripType("roundway")}
//             className="h-5 w-5 accent-gray-500"
//           />
//           <span className="text-sm font-medium text-gray-400">Round Way</span>
//         </label>
//       </div>

//       {/* ✅ mobile/md/lg = stacked, xl+ = one row */}
//       <div className="grid grid-cols-1 gap-3 px-2 pb-2 xl:grid-cols-[1fr_auto_1fr_1.25fr_auto] xl:items-center">
//         <FieldShell label="From" icon={<Send className="h-5 w-5" />}>
//           <input
//             value={from}
//             onChange={(e) => setFrom(e.target.value)}
//             placeholder="From"
//             className="w-full truncate bg-transparent text-base xl:text-lg font-semibold text-gray-800 placeholder:text-gray-400 outline-none"
//           />
//         </FieldShell>

//         <button
//           type="button"
//           onClick={swap}
//           aria-label="Swap from and to"
//           className="
//             mx-auto -my-1 flex items-center justify-center
//             h-10 w-10 xl:h-[56px] xl:w-[56px]
//             rounded-xl xl:rounded-2xl
//             border-0 xl:border xl:border-gray-200
//             bg-transparent xl:bg-white
//             shadow-none xl:shadow-sm
//             text-indigo-900 hover:bg-gray-50 active:scale-[0.98]
//           "
//         >
//           <ArrowLeftRight className="h-6 w-6" />
//         </button>

//         <FieldShell label="To" icon={<MapPin className="h-5 w-5" />}>
//           <input
//             value={to}
//             onChange={(e) => setTo(e.target.value)}
//             placeholder="To"
//             className="w-full truncate bg-transparent text-base xl:text-lg font-semibold text-gray-800 placeholder:text-gray-400 outline-none"
//           />
//         </FieldShell>

//         <FieldShell
//           label="Journey Date"
//           icon={<CalendarDays className="h-5 w-5" />}
//           rightAddon={
//             <button type="button" className="text-[11px] xl:text-xs font-semibold text-orange-500 hover:text-orange-600">
//               + ADD RETURN TRIP
//             </button>
//           }
//         >
//           <input
//             type="date"
//             value={journeyDate}
//             onChange={(e) => setJourneyDate(e.target.value)}
//             className="w-full bg-transparent text-base xl:text-lg font-semibold text-gray-800 outline-none"
//           />
//         </FieldShell>

//           <button
//             type="button"
//             className="
//               h-14 xl:h-full w-full md:w-[180px]
//               rounded-xl
//               bg-emerald-600
//               text-sm font-extrabold tracking-wide
//               text-white
//               transition hover:bg-emerald-700
//             "
//           >
//             SEARCH
//           </button>
//       </div>
//     </div>
//   );

//   return (
//     <div className="w-full">
//       {/* ✅ MOBILE / MD / LG: TOP IMAGE STRIP */}
//       <section className="xl:hidden">
//         {/* top strip image */}
//         <div className="relative w-full overflow-hidden
//                         h-[90px] sm:h-[120px] md:h-[150px] lg:h-[180px]">
//           <Image
//             src="https://www.shohoz.com/launch-tickets/img/Shohoz-Launch-Banner.webp"
//             alt="Hero background"
//             fill
//             priority
//             sizes="100vw"
//             className="object-cover object-top"
//           />
//         </div>

//         {/* card below (slight overlap optional) */}
//         <div className="mx-auto max-w-7xl px-3 sm:px-4 -mt-8 sm:-mt-10 md:-mt-12 pb-8">
//           {HeroCard}
//         </div>
//       </section>

//       {/* ✅ XL+: FULL HERO BACKGROUND (আপনার desktop look) */}
//       <section className="relative hidden xl:block isolate overflow-hidden min-h-[500px]">
//         <div className="absolute inset-0">
//           <Image
//             src="https://www.shohoz.com/launch-tickets/img/Shohoz-Launch-Banner.webp"
//             alt="Hero background"
//             fill
//             priority
//             sizes="100vw"
//             className="object-center"
//           />
//           <div className="absolute inset-0 bg-white/10" />
//         </div>

//         <div className="relative mx-auto max-w-7xl px-4 pt-64 pb-10">
//           {HeroCard}
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { ArrowLeftRight, CalendarDays, MapPin, Send } from "lucide-react";
import { useState } from "react";


function FieldShell({ label, icon, rightAddon, children }) {
  return (
    <div className="flex h-16 xl:h-[72px] items-stretch gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3">
      <div className="mt-1 text-emerald-600">{icon}</div>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[11px] xl:text-xs font-semibold text-emerald-600">
            {label}
          </p>
          {rightAddon}
        </div>
        {children}
      </div>
    </div>
  );
}

export default function LaunchHero() {
  const [tripType, setTripType] = useState("oneway");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [journeyDate, setJourneyDate] = useState("");

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  // ✅ Recommended professional ship image
 const HERO_IMAGE =
  "https://images.pexels.com/photos/25435431/pexels-photo-25435431.jpeg";


  const HeroCard = (
    <div className="mx-auto w-full max-w-[560px] md:max-w-[680px] lg:max-w-[860px] xl:max-w-7xl rounded-[28px] bg-white/95 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.12)] ring-1 ring-black/5 backdrop-blur">
      {/* Trip type */}
      <div className="flex items-center gap-10 px-2 pb-3 pt-1">
        <label className="flex cursor-pointer items-center gap-3">
          <input
            type="radio"
            checked={tripType === "oneway"}
            onChange={() => setTripType("oneway")}
            className="h-5 w-5 accent-black"
          />
          <span className="text-sm font-medium text-gray-900">One Way</span>
        </label>

        <label className="flex cursor-pointer items-center gap-3">
          <input
            type="radio"
            checked={tripType === "roundway"}
            onChange={() => setTripType("roundway")}
            className="h-5 w-5 accent-gray-400"
          />
          <span className="text-sm font-medium text-gray-400">Round Way</span>
        </label>
      </div>

      {/* Fields */}
      <div className="grid grid-cols-1 gap-3 px-2 pb-2 xl:grid-cols-[1fr_auto_1fr_1.25fr_auto] xl:items-center">
        <FieldShell label="From" icon={<Send className="h-5 w-5" />}>
          <input
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="From"
            className="w-full bg-transparent text-base xl:text-lg font-semibold outline-none"
          />
        </FieldShell>

        <button
          onClick={swap}
          className="mx-auto flex h-10 w-10 xl:h-[56px] xl:w-[56px] items-center justify-center rounded-xl xl:rounded-2xl hover:bg-gray-50"
        >
          <ArrowLeftRight className="h-6 w-6" />
        </button>

        <FieldShell label="To" icon={<MapPin className="h-5 w-5" />}>
          <input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="To"
            className="w-full bg-transparent text-base xl:text-lg font-semibold outline-none"
          />
        </FieldShell>

        <FieldShell label="Journey Date" icon={<CalendarDays className="h-5 w-5" />}>
          <input
            type="date"
            value={journeyDate}
            onChange={(e) => setJourneyDate(e.target.value)}
            className="w-full bg-transparent text-base xl:text-lg font-semibold outline-none"
          />
        </FieldShell>

        <button className="h-14 xl:h-full md:w-[180px] rounded-xl bg-emerald-600 text-sm font-extrabold text-white hover:bg-emerald-700">
          SEARCH
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {/* MOBILE */}
      <section className="xl:hidden">
        <div className="relative h-[120px] md:h-[150px] lg:h-[180px] w-full overflow-hidden">
          <Image
            src={HERO_IMAGE}
            alt="Launch ship hero"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="mx-auto max-w-7xl px-3 -mt-12 pb-8">
          {HeroCard}
        </div>
      </section>

      {/* DESKTOP XL+ */}
      <section className="relative hidden xl:block min-h-[520px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={HERO_IMAGE}
            alt="Launch ship background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pt-64 pb-10">
          {HeroCard}
        </div>
      </section>
    </div>
  );
}


