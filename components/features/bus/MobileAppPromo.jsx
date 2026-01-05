import Image from "next/image";

const features = [
  "Faster and easier booking",
  "Get alerts before every departure",
  "Easy access to your tickets",
  "Onboard with digital tickets",
];

function BulletIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      className="shrink-0"
      aria-hidden="true"
    >
      <rect x="0.5" y="0.5" width="21" height="21" rx="10.5" fill="white" stroke="#EEEEEE" />
      <path
        d="M13.5001 11.0003L9.96422 14.5361L8.78589 13.357L11.1434 11.0003L8.78589 8.64363L9.96422 7.46447L13.5001 11.0003Z"
        fill="#16D378"
      />
    </svg>
  );
}

export default function MobileAppPromo() {
  return (
    <section className="bg-white py-6 sm:py-12">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 rounded-2xl p-4 sm:p-6">
          {/* Left image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <Image
              src="https://s3-ap-south-1.amazonaws.com/shohoz-bus/prod/app-illustration-v2.webp?v=1.0.4"
              alt="app-illustrator"
              width={508}
              height={420}
              className="w-[95%] max-w-[520px] h-auto"
              priority={false}
            />
          </div>

          {/* Right content */}
          <div className="w-full max-w-[520px]">
            <h2 className="text-2xl lg:text-4xl font-semibold text-left text-gray-900 mb-5 sm:mb-2.5">
              Get More Out of Shohoz with our{" "}
              <span className="text-emerald-600">mobile app</span>
            </h2>

            {/* Feature list */}
            <div className="flex flex-col sm:flex-row flex-wrap items-start justify-between gap-y-2">
              {features.map((text, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-2.5 ${
                    i % 2 === 0 ? "w-[95%] sm:w-[45%]" : "w-[95%] sm:w-[55%]"
                  }`}
                >
                  <BulletIcon />
                  <p className="text-sm font-normal text-left text-gray-900">{text}</p>
                </div>
              ))}
            </div>

            {/* Store buttons */}
            <div className="mt-3 sm:mt-6 flex flex-wrap items-center gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.shohoz.rides"
                target="_blank"
                rel="noreferrer"
                className="inline-flex"
              >
                <Image
                  src="https://s3-ap-south-1.amazonaws.com/shohoz-bus/prod/google-play-store.png?v=1.0.4"
                  alt="google-play-store"
                  width={191}
                  height={63}
                  className="w-[120px] md:w-[136px] h-auto"
                />
              </a>

              <a
                href="https://apps.apple.com/us/app/shohoz-app/id1354321445?ls=1"
                target="_blank"
                rel="noreferrer"
                className="inline-flex"
              >
                <Image
                  src="https://s3-ap-south-1.amazonaws.com/shohoz-bus/prod/apple-app-store.png?v=1.0.4"
                  alt="apple-app-store"
                  width={216}
                  height={63}
                  className="w-[125px] md:w-[150px] h-auto"
                />
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=8801999916374&text=hi&utm_source=website&utm_medium=app_link&utm_campaign=whatsapp_booking"
                target="_blank"
                rel="noreferrer"
                className="inline-flex"
              >
                <Image
                  src="https://s3-ap-south-1.amazonaws.com/shohoz-bus/prod/book-on-whatsapp.png?v=1.0.4"
                  alt="book-on-whatsapp"
                  width={216}
                  height={63}
                  className="w-[122px] md:w-[144px] h-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
