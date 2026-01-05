import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="w-full bg-white">
      {/* Top disclaimer */}
      <div className="mx-auto max-w-6xl px-4 py-6">
        <p className="text-center text-[13px] leading-relaxed text-slate-800">
          The tickets are issued by Bangladesh Railway Integrated Ticketing System (BRITS) and
          Shohoz-Synesis-Vincen JV is responsible for designing, development, implementation,
          technical operation &amp; maintenance of the system.
        </p>
      </div>

      {/* Green divider */}
      <div className="h-[2px] w-full bg-[#0b7a59]" />

      {/* Bottom bar */}
      <div className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-6">
          <div className="grid items-center gap-6 md:grid-cols-3">
            {/* Left: Powered by */}
            <div className="text-center md:text-left">
              <p className="text-[12px] text-slate-700">Powered by</p>
              <div className="mt-2 inline-flex items-center gap-2">
                {/* চাইলে এখানে আপনার logo দিন */}
                <span className="text-[18px] font-semibold text-[#0b7a59]">
                  shohoz
                </span>
                <span className="text-[18px] font-semibold text-slate-700">
                  -Synesis-Vincen JV
                </span>
              </div>
            </div>

            {/* Middle: Links */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-[13px] font-medium">
                <Link
                  href="/terms"
                  className="text-[#0b7a59] hover:underline"
                >
                  Terms and Conditions
                </Link>
                <span className="text-slate-500">|</span>
                <Link
                  href="/privacy"
                  className="text-[#0b7a59] hover:underline"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>

            {/* Right: Bangladesh Railway */}
            <div className="flex items-center justify-center gap-3 md:justify-end">
              {/* Bangladesh Railway logo (আপনার logo path দিন) */}
              <div className="relative h-10 w-10">
                <Image
                  src="https://train.shohoz.com/assets/img/home/bangladesh-railway.png"
                  alt="Bangladesh Railway logo"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="text-left">
                <p className="text-[14px] font-semibold text-[#d97706]">
                  Bangladesh Railway
                </p>
                <p className="text-[12px] text-slate-700">
                  নিরাপদ, আরামদায়ক, সাশ্রয়ী
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
