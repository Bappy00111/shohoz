// "use client";

// import React, { useMemo, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// import {
//   AirIcon,
//   BusIcon,
//   EventIcon,
//   LaunchIcon,
//   MenuIcon,
//   ParkIcon,
//   TrainIcon,
// } from "@/components/ui/icons";

// export default function Navbar() {
//   const pathname = usePathname();
//   const [mobileOpen, setMobileOpen] = useState(false);

//   // আইকনের সাইজ (tailwind দিয়ে control)
//   const iconClass = "text-[20px]"; // চাইলে 22/24 করতে পারেন

//   const navItems = useMemo(
//     () => [
//       { title: "Bus", href: "/bus-tickets", icon: <BusIcon className={iconClass} /> },
//       { title: "Air", href: "/air-tickets", icon: <AirIcon className={`${iconClass} rotate-[-15deg]`} /> },
//       { title: "Train", href: "/train", icon: <TrainIcon className={iconClass} /> },
//       { title: "Launch", href: "/launch-tickets", icon: <LaunchIcon className={iconClass} /> },
//       { title: "Event", href: "/event-tickets", icon: <EventIcon className={iconClass} /> },
//       { title: "Park", href: "/park-tickets", icon: <ParkIcon className={iconClass} />, badge: "Beta" },
//     ],
//     []
//   );

//   const isActive = (href) => {
//     if (href.startsWith("http")) return false;
//     return pathname === href;
//   };

//   return (
//     <div id="navbar" className="fixed top-0 z-50 h-[70px] w-full">
//       <div className="h-[70px] border-b border-solid border-[#EEEEEE] bg-white">
//         <div className="mx-auto h-full w-full max-w-6xl px-4 md:px-2.5">
//           <div className="flex h-full w-full items-center justify-between">
//             <div className="mr-4 flex w-full items-center justify-between">
//               <div className="flex justify-start">
//                 <Link href="/" className="flex items-center">
//                   <Image
//                     src="https://train.shohoz.com/assets/shohoz/shohoz_logo_new.png"
//                     alt="Logo"
//                     width={85}
//                     height={19}
//                     priority
//                     className="border-none outline-0"
//                   />
//                 </Link>

//                 <div className="ml-[44px] hidden items-center justify-start lg:flex">
//                   {navItems.map((item) => {
//                     const active = isActive(item.href);

//                     const base =
//                       "mr-2 flex h-10 w-[100px] items-center justify-center rounded-[10px] border-2 text-xs font-semibold";
//                     const activeCls = "border-[#B4E1C8] text-[#079D49]";
//                     const normalCls =
//                       "border-transparent hover:border-[#B4E1C8] hover:text-[#079D49]";
//                     const cls = `${base} ${active ? activeCls : normalCls} ${
//                       item.badge ? "relative pl-1 justify-start" : ""
//                     }`;

//                     const content = (
//                       <>
//                         <span className="nav-icon">{item.icon}</span>
//                         <span className="ml-1.5 text-right text-xs font-semibold">
//                           {item.title}
//                         </span>

//                         {item.badge ? (
//                           <span className="absolute -right-[2px] -top-[2px] rounded bg-red-600 px-1 py-[1px] text-[10px] font-semibold uppercase text-white">
//                             {item.badge}
//                           </span>
//                         ) : null}
//                       </>
//                     );

//                     if (item.external) {
//                       return (
//                         <a
//                           key={item.title}
//                           href={item.href}
//                           className={cls}
//                           title={item.title}
//                           target="_blank"
//                           rel="noreferrer"
//                         >
//                           {content}
//                         </a>
//                       );
//                     }

//                     return (
//                       <Link key={item.title} href={item.href} className={cls} title={item.title}>
//                         {content}
//                       </Link>
//                     );
//                   })}
//                 </div>
//               </div>

//               <div className="ml-5 flex items-center gap-3 max-lg:hidden">
//                 <Link hidden href="/login" className="text-sm font-medium text-[#079D49] hover:underline">
//                   Login
//                 </Link>
//                 <Link
//                   className="block h-[35px] shrink-0 rounded-2xl bg-[#f88922] px-6 py-2.5 text-right text-xs font-semibold text-white"
//                   href="tel:16374"
//                 >
//                   <span className="mr-2 inline-block">📞</span>1 6 3 7 4
//                 </Link>
//               </div>
//             </div>

//             <div className="flex items-center">
//               <Link className="text-sm font-medium text-[#079D49] hover:underline" href="/login">
//                 Login
//               </Link>

//               <div className="ml-2 lg:hidden">
//                 <button
//                   type="button"
//                   aria-label="Mobile navbar toggler"
//                   className="-mr-2 flex h-10 w-10 items-center justify-center bg-transparent outline-none"
//                   onClick={() => setMobileOpen((v) => !v)}
//                 >
//                   <MenuIcon className="text-[22px]" />
//                 </button>
//               </div>
//             </div>
//           </div>

//           {mobileOpen ? (
//             <div className="lg:hidden">
//               <div className="mt-2 rounded-xl border border-[#EEEEEE] bg-white p-3 shadow-sm">
//                 <div className="grid grid-cols-2 gap-2">
//                   {navItems.map((item) => {
//                     const base =
//                       "flex items-center gap-2 rounded-lg border-2 border-transparent px-3 py-2 text-sm font-semibold hover:border-[#B4E1C8] hover:text-[#079D49]";

//                     if (item.external) {
//                       return (
//                         <a
//                           key={item.title}
//                           href={item.href}
//                           className={base}
//                           target="_blank"
//                           rel="noreferrer"
//                         >
//                           {item.icon}
//                           <span>{item.title}</span>
//                         </a>
//                       );
//                     }

//                     return (
//                       <Link
//                         key={item.title}
//                         href={item.href}
//                         className={base}
//                         onClick={() => setMobileOpen(false)}
//                       >
//                         {item.icon}
//                         <span>{item.title}</span>
//                       </Link>
//                     );
//                   })}
//                 </div>

//                 <a
//                   className="mt-3 block w-full rounded-xl bg-[#f88922] px-4 py-3 text-center text-sm font-semibold text-white"
//                   href="tel:16374"
//                 >
//                   📞 1 6 3 7 4
//                 </a>
//               </div>
//             </div>
//           ) : null}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  AirIcon,
  BusIcon,
  TrainIcon,
  LaunchIcon,
  EventIcon,
  ParkIcon,
  MenuIcon,
  CloseIcon,
  DealsIcon,
  InsuranceIcon,
  CancelIcon,
  ReservationIcon,
  SupportIcon,
  PhoneIcon,
} from "@/components/ui/icons";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const iconClass = "text-[18px]";

  const mainItems = useMemo(
    () => [
      // { title: "Bus", href: "/bus-tickets", icon: <BusIcon className={iconClass} /> },
      { title: "Bus", href: "/bus-tickets", icon: <BusIcon className={iconClass} /> },
      { title: "Air", href: "/air-tickets", icon: <AirIcon className={`${iconClass} rotate-[-15deg]`} /> },
      { title: "Train", href: "train", icon: <TrainIcon className={iconClass} /> },
      { title: "Launch", href: "/launch-tickets", icon: <LaunchIcon className={iconClass} /> },
      { title: "Event", href: "/event-tickets", icon: <EventIcon className={iconClass} /> },
      { title: "Park", href: "/park-tickets", icon: <ParkIcon className={iconClass} />, badge: "Beta" },
    ],
    []
  );

  const extraItems = useMemo(
    () => [
      { title: "Deals and Offer", href: "/deals", icon: <DealsIcon className={iconClass} /> },
      { title: "Insurance Claim", href: "/insurance-claim", icon: <InsuranceIcon className={iconClass} /> },
      { title: "Cancel Ticket", href: "/cancel-ticket", icon: <CancelIcon className={iconClass} /> },
      { title: "Bus Reservation", href: "/bus-reservation", icon: <ReservationIcon className={iconClass} /> },
      { title: "Contact Us", href: "/contact", icon: <SupportIcon className={iconClass} /> },
    ],
    []
  );

  const isActive = (href) => {
    if (href.startsWith("http")) return false;
    return pathname === href;
  };

  // ESC close + body scroll lock
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };

    if (mobileOpen) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const RowLink = ({ item }) => {
    const active = isActive(item.href);

    const rowCls =
      "flex items-center gap-3 px-5 py-3 text-[15px] font-medium " +
      (active ? "text-[#079D49]" : "text-[#111] hover:text-[#079D49]");

    const content = (
      <>
        <span className={active ? "text-[#079D49]" : "text-[#111]"}>{item.icon}</span>
        <span className="flex items-center gap-2">
          {item.title}
          {item.badge ? (
            <span className="ml-2 rounded bg-red-600 px-2 py-[2px] text-[10px] font-semibold uppercase text-white">
              {item.badge}
            </span>
          ) : null}
        </span>
      </>
    );

    if (item.external) {
      return (
        <a
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className={rowCls}
          onClick={() => setMobileOpen(false)}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={item.href} className={rowCls} onClick={() => setMobileOpen(false)}>
        {content}
      </Link>
    );
  };

  return (
    <>
      {/* TOP BAR */}
      <div id="navbar" className="fixed top-0 z-50 h-[70px] w-full">
        <div className="h-[70px] border-b border-solid border-[#EEEEEE] bg-white">
          <div className="mx-auto h-full w-full max-w-6xl px-4 md:px-2.5">
            <div className="flex h-full w-full items-center justify-between">
              <div className="mr-4 flex w-full items-center justify-between">
                <div className="flex justify-start">
                  <Link href="/" className="flex items-center">
                    <Image
                      src="https://www.shohoz.com/assets/img/shohoz_logo_new.png?v=1.0.3"
                      alt="Logo"
                      width={85}
                      height={19}
                      priority
                      className="border-none outline-0"
                    />
                  </Link>

                  {/* Desktop nav (আগের মতোই চাইলে রাখুন) */}
                  <div className="ml-[44px] hidden items-center justify-start lg:flex">
                    {mainItems.map((item) => {
                      const active = isActive(item.href);
                      const base =
                        "mr-2 flex h-10 w-[100px] items-center justify-center rounded-[10px] border-2 text-xs font-semibold";
                      const activeCls = "border-[#B4E1C8] text-[#079D49]";
                      const normalCls =
                        "border-transparent hover:border-[#B4E1C8] hover:text-[#079D49]";
                      const cls = `${base} ${active ? activeCls : normalCls} ${
                        item.badge ? "relative pl-1 justify-start" : ""
                      }`;

                      const content = (
                        <>
                          <span className="nav-icon">{item.icon}</span>
                          <span className="ml-1.5 text-right text-xs font-semibold">
                            {item.title}
                          </span>
                          {item.badge ? (
                            <span className="absolute -right-[2px] -top-[2px] rounded bg-red-600 px-1 py-[1px] text-[10px] font-semibold uppercase text-white">
                              {item.badge}
                            </span>
                          ) : null}
                        </>
                      );

                      if (item.external) {
                        return (
                          <a
                            key={item.title}
                            href={item.href}
                            className={cls}
                            title={item.title}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {content}
                          </a>
                        );
                      }

                      return (
                        <Link key={item.title} href={item.href} className={cls} title={item.title}>
                          {content}
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="ml-5 flex items-center gap-3 max-lg:hidden">
                  <a
                    className="block h-[35px] shrink-0 rounded-2xl bg-[#f88922] px-6 py-2.5 text-right text-xs font-semibold text-white"
                    href="tel:16374"
                  >
                    <span className="mr-2 inline-block">📞</span>1 6 3 7 4
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Link className="text-sm font-medium text-[#079D49] hover:underline" href="/login">
                  Login
                </Link>

                {/* Mobile toggle */}
                <div className="ml-2 lg:hidden">
                  <button
                    type="button"
                    aria-label="Open menu"
                    className="-mr-2 flex h-10 w-10 items-center justify-center bg-transparent outline-none"
                    onClick={() => setMobileOpen(true)}
                  >
                    <MenuIcon className="text-[22px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Mobile Overlay + Left Drawer ===== */}
      {/* Overlay */}
      <div
        className={
          "fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 " +
          (mobileOpen ? "opacity-100" : "pointer-events-none opacity-0")
        }
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={
          "fixed left-0 top-0 z-[70] h-full w-[300px] max-w-[85%] bg-white shadow-xl " +
          "transition-transform duration-300 ease-out " +
          (mobileOpen ? "translate-x-0" : "-translate-x-full")
        }
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-[#EEEEEE] px-5 py-4">
          <Link
            href="/login"
            className="text-[16px] font-semibold"
            onClick={() => setMobileOpen(false)}
          >
            Login
          </Link>

          <button
            type="button"
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center"
            onClick={() => setMobileOpen(false)}
          >
            <CloseIcon className="text-[20px]" />
          </button>
        </div>

        {/* Drawer content */}
        <div className="h-[calc(100%-64px)] overflow-y-auto">
          <div className="py-2">
            {mainItems.map((item) => (
              <RowLink key={item.title} item={item} />
            ))}
          </div>

          <div className="my-2 border-t border-[#EEEEEE]" />

          <div className="py-2">
            {extraItems.map((item) => (
              <RowLink key={item.title} item={item} />
            ))}
          </div>

          <div className="my-2 border-t border-[#EEEEEE]" />

          {/* Phone row */}
          <div className="px-5 py-4">
            <a
              href="tel:16374"
              className="flex items-center gap-3 text-[15px] font-medium text-[#111]"
              onClick={() => setMobileOpen(false)}
            >
              <PhoneIcon className={iconClass} />
              <span>
                1 6 3 7 4 <span className="text-[12px] text-gray-500">(7 AM - 11 PM)</span>
              </span>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}

