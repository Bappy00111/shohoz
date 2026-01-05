import Image from "next/image";
import Link from "next/link";

const events = [
  {
    id: "morning-brew-with-leaders-episode-3",
    title: "Morning Brew with Leaders",
    description:
      "HR Exchange Network presents a refreshing morning session with industry’s top minds — where coffee meets creativity and knowledge brews success.",
    image:
      "https://www.shohoz.com/event-tickets/events/img/morning-brew-with-leaders-episode-3/morning-brew-with-leaders-episode-3.webp?v=43",
    href: "/event-tickets/morning-brew-with-leaders-episode-3",
  },
];

export default function ActiveEventsSection() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10">
      {/* Section Title */}
      <h2 className="mb-8 text-lg font-bold text-[#079d49]">
        Active Events
      </h2>

      {/* Centered Card Wrapper */}
      <div className="flex justify-center">
        {events.map((event) => (
          <div
            key={event.id}
            className="
              w-full max-w-sm
              overflow-hidden
              rounded-2xl
              border border-gray-200
              bg-white
              shadow-sm
              transition
              hover:shadow-md
            "
          >
            {/* Event Image */}
            <div className="relative h-56 w-full">
              <Image
                src={event.image}
                alt={event.title}
                fill
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-cover"
              />
            </div>

            {/* Card Content */}
            <div className="p-5 text-left">
              <h3 className="mb-2 text-base font-bold text-gray-900">
                <Link href={event.href} className="hover:underline">
                  {event.title}
                </Link>
              </h3>

              <p className="mb-6 text-sm leading-relaxed text-gray-600">
                {event.description}
              </p>

              <Link
                href={event.href}
                className="
                  inline-flex items-center justify-center
                  rounded-xl
                  bg-[#079d49]
                  px-6 py-2.5
                  text-sm font-semibold
                  text-white
                  transition
                  hover:bg-emerald-700
                "
              >
                VIEW EVENT
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}
