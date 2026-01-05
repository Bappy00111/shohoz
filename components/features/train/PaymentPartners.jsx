import Image from "next/image";

const PARTNERS = [
  { src: "https://train.shohoz.com/assets/img/bkash-home.png", alt: "bkash a payment method of Bangladesh Railway", w: 77, h: 40 },
  { src: "https://train.shohoz.com/assets/img/nagad-32.png", alt: "nagad a payment method of Bangladesh Railway", w: 77, h: 40 },
  { src: "https://train.shohoz.com/assets/img/rocket-home.svg", alt: "rocket a payment method of Bangladesh Railway", w: 77, h: 40 },
  { src: "https://train.shohoz.com/assets/img/upay-home.svg", alt: "upay a payment method of Bangladesh Railway", w: 77, h: 40 },
  { src: "https://train.shohoz.com/assets/img/visa-home.png", alt: "Visa a payment method of Bangladesh Railway", w: 77, h: 40 },
  { src: "https://train.shohoz.com/assets/img/master-card-home.png", alt: "MasterCard a payment method of Bangladesh Railway", w: 77, h: 40 },
  { src: "https://train.shohoz.com/assets/img/amex-home.svg", alt: "amex a payment method of Bangladesh Railway", w: 77, h: 40 },
  { src: "https://train.shohoz.com/assets/img/nexus-debit-home.svg", alt: "nexus-debit a payment method of Bangladesh Railway", w: 80, h: 40 },
];

export default function PaymentPartners() {
  return (
    <section className="w-full bg-white border-t  border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-6 ">
        <div className=" bg-white p-4 md:p-5">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {PARTNERS.map((p) => (
              <div
                key={p.src}
                className="flex h-10 items-center justify-center px-3"
                title={p.alt}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={p.w}
                  height={p.h}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
