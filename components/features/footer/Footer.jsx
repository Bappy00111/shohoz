"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../../../public/img/new-logo/remove.png";

const footerColumns = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about-us" },
      { label: "Contact Us", href: "/contact-us" },
      { label: "Deals & Offers", href: "/deals-and-offers" },
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
      // { label: "Air Tickets", href: "/air-tickets" },
      { label: "Train Tickets", href: "https://train.shohoz.com", external: true },
      { label: "Launch Tickets", href: "/launch-tickets" },
      { label: "Event Tickets", href: "/event-tickets" },
      // { label: "Park Tickets", href: "/park-tickets" },
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

function FooterLink({ href, external, children }) {
  const base =
    "text-base font-medium text-gray-600 hover:text-[#58dbb2] transition-colors";

  if (external || href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={base}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={base}>
      {children}
    </Link>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="
        w-10 h-10 rounded-full
        flex items-center justify-center
        border border-gray-200
        text-gray-500
        hover:bg-[#58dbb2]
        hover:text-white
        hover:border-[#58dbb2]
        transition-all duration-300
      "
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 px-4 pt-12 pb-8 sm:px-10">
      <div className="mx-auto w-full max-w-7xl">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Brand */}
          <div className="w-full lg:w-2/5">
            {/* Logo Image */}
            <Image
              src={logo}
              alt="Bangladesh Reserve Service"
              width={180}
              height={60}
              className="w-[180px] h-auto"
            />

            {/* English Brand Name */}
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Bangladesh Reserve Service
            </h3>

            {/* Description */}
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              Bangladesh Reserve Service is a trusted transportation and ticketing
              platform committed to providing safe, reliable, and convenient
              travel solutions across Bangladesh.
            </p>
          </div>

          {/* Footer Columns */}
          <div className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4 className="text-lg font-semibold text-gray-900 mb-5">
                  {col.title}
                </h4>

                <div className="flex flex-col gap-4">
                  {col.links.map((l) => (
                    <FooterLink
                      key={l.href}
                      href={l.href}
                      external={l.external}
                    >
                      {l.label}
                    </FooterLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-5">
          <p className="text-sm text-gray-500 text-center sm:text-left">
            © 2015 – 2025 Bangladesh Reserve Service. All Rights Reserved.
          </p>

          <div className="flex gap-4">
            <SocialIcon
              href="https://www.facebook.com/"
              label="Facebook"
            >
              <FaFacebookF size={18} />
            </SocialIcon>

            <SocialIcon
              href="https://www.instagram.com/"
              label="Instagram"
            >
              <FaInstagram size={18} />
            </SocialIcon>

            <SocialIcon
              href="https://www.linkedin.com/"
              label="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}
