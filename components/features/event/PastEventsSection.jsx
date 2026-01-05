import Image from "next/image";
import Link from "next/link";

const pastEvents = [
  {
    id: 1,
    title: "Hyper Ninja Warrior Challenge - 2026",
    image:
      "https://www.shohoz.com/event-tickets/events/img/featured/hyper-ninja-warrior-2026.webp?v=35",
    description:
      "The biggest Ninja Challenge in Bangladesh is finally here - and this is YOUR chance to prove what you’ve got.",
  },
  {
    id: 2,
    title: "Morning Brew with Leaders",
    image:
      "https://www.shohoz.com/event-tickets/events/img/featured/morning-brew-with-leaders-season-2.webp?v=99",
    description:
      "HR Exchange Network presents a refreshing morning session with industry’s top minds — where coffee meets creativity and knowledge brews success.",
  },
  {
    id: 3,
    title: "Mr. Chattogram Open Bodybuilding Competition 2025",
    image:
      "https://www.shohoz.com/event-tickets/events/img/featured/mr-chattogram-2025.webp?v=49",
    description:
      "The Mr. Chattogram Open Bodybuilding Competition 2025 will be held on 21–22 November at the Institution of Engineers, Chattogram, featuring 500+ elite athletes from across Bangladesh.",
  },
  {
    id: 4,
    title: "Morning Brew with Leaders",
    image:
      "https://www.shohoz.com/event-tickets/events/img/featured/morning-brew-with-leaders.webp?v=16",
    description:
      "HR Exchange Network presents a refreshing morning session with industry’s top minds — where coffee meets creativity and knowledge brews success.",
  },
  {
    id: 5,
    title: "Here I M 2025",
    image:
      "https://www.shohoz.com/event-tickets/events/img/featured/here-i-m-2.webp?v=98",
    description:
      "HERE I M 2025 — Celebrating 12 Years of The Ultimate Worship Experience.\nDate: Friday, 24 October 2025\nTime: 3:00 PM – 9:00 PM\nVenue: KIB Complex Auditorium, Khamarbari, Dhaka",
  },
  {
    id: 6,
    title: "Annual HR Conference 2025",
    image:
      "https://www.shohoz.com/event-tickets/events/img/featured/annual-hr-conference-2025.webp?v=18",
    description:
      "HR Exchange Network Bangladesh presents the biggest HR Event of the Year — a significant opportunity to be part of a community committed to collaboration, learning, and growth.",
  },
];

export default function PastEventsSection() {
  return (
   <section className="bg-gray-50">
     <div className="mx-auto max-w-7xl px-4 py-10">
      {/* Section Title */}
      <h2 className="mb-8 text-lg font-bold text-[#079d49]">
        Past Events
      </h2>

      {/* Events Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pastEvents.map((event) => (
          <div
            key={event.id}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white  transition"
          >
            {/* Image */}
            <div className="relative h-52 w-full">
              <Image
                src={event.image}
                alt={event.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4 text-left">
              <h3 className="mb-2 text-base font-bold text-gray-900">
                {event.title}
              </h3>

              <p className="whitespace-pre-line text-sm text-gray-600">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* See All */}
      <div className="mt-10 text-center">
        <Link
          href="https://www.shohoz.com/event-tickets/all-past-events"
          className="inline-flex items-center gap-2 text-base font-bold text-emerald-600 transition hover:underline"
        >
          SEE ALL PAST EVENTS →
        </Link>
      </div>
    </div>
   </section>
  );
}
