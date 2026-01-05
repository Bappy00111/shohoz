"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "How can I purchase a ticket from Shohoz Platform?",
    answer: (
      <p className="text-sm lg:text-base font-normal text-white">
        Please visit our website{" "}
        <a
          href="https://www.shohoz.com"
          className="font-bold underline underline-offset-4"
        >
          www.shohoz.com
        </a>{" "}
        or download our mobile App.
        <br />
        <a
          href="https://play.google.com/store/search?q=shohoz&c=apps"
          target="_blank"
          rel="noreferrer"
          className="font-bold underline underline-offset-4"
        >
          Download App For Android
        </a>
        <br />
        <a
          href="https://apps.apple.com/us/app/shohoz-app/id1354321445"
          target="_blank"
          rel="noreferrer"
          className="font-bold underline underline-offset-4"
        >
          Download App For IOS
        </a>
        <br />
        Or call our helpline number at{" "}
        <a
          href="tel:16374"
          className="font-bold underline underline-offset-4"
        >
          16374
        </a>{" "}
        for ticket purchase and for more information.
      </p>
    ),
  },
  {
    question: "Is there any time frame to buy a ticket?",
    answer: (
      <p className="text-sm lg:text-base font-normal text-white">
        There is no time limit to buy tickets from our website or app. But if a
        customer wants to purchase a ticket through our helpline number, then
        the customer should call our helpline number{" "}
        <a
          href="tel:16374"
          className="font-bold underline underline-offset-4"
        >
          16374
        </a>{" "}
        <b>( Operation Time- 7:00 AM to 11:00 PM )</b>.
      </p>
    ),
  },
  {
    question: "What is the process of Migrate or Cancelling a ticket?",
    answer: (
      <p className="text-sm lg:text-base font-normal text-white">
        For cancellation and migration, customers must have 12/24 hours before
        trip departure time depending on the operator. For migration, customers
        must call our helpline number{" "}
        <a
          href="tel:16374"
          className="font-bold underline underline-offset-4"
        >
          16374
        </a>
        . Also, the customer must call from his ticket booking number. Also, a
        customer can cancel a ticket from our website if he has enough time from
        the trip departure time (12/24 hours excluding 11 PM to 7 AM).
      </p>
    ),
  },
  {
    question: "How can I check Shohoz's offers?",
    answer: (
      <p className="text-sm lg:text-base font-normal text-white">
        Customers can check our offers on our website. Firstly, go to our
        website then Click "BUS" option, and then go to the{" "}
        <a
          href="/deals-and-offers"
          target="_blank"
          rel="noreferrer"
          className="font-bold underline underline-offset-4"
        >
          Deals and offers
        </a>{" "}
        option. Customers also can call our helpline number{" "}
        <a
          href="tel:16374"
          className="font-bold underline underline-offset-4"
        >
          16374
        </a>{" "}
        for more queries and offers.
      </p>
    ),
  },
  {
    question:
      "After purchasing a ticket from Shohoz, I cancelled that ticket due to a personal issue or the operator cancelled their trip. But I have not received my refund yet. What should I do now?",
    answer: (
      <p className="text-sm lg:text-base font-normal text-white">
        As per our{" "}
        <a
          href="/cancellation-and-refunds"
          target="_blank"
          rel="noreferrer"
          className="font-bold underline underline-offset-4"
        >
          refund policy
        </a>
        , it takes maximum of 5-7 working days for Bkash and Nagad both. For
        Internet banking, Debit cards and Credit cards it takes maximum of 7-10
        working days. If the customer did not get the refund in mentioned
        timeline, please call{" "}
        <a
          href="tel:16374"
          className="font-bold underline underline-offset-4"
        >
          16374
        </a>{" "}
        or mail us at{" "}
        <a
          href="mailto:info@shohoz.com"
          className="font-bold underline underline-offset-4"
        >
          info@shohoz.com
        </a>
        .
      </p>
    ),
  },
];

function IconPlus({ open }) {
  return (
    <span
      className="inline-flex h-10 w-10 items-center justify-center text-[#cef4dd] transition-colors group-hover:text-white"
      aria-hidden="true"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 4v12M4 10h12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={open ? "opacity-0" : "opacity-100"}
        />
        <path
          d="M4 10h12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={open ? "opacity-100" : "opacity-0"}
        />
      </svg>
    </span>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-5 lg:py-20 lg:px-6 bg-gradient-to-r from-[#318f72] to-[#36ae89]">
      <div className="mx-auto w-full max-w-6xl px-4 lg:px-0">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left */}
          <div className="flex flex-col w-full lg:w-1/3 lg:py-5 lg:pr-5">
            <p className="text-4xl font-semibold text-left text-white">
              Got Questions ?
            </p>
            <p className="text-2xl lg:text-4xl font-semibold text-left text-white">
              We&apos;ve Got Answers
            </p>
            <p className="text-lg font-normal text-left text-white mt-4 mb-10">
              We are always happy to hear from you. If you have any questions,
              suggestions or opinions, please do not hesitate to reach out to
              us.
            </p>

            <Link
              href="https://www.shohoz.com/contact-us"
              className="w-44 h-16 rounded-2xl bg-white hover:bg-gray-100 transition-colors flex justify-center items-center text-base font-bold text-gray-900"
            >
              Contact Us
            </Link>
          </div>

          {/* Right */}
          <div className="w-full lg:w-2/3 lg:py-5 lg:pl-5">
            <div className="space-y-2">
              {faqs.map((item, idx) => {
                const isOpen = openIndex === idx;
                const contentId = `faq-content-${idx}`;
                const buttonId = `faq-button-${idx}`;

                return (
                  <div key={idx} className="my-1">
                    <div className="relative flex justify-between py-2.5 border-b-2 border-solid border-[#e9fbf059]">
                      <h2 className="text-md md:text-2xl font-semibold text-left text-white pr-16">
                        {item.question}
                      </h2>

                      <button
                        id={buttonId}
                        type="button"
                        aria-label="Faq Collapse and Extend Button"
                        aria-expanded={isOpen}
                        aria-controls={contentId}
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        className="group absolute right-0 top-1/2 -translate-y-1/2 h-10 w-16 flex items-center justify-end"
                      >
                        {/* Optional rotate animation */}
                        <div
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-0" : "rotate-0"
                          }`}
                        >
                          <IconPlus open={isOpen} />
                        </div>
                      </button>
                    </div>

                    {/* Accordion body (SMOOTH SLOW OPEN) */}
                    <div
                      id={contentId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`grid overflow-hidden transition-[grid-template-rows,opacity,margin-top] duration-700 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 mt-3"
                          : "grid-rows-[0fr] opacity-0 mt-0"
                      }`}
                    >
                      <div className="min-h-0 overflow-hidden pb-3">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
