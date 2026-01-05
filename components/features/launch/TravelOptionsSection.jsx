import Image from "next/image";

const stats = [
  { amount: "250 Million+", label: "Tickets Sold" },
  { amount: "3000+", label: "Routes" },
  { amount: "10 Million+", label: "Happy Users" },
];

export default function TravelOptionsSection() {
  return (
    <section className="py-10 md:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-[38px] font-semibold text-[#333] mb-4">
              All your{" "}
              <span className="text-green-500">travel options</span> in one place
            </h2>

            <p className="text-[#333] text-lg md:text-[24px] font-normal mb-8 max-w-lg">
              More than 1,000 trusted travel partners across trains, buses,
              flights, and launch so that you can focus on the journey.
            </p>

            {/* Counters */}
            <div className="flex gap-6 flex-wrap">
              {stats.map((item, index) => (
                <div key={index} className="px-2">
                  <p className="text-xl md:text-2xl font-bold text-[#079d49] ">
                    {item.amount}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="https://www.shohoz.com/launch-tickets/img/travel-option.png"
              alt="Travel options illustration"
              width={393}
              height={310}
              className="w-full max-w-md"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
