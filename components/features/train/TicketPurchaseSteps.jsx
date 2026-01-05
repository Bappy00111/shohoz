import Image from 'next/image';

const STEPS = [
  {
    title: 'Search',
    desc: 'Choose your origin, destination, journey dates and search for trains',
    img: 'https://train.shohoz.com/assets/img/home/search.svg',
    alt: 'Step one of Bangladesh Railway purchase ticket',
    w: 159,
    h: 183,
  },
  {
    title: 'Select',
    desc: 'Select your desired trip and choose your seats',
    img: 'https://train.shohoz.com/assets/img/home/select.svg',
    alt: 'Step two of Bangladesh Railway purchase ticket',
    w: 167,
    h: 155,
  },
  {
    title: 'Pay',
    desc: 'Pay for the tickets via Debit / Credit Cards or MFS',
    img: 'https://train.shohoz.com/assets/img/home/pay.svg',
    alt: 'Step three of Bangladesh Railway purchase ticket',
    w: 172,
    h: 148,
  },
];

export default function TicketPurchaseSteps() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <div
              key={s.title}
              className="  p-6 text-center  transition hover:shadow-md"
            >
              {/* Image */}
              <div className="mx-auto flex h-44 items-center justify-center">
                <Image
                  src={s.img}
                  alt={s.alt}
                  width={s.w}
                  height={s.h}
                  className="h-full w-auto object-contain"
                  priority={s.title === 'Search'}
                />
              </div>

              {/* Heading */}
              <h3 className="mt-5 text-xl font-semibold text-slate-900">
                {s.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
