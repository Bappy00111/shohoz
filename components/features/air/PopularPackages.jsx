import Image from "next/image";
import Link from "next/link";
import { MapPin, CalendarDays, Users } from "lucide-react";

/**
 * ✅ data আলাদা রাখলে later API/DB থেকে easy হবে
 */
const PACKAGES = [
  {
    href: "https://www.shohoz.com/holiday-packages/package?documentId=th56vdgbb6ae09jo596qqv8k",
    img: "https://shohoz-cms-content.s3.ap-south-1.amazonaws.com/prod/2_7_2478e52668.jpg",
    title: "Dual City Adventure: 5 Days, 4 Nights in Kathmandu and Pokhara",
    country: "Nepal",
    duration: "5 Days, 4 Nights",
    people: "2 People",
    price: "BDT 25,000",
  },
  {
    href: "https://www.shohoz.com/holiday-packages/package?documentId=vu48hxye5p3edyf71qgci4jc",
    img: "https://shohoz-cms-content.s3.ap-south-1.amazonaws.com/prod/2_8_50d001b56f.jpg",
    title: "4 Days, 3 Nights Paradise Gateway Bali",
    country: "Indonesia",
    duration: "4 Days, 3 Nights",
    people: "2 People",
    price: "BDT 11,500",
  },
  {
    href: "https://www.shohoz.com/holiday-packages/package?documentId=vv7m8r6moof8snv8bwmmjdhs",
    img: "https://shohoz-cms-content.s3.ap-south-1.amazonaws.com/prod/2_4_0ce6af3bb3.jpg",
    title: "5 Days 4 Nights of Urban Adventure Singapore & Kuala Lumpur",
    country: "Malaysia",
    duration: "1 Days, 1 Nights",
    people: "2 - 8 People",
    price: "BDT 23,500",
  },
  {
    href: "https://www.shohoz.com/holiday-packages/package?documentId=xrhel9hercb0n8hcb5orpmpk",
    img: "https://shohoz-cms-content.s3.ap-south-1.amazonaws.com/prod/2_3_bb7dcea20f.jpg",
    title: "Explore Singapore 3 Days 2 Nights Adventure",
    country: "Singapore",
    duration: "3 Days, 2 Nights",
    people: "2 People",
    price: "BDT 19,500",
  },
  {
    href: "https://www.shohoz.com/holiday-packages/package?documentId=i371lpgem5uewnszeb88ult8",
    img: "https://shohoz-cms-content.s3.ap-south-1.amazonaws.com/prod/3_1_80dcb8b3e5.jpg",
    title: "Bangkok 3 Days 2 Nights Couple Package",
    country: "Thailand",
    duration: "3 Days, 2 Nights",
    people: "1 - 2 People",
    price: "BDT 10,500",
  },
];

function Badge({ icon, text, dark = false }) {
  return (
    <div
      className={[
        "flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold shadow-sm backdrop-blur",
        dark ? "bg-black/55 text-white" : "bg-white/80 text-gray-900",
      ].join(" ")}
    >
      {icon}
      <span className="leading-none">{text}</span>
    </div>
  );
}

function PackageCard({ item }) {
  return (
    <Link
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="block w-full"
    >
      <article className="group overflow-hidden rounded-xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.10)] ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(0,0,0,0.16)]">
        {/* Image */}
        <div className="relative h-[210px] w-full">
          <Image
            src={item.img}
            alt={item.title}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover"
            priority={false}
          />

          {/* top overlay badges */}
          <div className="absolute inset-x-3 top-3 flex flex-wrap items-center gap-2">
            <Badge
              icon={<MapPin className="h-4 w-4 text-[#079D49]" />}
              text={item.country}
              dark={false}
            />
          </div>

          <div className="absolute inset-x-3 bottom-3 flex flex-wrap items-center gap-2">
            <Badge
              icon={<CalendarDays className="h-4 w-4 text-white" />}
              text={item.duration}
              dark
            />
            <Badge
              icon={<Users className="h-4 w-4 text-white" />}
              text={item.people}
              dark
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="line-clamp-2 text-sm font-semibold text-gray-900">
            {item.title}
          </h3>

          <div className="mt-3">
            <p className="text-sm font-extrabold text-gray-900">{item.price}</p>
            <p className="text-xs text-gray-500">Per person</p>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function PopularPackages() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-xl font-extrabold text-gray-900">
          Popular Packages
        </h2>

        {/* grid */}
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((item) => (
            <PackageCard key={item.href} item={item} />
          ))}
        </div>

        {/* see all */}
        <div className="mt-8 flex justify-center">
          <Link
            href="https://www.shohoz.com/holiday-packages/search"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-extrabold text-emerald-700 hover:text-emerald-800"
          >
            SEE ALL PACKAGES -&gt;
          </Link>
        </div>
      </div>
    </section>
  );
}
