import Image from "next/image";
import Link from "next/link";

const DESTINATIONS = [
  {
    name: "Indonesia",
    href: "https://www.shohoz.com/holiday-packages/search?destinationId=hm97o8s0bmz90h74c9tmniin",
    img: "https://shohoz-cms-content.s3.ap-south-1.amazonaws.com/prod/5_6_6593347d58.jpg",
  },
  {
    name: "Singapore",
    href: "https://www.shohoz.com/holiday-packages/search?destinationId=y64n47bf103tza24qj92pzy7",
    img: "https://shohoz-cms-content.s3.ap-south-1.amazonaws.com/prod/4_4_b3e0e34c1f.jpg",
  },
  {
    name: "Malaysia",
    href: "https://www.shohoz.com/holiday-packages/search?destinationId=da43o9hw84so1z2vdkblvkog",
    img: "https://shohoz-cms-content.s3.ap-south-1.amazonaws.com/prod/3_4_a02e978b2e.jpg",
  },
  {
    name: "Nepal",
    href: "https://www.shohoz.com/holiday-packages/search?destinationId=tjoxm1odl856pxsjbm3ht5ex",
    img: "https://shohoz-cms-content.s3.ap-south-1.amazonaws.com/prod/2_7_93092c0997.jpg",
  },
  {
    name: "Thailand",
    href: "https://www.shohoz.com/holiday-packages/search?destinationId=htx6c9yffemhffenmai2rp6j",
    img: "https://shohoz-cms-content.s3.ap-south-1.amazonaws.com/prod/3_1_1c6a1b4a21.jpg",
  },
];

function DestinationCard({ item }) {
  return (
    <Link
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="block"
    >
      <article
        className="
          group relative overflow-hidden
          rounded-[26px]
          shadow-[0_18px_45px_rgba(0,0,0,0.12)]
          ring-1 ring-black/5
          transition hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(0,0,0,0.16)]
        "
        style={{ width: 210, height: 330 }} // ✅ screenshot-like fixed card size
      >
        <Image
          src={item.img}
          alt={item.name}
          fill
          sizes="210px"
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
        />

        {/* ✅ bottom gradient overlay like screenshot */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

        {/* ✅ bottom-left big white text */}
        <p className="absolute left-5 bottom-5 text-2xl font-extrabold text-white drop-shadow">
          {item.name}
        </p>
      </article>
    </Link>
  );
}

export default function PopularDestination() {
  return (
    <section className="bg-[#f3f6f5]">
      <div className="mx-auto max-w-6xl px-4 py-14">
        {/* ✅ centered big green title */}
        <h2 className="text-center text-4xl font-extrabold text-emerald-600">
          Popular Destination
        </h2>

        {/* ✅ center row + big gap (desktop look) */}
        <div
          className="
            mt-12 grid justify-items-center
            grid-cols-2 gap-6
            sm:grid-cols-3 sm:gap-8
            lg:grid-cols-5 lg:gap-10
          "
        >
          {DESTINATIONS.map((item) => (
            <DestinationCard key={item.href} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
