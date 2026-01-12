

// "use client";

// import React, { useEffect, useMemo, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import logo from '../../../public/img//new-logo/WhatsApp Image 2026-01-05 at 8.00.44 PM.jpeg'
// import { RxHamburgerMenu } from "react-icons/rx";
// import { RiCloseLargeLine } from "react-icons/ri";

// import {
//   AirIcon,
//   BusIcon,
//   TrainIcon,
//   LaunchIcon,
//   EventIcon,
//   ParkIcon,
//   MenuIcon,
//   CloseIcon,
//   DealsIcon,
//   InsuranceIcon,
//   CancelIcon,
//   ReservationIcon,
//   SupportIcon,
//   PhoneIcon,
// } from "@/components/ui/icons";

// export default function Navbar() {
//   const pathname = usePathname();
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const iconClass = "text-[20px]";

//   const mainItems = useMemo(
//     () => [
//       { title: "Bus", href: "/bus-tickets", icon: <BusIcon className={iconClass} /> },
//       { title: "Air", href: "/air-tickets", icon: <AirIcon className={`${iconClass}`} /> },
//       { title: "Launch", href: "/launch-tickets", icon: <LaunchIcon className={iconClass} /> },
//       { title: "Event", href: "/event-tickets", icon: <EventIcon className={iconClass} /> },
//     ],
//     []
//   );

//   const extraItems = useMemo(
//     () => [
//       { title: "Deals and Offer", href: "/deals", icon: <DealsIcon className={iconClass} /> },
//       { title: "Insurance Claim", href: "/insurance-claim", icon: <InsuranceIcon className={iconClass} /> },
//       { title: "Cancel Ticket", href: "/cancel-ticket", icon: <CancelIcon className={iconClass} /> },
//       { title: "Bus Reservation", href: "/bus-reservation", icon: <ReservationIcon className={iconClass} /> },
//       { title: "Contact Us", href: "/contact", icon: <SupportIcon className={iconClass} /> },
//     ],
//     []
//   );

//   const isActive = (href) => {
//     if (href.startsWith("http")) return false;
//     return pathname === href;
//   };

//   // ESC close + body scroll lock
//   useEffect(() => {
//     const onKeyDown = (e) => {
//       if (e.key === "Escape") setMobileOpen(false);
//     };

//     if (mobileOpen) {
//       document.addEventListener("keydown", onKeyDown);
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }

//     return () => {
//       document.removeEventListener("keydown", onKeyDown);
//       document.body.style.overflow = "";
//     };
//   }, [mobileOpen]);

//   const RowLink = ({ item }) => {
//     const active = isActive(item.href);

//     const rowCls =
//       "flex items-center gap-3 px-5 py-3 text-[15px] font-medium " +
//       (active ? "text-[#079D49]" : "text-[#111] hover:text-[#079D49]");

//     const content = (
//       <>
//         <span className={active ? "text-[#079D49]" : "text-[#111]"}>{item.icon}</span>
//         <span className="flex items-center gap-2">
//           {item.title}
//           {item.badge ? (
//             <span className="ml-2 rounded bg-red-600 px-2 py-[2px] text-[10px] font-semibold uppercase text-white">
//               {item.badge}
//             </span>
//           ) : null}
//         </span>
//       </>
//     );

//     if (item.external) {
//       return (
//         <a
//           href={item.href}
//           target="_blank"
//           rel="noreferrer"
//           className={rowCls}
//           onClick={() => setMobileOpen(false)}
//         >
//           {content}
//         </a>
//       );
//     }

//     return (
//       <Link href={item.href} className={rowCls} onClick={() => setMobileOpen(false)}>
//         {content}
//       </Link>
//     );
//   };

//   return (
//     <>
//       {/* TOP BAR */}
//       <div id="navbar" className="fixed top-0 z-50 h-[70px] w-full">
//         <div className="h-[70px] border-b border-solid border-[#EEEEEE] bg-white">
//           <div className="mx-auto h-full w-full max-w-6xl px-4 md:px-2.5">
//             <div className="flex h-full w-full items-center justify-between">
//               <div className="mr-4 flex w-full items-center justify-between">
//                 <div className="flex justify-start">
//                   <Link href="/" className="flex items-center">
//                     <Image
//                       src={logo}
//                       alt="Logo"
//                       width={100}
//                       height={19}
//                       priority
//                       className="border-none outline-0"
//                     />
//                   </Link>

//                   {/* Desktop nav (আগের মতোই চাইলে রাখুন) */}
//                   <div className="ml-[44px] hidden items-center justify-start lg:flex">
//                     {mainItems.map((item) => {
//                       const active = isActive(item.href);
//                       const base =
//                         "mr-2 flex h-10 w-[100px] items-center justify-center rounded-[10px] border-2 text-xs font-semibold";
//                       const activeCls = "border-[#B4E1C8] text-[#079D49]";
//                       const normalCls =
//                         "border-transparent hover:border-[#B4E1C8] hover:text-[#079D49]";
//                       const cls = `${base} ${active ? activeCls : normalCls} ${
//                         item.badge ? "relative pl-1 justify-start" : ""
//                       }`;

//                       const content = (
//                         <>
//                           <span className="nav-icon">{item.icon}</span>
//                           <span className="ml-1.5 text-right text-xs font-semibold">
//                             {item.title}
//                           </span>
//                           {item.badge ? (
//                             <span className="absolute -right-[2px] -top-[2px] rounded bg-red-600 px-1 py-[1px] text-[10px] font-semibold uppercase text-white">
//                               {item.badge}
//                             </span>
//                           ) : null}
//                         </>
//                       );

//                       if (item.external) {
//                         return (
//                           <a
//                             key={item.title}
//                             href={item.href}
//                             className={cls}
//                             title={item.title}
//                             target="_blank"
//                             rel="noreferrer"
//                           >
//                             {content}
//                           </a>
//                         );
//                       }

//                       return (
//                         <Link key={item.title} href={item.href} className={cls} title={item.title}>
//                           {content}
//                         </Link>
//                       );
//                     })}
//                   </div>
//                 </div>

//                 <div className="ml-5 flex items-center gap-3 max-lg:hidden">
//                   <a
//                     className="block h-[35px] shrink-0 rounded-2xl bg-[#f88922] px-6 py-2.5 text-right text-xs font-semibold text-white"
//                     href="tel:16374"
//                   >
//                     <span className="mr-2 inline-block">📞</span>01886669330-01975459519
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-center">
//                 {/* <Link className="text-sm font-medium text-[#079D49] hover:underline" href="/login">
//                   Login
//                 </Link> */}

//                 {/* Mobile toggle */}
//                 <div className="ml-2 lg:hidden">
//                   <button
//                     type="button"
//                     aria-label="Open menu"
//                     className="-mr-2 flex h-10 w-10 items-center justify-center bg-transparent outline-none"
//                     onClick={() => setMobileOpen(true)}
//                   >
//                     <RxHamburgerMenu className="text-[22px]" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ===== Mobile Overlay + Left Drawer ===== */}
//       {/* Overlay */}
//       <div
//         className={
//           "fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 " +
//           (mobileOpen ? "opacity-100" : "pointer-events-none opacity-0")
//         }
//         onClick={() => setMobileOpen(false)}
//         aria-hidden="true"
//       />

//       {/* Drawer */}
//       <aside
//         className={
//           "fixed left-0 top-0 z-[70] h-full w-[300px] max-w-[85%] bg-white shadow-xl " +
//           "transition-transform duration-300 ease-out " +
//           (mobileOpen ? "translate-x-0" : "-translate-x-full")
//         }
//         role="dialog"
//         aria-modal="true"
//         aria-label="Mobile menu"
//       >
//         {/* Drawer header */}
//         <div className="flex items-center justify-between border-b border-[#EEEEEE] px-5 py-4">
//           {/* <Link
//             href="/login"
//             className="text-[16px] font-semibold"
//             onClick={() => setMobileOpen(false)}
//           >
//             Login
//           </Link> */}

//           <button
//             type="button"
//             aria-label="Close menu"
//             className="flex h-10 w-10 items-center justify-center"
//             onClick={() => setMobileOpen(false)}
//           >
//             <RiCloseLargeLine className="text-[22px]" />
//           </button>
//         </div>

//         {/* Drawer content */}
//         <div className="h-[calc(100%-64px)] overflow-y-auto">
//           <div className="py-2">
//             {mainItems.map((item) => (
//               <RowLink key={item.title} item={item} />
//             ))}
//           </div>

//           <div className="my-2 border-t border-[#EEEEEE]" />

//           <div className="py-2">
//             {extraItems.map((item) => (
//               <RowLink key={item.title} item={item} />
//             ))}
//           </div>

//           <div className="my-2 border-t border-[#EEEEEE]" />

//           {/* Phone row */}
//           <div className="px-5 py-4">
//             <a
//               href="tel:16374"
//               className="flex items-center gap-3 text-[15px] font-medium text-[#111]"
//               onClick={() => setMobileOpen(false)}
//             >
//               <PhoneIcon className={iconClass} />
//               <span>
//               01886669330-01975459519
//               </span>
//             </a>
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// }



"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import logo from "../../../public/img/new-logo/WhatsApp Image 2026-01-05 at 8.00.44 PM.jpeg";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";

import {
  AirIcon,
  BusIcon,
  LaunchIcon,
  EventIcon,
  DealsIcon,
  InsuranceIcon,
  CancelIcon,
  ReservationIcon,
  SupportIcon,
  PhoneIcon,
} from "@/components/ui/icons";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");

  const iconClass = "text-[18px]";

  const mainItems = useMemo(
    () => [
      { title: "Bus", href: "/bus-tickets", icon: <BusIcon className={iconClass} /> },
      { title: "Air", href: "/air-tickets", icon: <AirIcon className={iconClass} /> },
      { title: "Launch", href: "/launch-tickets", icon: <LaunchIcon className={iconClass} /> },
      { title: "Event", href: "/event-tickets", icon: <EventIcon className={iconClass} /> },
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

  const isActive = (href) => pathname === href;

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    router.push(`/search?q=${encodeURIComponent(search)}`);
    setSearch("");
  };

  // body scroll lock
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [mobileOpen]);

  const RowLink = ({ item }) => {
    const active = isActive(item.href);
    return (
      <Link
        href={item.href}
        onClick={() => setMobileOpen(false)}
        className={`flex items-center gap-3 px-5 py-3 text-[15px] font-medium ${
          active ? "text-[#079D49]" : "text-[#111] hover:text-[#079D49]"
        }`}
      >
        {item.icon}
        {item.title}
      </Link>
    );
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <div className="fixed top-0 z-50 w-full">
        <div className="h-[70px] border-b border-[#EEEEEE] bg-white shadow-[0_1px_8px_rgba(0,0,0,0.05)]">
          <div className="mx-auto h-full max-w-7xl px-4 md:px-2.5">
            <div className="flex h-full items-center justify-between">
              {/* LEFT */}
              <div className="flex items-center">
                <Link href="/" className="flex items-center">
                  <Image src={logo} alt="Logo" width={110} height={22} priority />
                </Link>

                {/* DESKTOP MENU */}
                <div className="ml-10 hidden items-center lg:flex">
                  {mainItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className={`mr-2 flex h-9 items-center gap-1 rounded-full px-4 text-xs font-semibold transition ${
                        isActive(item.href)
                          ? "bg-[#079D49]/10 text-[#079D49]"
                          : "text-gray-600 hover:bg-[#079D49]/10 hover:text-[#079D49]"
                      }`}
                    >
                      {item.icon}
                      {item.title}
                    </Link>
                  ))}

                  {/* SEARCH (XL only) */}
                  <form
                    onSubmit={handleSearch}
                    className="ml-4 hidden xl:flex h-10 w-[280px] items-center rounded-full border border-[#079D49]/30 bg-white px-4 transition focus-within:border-[#079D49]"
                  >
                    <FiSearch className="text-[16px] text-gray-400" />
                    <input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search bus, air, launch, event"
                      className="ml-2 w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                    />
                  </form>
                </div>
              </div>

              {/* RIGHT */}
              <div className="hidden items-center gap-3 lg:flex">
                <a
                  href="tel:01886669330"
                  className="rounded-full bg-[#f88922] px-5 py-2 text-xs font-semibold text-white"
                >
                  📞 01886669330 - 01975459519
                </a>

                <Link
                  href="/login"
                  className="rounded-full border border-[#079D49] px-5 py-2 text-xs font-semibold text-[#079D49] transition hover:bg-[#079D49] hover:text-white"
                >
                  Login
                </Link>
              </div>

              {/* MOBILE TOGGLE */}
              <button
                className="ml-2 flex h-10 w-10 items-center justify-center lg:hidden"
                onClick={() => setMobileOpen(true)}
              >
                <RxHamburgerMenu className="text-[22px]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE OVERLAY ================= */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* ================= MOBILE DRAWER ================= */}
      <aside
        className={`fixed left-0 top-0 z-[70] h-full w-[300px] max-w-[85%] bg-white shadow-xl transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header (Brand first) */}
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
          <Image src={logo} alt="Logo" width={90} />
          <button onClick={() => setMobileOpen(false)}>
            <RiCloseLargeLine className="text-[22px]" />
          </button>
        </div>



        <div className="mt-4 py-2">
          {mainItems.map((item) => (
            <RowLink key={item.title} item={item} />
          ))}
        </div>

        <div className="my-2 border-t border-gray-200" />

        <div className="py-2">
          {extraItems.map((item) => (
            <RowLink key={item.title} item={item} />
          ))}
        </div>

        <div className="my-2 border-t border-gray-200" />

        <div className="px-5 py-4">
          <a href="tel:01886669330" className="flex items-center gap-3 font-medium">
            <PhoneIcon className={iconClass} />
            01886669330-01975459519
          </a>
        </div>

        {/* Login CTA */}
        <Link
          href="/login"
          onClick={() => setMobileOpen(false)}
          className="mx-5 mt-4 block rounded-xl bg-[#079D49] py-2 text-center text-sm font-semibold text-white"
        >
          Login
        </Link>
      </aside>
    </>
  );
}



