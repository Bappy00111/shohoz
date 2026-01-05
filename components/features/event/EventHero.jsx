"use client";

import Image from "next/image";
import { MapPin, CalendarDays } from "lucide-react";

/* Reusable field shell */
function FieldShell({ label, icon, children }) {
  return (
    <div className="flex h-16 xl:h-[72px] items-stretch gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3">
      <div className="mt-1 text-emerald-600">{icon}</div>
      <div className="flex min-w-0 flex-1 flex-col">
        <p className="text-[11px] xl:text-xs font-semibold text-emerald-600">
          {label}
        </p>
        {children}
      </div>
    </div>
  );
}

export default function EventHero() {
  /* Floating filter card */
  const HeroCard = (
    <div className="mx-auto w-full max-w-[560px] md:max-w-[680px] lg:max-w-[860px] xl:max-w-6xl rounded-[28px] bg-white/95 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.12)] ring-1 ring-black/5 backdrop-blur">

      {/* ✅ Filter UI only */}
      <div className="grid grid-cols-1 gap-3 px-2 pb-2 md:grid-cols-2 xl:grid-cols-[1.5fr_1.5fr_auto] xl:items-center">

        {/* Location */}
        <FieldShell label="Location" icon={<MapPin className="h-5 w-5" />}>
          <input
            placeholder="Location"
            className="w-full bg-transparent text-base xl:text-lg font-semibold text-gray-800 placeholder:text-emerald-600 outline-none"
          />
        </FieldShell>

        {/* From Date */}
        <FieldShell
          label="From Date"
          icon={<CalendarDays className="h-5 w-5 text-orange-500" />}
        >
          <input
            type="date"
            className="w-full bg-transparent text-base xl:text-lg font-semibold text-gray-800 outline-none"
          />
        </FieldShell>

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
            COMMING SOON
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
            src="https://shohoz-event-bucket.s3.ap-south-1.amazonaws.com/prod/banner/Event-web-banner-morning-brew-with-leaders-episode-3-1350x291.webp"
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
            src="https://shohoz-event-bucket.s3.ap-south-1.amazonaws.com/prod/banner/Event-web-banner-morning-brew-with-leaders-episode-3-1350x291.webp"
            alt="Hero background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {/* ✅ Black opacity overlay (XL only) */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pt-48 pb-10">
          {HeroCard}
        </div>
      </section>
    </div>
  );
}
