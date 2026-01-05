import Image from "next/image";
import Link from "next/link";

const footerColumns = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about-us" },
      { label: "Contact Us", href: "/contact-us" },
      { label: "Deals and Offer", href: "/deals-and-offers" },
      { label: "Insurance Claim", href: "/insurance-claim" },
      { label: "Cancel Ticket", href: "/bus-tickets/booking/ticket/cancel" },
      { label: "Bus Reservation", href: "/bus-tickets/booking/bus-reservation" },
      { label: "Blog", href: "/blogs" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Bus Tickets", href: "/bus-tickets" },
      { label: "Air Tickets", href: "/air-tickets" },
      { label: "Train Tickets", href: "https://train.shohoz.com", external: true },
      { label: "Launch Tickets", href: "/launch-tickets" },
      { label: "Event Tickets", href: "/event-tickets" },
      { label: "Park Tickets", href: "/park-tickets" },
    ],
  },
  {
    title: "Information",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-of-use" },
    ],
  },
];

function FooterLink({ href, external, children, className = "" }) {
  const base =
    "text-base font-medium text-[#E8E8E8] hover:text-white transition-colors";

  if (external || href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${base} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${className}`}>
      {children}
    </Link>
  );
}

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22" fill="none" aria-hidden="true">
      <path
        d="M11.2136 12.375L11.8359 8.39352H7.94515V5.8098C7.94515 4.72055 8.48866 3.65879 10.2312 3.65879H12V0.268984C12 0.268984 10.3949 0 8.86019 0C5.65604 0 3.56167 1.90695 3.56167 5.35906V8.39352H0V12.375H3.56167V22H7.94515V12.375H11.2136Z"
        fill="white"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.9227 6.46258C21.8393 4.70061 21.4368 3.13988 20.146 1.85399C18.8601 0.568098 17.2994 0.165644 15.5374 0.0773006C13.7215 -0.0257669 8.27853 -0.0257669 6.46258 0.0773006C4.70552 0.160736 3.14479 0.56319 1.85399 1.84908C0.56319 3.13497 0.165644 4.69571 0.0773006 6.45767C-0.0257669 8.27362 -0.0257669 13.7166 0.0773006 15.5325C0.160736 17.2945 0.56319 18.8552 1.85399 20.1411C3.14479 21.427 4.70061 21.8294 6.46258 21.9178C8.27853 22.0209 13.7215 22.0209 15.5374 21.9178C17.2994 21.8344 18.8601 21.4319 20.146 20.1411C21.4319 18.8552 21.8344 17.2945 21.9227 15.5325C22.0258 13.7166 22.0258 8.27853 21.9227 6.46258ZM16.8724 6.44294C17.5988 6.44294 18.1877 5.8589 18.1877 5.12761C18.1877 4.40123 17.5988 3.81227 16.8724 3.81227C16.146 3.81227 15.5571 4.40123 15.5571 5.12761C15.5571 5.85399 16.1411 6.44294 16.8724 6.44294ZM11.0025 5.35828C7.88098 5.35828 5.36319 7.87607 5.36319 10.9975C5.36319 14.119 7.88098 16.6368 11.0025 16.6368C14.1239 16.6368 16.6417 14.119 16.6417 10.9975C16.6417 7.87607 14.1239 5.35828 11.0025 5.35828ZM11.0025 14.6638C8.98528 14.6638 7.3362 13.0196 7.3362 10.9975C7.3362 8.97546 8.98037 7.33129 11.0025 7.33129C13.0245 7.33129 14.6687 8.97546 14.6687 10.9975C14.6687 13.0196 13.0196 14.6638 11.0025 14.6638ZM17.4859 19.5718C18.4528 19.184 19.1939 18.4429 19.5767 17.481C20.0692 16.2433 20.0418 13.5361 20.024 11.7812C20.0211 11.4901 20.0184 11.2252 20.0184 10.9975C20.0184 10.7699 20.0211 10.505 20.024 10.214C20.0418 8.46 20.0692 5.75593 19.5767 4.51411C19.189 3.54724 18.4479 2.80613 17.4859 2.42331C16.2444 1.93346 13.524 1.95955 11.7696 1.97638C11.485 1.97911 11.2258 1.9816 11.0025 1.9816C10.7748 1.9816 10.5099 1.97891 10.2189 1.97596C8.46492 1.95819 5.76084 1.93079 4.51902 2.42331C3.55215 2.81104 2.81104 3.55215 2.42822 4.51411C1.93836 5.75564 1.96446 8.476 1.98129 10.2304C1.98402 10.515 1.9865 10.7742 1.9865 10.9975C1.9865 11.2252 1.98382 11.4901 1.98087 11.7811C1.9631 13.5351 1.9357 16.2392 2.42822 17.481C2.81595 18.4479 3.55706 19.189 4.51902 19.5718C5.76055 20.0616 8.4809 20.0355 10.2353 20.0187C10.5199 20.016 10.7791 20.0135 11.0025 20.0135C11.2301 20.0135 11.495 20.0162 11.786 20.0191C13.54 20.0369 16.2441 20.0643 17.4859 19.5718Z"
        fill="white"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative z-20 bg-gradient-to-r from-[#2e6755] to-[#319274] px-4 pt-8 pb-8 sm:p-20  border-t border-t-2 border-[#58dbb2]">
      <div className="mx-auto w-full max-w-6xl">
        {/* Top */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          {/* Brand */}
          <div className="w-full lg:w-2/5 lg:mr-5">
            <Image
              src="https://s3-ap-south-1.amazonaws.com/shohoz-bus/prod/white-logo.png?v=1.0.4"
              alt="Shohoz"
              width={174}
              height={40}
              className="h-auto w-[174px]"
              priority={false}
            />

            <p className="text-lg font-normal text-[#E8E8E8] mt-8 mb-5 leading-relaxed">
              Shohoz, owned and operated by Shohoj Limited, is Bangladesh&apos;s
              largest online ticket destination, which is committed to making your
              life convenient, easier and smarter.
            </p>
          </div>

          {/* Columns */}
          <div className="w-full lg:w-3/5 flex flex-wrap justify-between items-start gap-10 lg:gap-12 order-first lg:order-none">
            {footerColumns.map((col) => (
              <div key={col.title} className="w-full md:w-fit flex flex-col">
                <p className="text-lg font-semibold text-white mb-6">
                  {col.title}
                </p>

                <div className="flex flex-col gap-4">
                  {col.links.map((l) => (
                    <FooterLink key={l.href} href={l.href} external={l.external}>
                      {l.label}
                    </FooterLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5">
          <p className="text-sm font-normal text-[#E8E8E8] max-sm:text-center max-sm:w-full">
            Copyright © 2015 - 2025 Shohoj Ltd. All Rights Reserved.
          </p>

          <div className="flex justify-end items-center sm:ml-8 max-sm:justify-center max-sm:w-full gap-3 sm:gap-5">
            <a
              href="https://www.facebook.com/shohoz"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 flex justify-center items-center hover:opacity-90 transition-opacity"
            >
              <FacebookIcon />
            </a>

            <a
              href="https://www.instagram.com/shohoz.bd"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 flex justify-center items-center hover:opacity-90 transition-opacity"
            >
              <InstagramIcon />
            </a>

            <a
              href="https://www.linkedin.com/company/shohoz/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 flex justify-center items-center hover:opacity-90 transition-opacity"
            >
              {/* SVG remote হলে next/image এ config লাগে; তাই simple img */}
              <img
                src="https://s3-ap-south-1.amazonaws.com/shohoz-bus/prod/linkin.svg?v=1.0.4"
                width="22"
                height="22"
                alt="LinkedIn Social Icon"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
