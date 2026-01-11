import Image from "next/image";
import Link from "next/link";

const benefits = [
  "Faster and easier booking",
  "Get alerts before every departure",
  "Easy access to your tickets",
  "Onboard with digital tickets",
];

export default function MobileAppSection() {
  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center ">

          {/* Left Image */}
          <div className="flex justify-center">
            <Image
              src="https://www.shohoz.com/launch-tickets/img/mobile-app-illustration.png"
              alt="Mobile app illustration"
              width={508}
              height={420}
              className="w-full max-w-md"
              priority
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
              Get More Out of Shohoz with our{" "}
              <span className="text-green-500">mobile app</span>
            </h2>

            {/* Benefits */}
            <ul className="space-y-4 mb-8">
              {benefits.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full border border-gray-200">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <path
                        d="M13.5 11L9.964 14.536 8.786 13.357 11.143 11 8.786 8.644 9.964 7.464 13.5 11Z"
                        fill="#16D378"
                      />
                    </svg>
                  </span>
                  <p className="text-gray-700 text-base">{item}</p>
                </li>
              ))}
            </ul>

            {/* Store Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://play.google.com/store/apps/details?id=com.shohoz.rides"
                target="_blank"
              >
                <Image
                  src="https://www.shohoz.com/launch-tickets/img/google-play-store.png"
                  alt="Google Play Store"
                  width={191}
                  height={63}
                  className="h-14 w-auto"
                />
              </Link>

              <Link
                href="https://apps.apple.com/us/app/shohoz-app/id1354321445"
                target="_blank"
              >
                <Image
                  src="https://www.shohoz.com/launch-tickets/img/apple-app-store.png"
                  alt="Apple App Store"
                  width={216}
                  height={63}
                  className="h-14 w-auto"
                />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
