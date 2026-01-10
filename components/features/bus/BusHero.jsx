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

export default function BusHero() {
  const [tripType, setTripType] = useState("oneway");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [journeyDate, setJourneyDate] = useState("");

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const HeroCard = (
    <div className="mx-auto w-full max-w-[560px] md:max-w-[680px] lg:max-w-[860px] xl:max-w-6xl rounded-[28px] bg-white/95 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.12)] ring-1 ring-black/5 backdrop-blur">
      {/* Trip type */}
      <div className="flex items-center gap-10 px-2 pb-3 pt-1">
        <label className="flex cursor-pointer items-center gap-3">
          <input
            type="radio"
            name="tripType"
            checked={tripType === "oneway"}
            onChange={() => setTripType("oneway")}
            className="h-5 w-5 accent-black"
          />
          <span className="text-sm font-medium text-gray-900">
            One Way
          </span>
        </label>

        <label className="flex cursor-pointer items-center gap-3">
          <input
            type="radio"
            name="tripType"
            checked={tripType === "roundway"}
            onChange={() => setTripType("roundway")}
            className="h-5 w-5 accent-gray-500"
          />
          <span className="text-sm font-medium text-gray-400">
            Round Way
          </span>
        </label>
      </div>

      {/* Fields */}
      <div className="grid grid-cols-1 gap-3 px-2 pb-2 xl:grid-cols-[1fr_auto_1fr_1.25fr_auto] xl:items-center">
        <FieldShell label="From" icon={<Send className="h-5 w-5" />}>
          <input
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="From"
            className="w-full truncate bg-transparent text-base xl:text-lg font-semibold text-gray-800 placeholder:text-gray-400 outline-none"
          />
        </FieldShell>

        <button
          type="button"
          onClick={swap}
          aria-label="Swap from and to"
          className="mx-auto -my-1 flex h-10 w-10 xl:h-[56px] xl:w-[56px] items-center justify-center rounded-xl xl:rounded-2xl bg-transparent xl:bg-white xl:border xl:border-gray-200 xl:shadow-sm text-indigo-900 hover:bg-gray-50 active:scale-[0.98]"
        >
          <ArrowLeftRight className="h-6 w-6" />
        </button>

        <FieldShell label="To" icon={<MapPin className="h-5 w-5" />}>
          <input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="To"
            className="w-full truncate bg-transparent text-base xl:text-lg font-semibold text-gray-800 placeholder:text-gray-400 outline-none"
          />
        </FieldShell>

        <FieldShell
          label="Journey Date"
          icon={<CalendarDays className="h-5 w-5" />}
          rightAddon={
            <button
              type="button"
              className="text-[11px] xl:text-xs font-semibold text-orange-500 hover:text-orange-600"
            >
              + ADD RETURN TRIP
            </button>
          }
        >
          <input
            type="date"
            value={journeyDate}
            onChange={(e) => setJourneyDate(e.target.value)}
            className="w-full bg-transparent text-base xl:text-lg font-semibold text-gray-800 outline-none"
          />
        </FieldShell>

        <button
          type="button"
          className="h-14 xl:h-full md:w-[180px] rounded-xl bg-emerald-600 text-sm font-extrabold tracking-wide text-white transition hover:bg-emerald-700"
        >
          SEARCH
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {/* MOBILE / TABLET */}
      <section className="xl:hidden">
        <div className="relative h-[120px] sm:h-[120px] md:h-[150px] lg:h-[180px] w-full overflow-hidden">
          <Image
            src="https://assets-eu-01.kc-usercontent.com/cce44467-0106-013b-6c0b-26132a361492/be43c251-943c-4d66-89f1-02c5d1772b95/NB_1494161_RefinishNewSitePageImagery_BUSHERO.png"
            alt="Bus booking hero background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
        </div>

        <div className="mx-auto max-w-7xl px-3 sm:px-4 -mt-12 sm:-mt-10 md:-mt-12 pb-8">
          {HeroCard}
        </div>
      </section>

      {/* DESKTOP */}
      <section className="relative hidden xl:block isolate overflow-hidden min-h-[450px]">
        <div className="absolute inset-0">
          <Image
            src="https://assets-eu-01.kc-usercontent.com/cce44467-0106-013b-6c0b-26132a361492/be43c251-943c-4d66-89f1-02c5d1772b95/NB_1494161_RefinishNewSitePageImagery_BUSHERO.png"
            alt="Bus booking hero background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pt-56 pb-10">
          {HeroCard}
        </div>
      </section>
    </div>
  );
}
