// import BusDestinationCard from "./BusDestinationCard";


// export default function BusDestinations() {
//   return (
//     <section className="bg-slate-50 py-8 md:py-10 lg:py-14 px-4 md:px-2.5">
//       <h1 className="text-center text-2xl lg:text-3xl  font-semibold text-slate-900">
//         Discover Trending Destinations
//       </h1>

//       <div className="mx-auto w-full max-w-[560px] md:max-w-[680px] lg:max-w-[860px] xl:max-w-6xl ">
//         <div className="mt-8 grid grid-cols-12 gap-6">
//         {/* Top row */}
//         <BusDestinationCard
//           title="Chittagong"
//           imageSrc="https://s3-ap-south-1.amazonaws.com/shohoz-bus/prod/destinations/Chittagong-1440x600.jpg?v=1.0.3"
//           priority
//           className="col-span-12 md:col-span-6 h-[240px] md:h-[300px]"
//         />
//         <BusDestinationCard
//           title="Dhaka"
//           imageSrc="https://s3-ap-south-1.amazonaws.com/shohoz-bus/prod/destinations/Dhaka-1440x600.jpg?v=1.0.3"
//           priority
//           className="col-span-12 md:col-span-6 h-[240px] md:h-[300px]"
//         />

//         {/* Bottom row (Rajshahi বড়, Rangpur মাঝারি, Sylhet ছোট) */}
//         <BusDestinationCard
//           title="Rajshahi"
//           imageSrc="https://s3-ap-south-1.amazonaws.com/shohoz-bus/prod/destinations/Rajshahi-1440x600.webp?v=1.0.3"
//           className="col-span-12 md:col-span-5 h-[220px] md:h-[260px]"
//         />
//         <BusDestinationCard
//           title="Rangpur"
//           imageSrc="https://s3-ap-south-1.amazonaws.com/shohoz-bus/prod/destinations/Rangpur-1440x600.webp?v=1.0.3"
//           className="col-span-12 md:col-span-4 h-[220px] md:h-[260px]"
//         />
//         <BusDestinationCard
//           title="Sylhet"
//           imageSrc="https://s3-ap-south-1.amazonaws.com/shohoz-bus/prod/destinations/Sylhet-1440x600.jpg?v=1.0.3"
//           className="col-span-12 md:col-span-3 h-[220px] md:h-[260px]"
//         />
//       </div>
//       </div>
//     </section>
//   );
// }

import BusDestinationCard from "./BusDestinationCard";

function BusIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* body */}
      <path
        d="M10 6c0-2.2 1.8-4 4-4h28c6.6 0 12 5.4 12 12v8c0 1.1-.9 2-2 2H10c-2.2 0-4-1.8-4-4V6Z"
        fill="currentColor"
        opacity="0.9"
      />
      {/* window */}
      <path
        d="M16 6h20c4.4 0 8 3.6 8 8v2H16V6Z"
        fill="white"
        opacity="0.9"
      />
      {/* wheels */}
      <circle cx="20" cy="26" r="4" fill="white" opacity="0.95" />
      <circle cx="44" cy="26" r="4" fill="white" opacity="0.95" />
      <circle cx="20" cy="26" r="2" fill="currentColor" opacity="0.55" />
      <circle cx="44" cy="26" r="2" fill="currentColor" opacity="0.55" />
      {/* front */}
      <path d="M8 12h6v10H8c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2Z" fill="currentColor" />
    </svg>
  );
}

export default function BusDestinations() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-10 md:py-12 lg:py-16">
      {/* background accents (logo-like red/green) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[560px] px-4 md:max-w-[680px] md:px-2.5 lg:max-w-[860px] xl:max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          {/* <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-white">
              <BusIcon className="h-4 w-4" />
            </span>



            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span className="text-sm font-semibold text-red-600">Trending</span>
          </div> */}

          <h1 className="mt-4 text-2xl font-semibold text-slate-900 md:text-3xl">
            Discover Popular Destinations in Bangladesh
          </h1>

          <p className="mt-2 text-sm text-slate-600 md:text-base">
            দ্রুত টিকিট বুকিং, সহজ রুট—আপনার পরবর্তী যাত্রার গন্তব্য বেছে নিন।
          </p>
        </div>

        {/* Cards wrapper */}
        <div className="mt-8 rounded-2xl   ackdrop-blur ">
          <div className="grid grid-cols-12 gap-6">
            {/* Top row */}
            <BusDestinationCard
              title="Chittagong"
              imageSrc="https://www.shutterstock.com/image-photo/elevated-expressway-lalkhan-bazar-shaamanat-600nw-2519670575.jpg"
              priority
              className="col-span-12 md:col-span-6 h-[240px] md:h-[300px]"
            />
            <BusDestinationCard
              title="Dhaka"
              imageSrc="https://res.cloudinary.com/jerrick/image/upload/v1687258926/6491872d1f962c001de086fa.jpg"
              priority
              className="col-span-12 md:col-span-6 h-[240px] md:h-[300px]"
            />

            {/* Bottom row */}
            <BusDestinationCard
              title="Rajshahi"
              imageSrc="https://ecdn.dhakatribune.net/contents/cache/images/640x0x1/uploads/media/2023/09/13/Rajshahi-Development-5-f6819dd6ea94084fd01a011dac7ca45d.jpg"
              className="col-span-12 md:col-span-6 h-[220px] md:h-[260px]"
            />
            <BusDestinationCard
              title="Rangpur"
              imageSrc="https://somogrobangladesh.com/wp-content/uploads/2025/01/Tajhat-Palace.png"
              className="col-span-12 md:col-span-6 h-[220px] md:h-[260px]"
            />
            <BusDestinationCard
              title="Sylhet"
              imageSrc="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYdqLhlx4VdkF2vBRCYh-EsI7RFuTxs2h18NWh4indp_Gih0bkikrMVW3HToBQte2hU36_1iwDAslQVjWLMJi0DyU_Sihv7IgaId7bQN6BnaKoSmp7ZTl6gf6YA7EymU_rL5wtzj4Lg_QgIfgG7TQvvScT1WIprpF9MSkGwJNXTpiEkRyrZGhTf7zqvw/s696/blogUpWH4pHhqMkeBCtkAG0sRo1OavrcsHt0.jpg"
              className="col-span-12 md:col-span-6 h-[220px] md:h-[260px]"
            />
            <BusDestinationCard
              title="Dinajpur"
              imageSrc="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/55/96/11/kantajew-temple-kantajew.jpg?w=500&h=500&s=1"
              className="col-span-12 md:col-span-6 h-[220px] md:h-[260px]"
            />
          </div>
        </div>

        {/* Footer hint */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-600">
          <span className="h-2 w-2 rounded-full bg-emerald-600" />
          <span>Safe • Fast • Reliable</span>
          <span className="h-2 w-2 rounded-full bg-red-500" />
        </div>
      </div>
    </section>
  );
}

