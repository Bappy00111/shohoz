import parks from "@/data/parks"

export default function ParkSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">

        {/* ===== Header ===== */}
        <div className="text-center mb-12">
          <p className="text-lg font-semibold uppercase tracking-widest text-[#ffa900]">
            FEELING BORED
          </p>
          <h2 className="mt-3 text-[36px] font-semibold text-[#079d49]">
            Take a Break at an Amusement Park
          </h2>
        </div>

        {/* ===== Cards ===== */}
        <div className="space-y-6">
          {parks.map((park) => (
            <div
              key={park.id}
              className="flex flex-col md:flex-row items-center rounded-xl border border-gray-200   bg-white shadow-sm"
            >
              {/* Left: Logo */}
              <div className="flex justify-center p-6 md:w-1/4">
                <img
                  src={park.image}
                  alt={park.name}
                  className="max-h-28 object-contain"
                />
              </div>

              {/* Middle: Info */}
              <div className="flex-1 px-6 py-4">
                <h3 className="text-xl font-semibold mb-4">
                  {park.name}
                </h3>

                {/* Rides */}
                <p className="text-sm text-gray-500 mb-2">Rides:</p>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {park.rides.map((ride, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-green-50 px-4 py-1 text-sm font-semibold text-green-700"
                    >
                      {ride}
                    </span>
                  ))}

                  {park.extraRides && (
                    <span className="text-sm font-medium text-green-600">
                      + {park.extraRides} More Rides
                    </span>
                  )}
                </div>

                {/* Locations */}
                <p className="text-sm text-gray-500 mb-2">Locations:</p>
                <div className="flex flex-wrap gap-2">
                  {park.locations.map((loc, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-green-50 px-4 py-1 text-sm font-semibold text-green-700"
                    >
                      {loc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Price & Button */}
              <div className="flex flex-col justify-between border-t  border-gray-200 md:border-t-0 md:border-l p-6 md:w-1/4 h-full">
                <div className="flex items-center justify-center gap-2 text-lg font-semibold text-gray-700">
                  <span className="text-green-600">৳</span>
                  {park.price.replace("৳", "")}
                </div>

                <button className="mt-6 rounded-lg bg-green-600 px-6 py-3 text-white font-semibold hover:bg-green-700">
                  View Park
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
