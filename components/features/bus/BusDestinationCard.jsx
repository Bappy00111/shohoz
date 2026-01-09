import Image from "next/image";
import Link from "next/link";

export default function BusDestinationCard({
  title,
  imageSrc,
  className = "",
  priority = false,
}) {
  return (
    <Link href={`/bus-tickets/destinations/${title.toLowerCase()}`}
      className={[
        "relative overflow-hidden rounded-2xl",
        "shadow-sm ring-1 ring-black/5",
        className,
      ].join(" ")}
    >
      <Image
        src={imageSrc}
        alt={title}
        fill
        priority={priority}
        className="object-center"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Readability gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

      {/* Label */}
      <div className="absolute bottom-4 left-4">
        <span className="text-white text-lg font-semibold drop-shadow">
          {title}
        </span>
      </div>
    </Link>
  );
}
