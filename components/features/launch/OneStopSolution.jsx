import { oneStopServices } from "@/data/oneStopSolution";
import { ICONS } from "@/ui/icons";

function ServiceCard({ iconKey, title, highlight, description }) {
  const Icon = ICONS[iconKey];

  return (
    <div
      className="
        flex flex-col items-center text-center
        gap-4
        sm:items-start sm:text-left
      "
    >
      {/* Icon Box */}
      <div
        className="
          w-20 h-20
          flex items-center justify-center
          rounded-2xl
          bg-white
          shadow-sm
        "
      >
        {Icon && <Icon className="text-[#079D49]" size={36} />}
      </div>

      {/* Title */}
      <p className="text-lg font-semibold leading-tight">
        <span className="text-[#079D49]">{title} </span>
        <span className="text-gray-900">{highlight}</span>
      </p>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
        {description}
      </p>
    </div>
  );
}

export default function OneStopSolution() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4">
        {/* Small Heading */}
        <p className="text-base md:text-[20px] font-semibold text-[#ffa900] text-center uppercase tracking-widest">
          A one-stop solution for your travel needs
        </p>

        {/* Main Heading */}
        <p className="mt-2 text-[32px] md:text-[36px] font-semibold text-[#079d49] text-center">
          Introducing you to the Shohoz way of life
        </p>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
          {oneStopServices.map((item) => (
            <ServiceCard
              key={item.key}
              iconKey={item.icon}
              title={item.title}
              highlight={item.highlight}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
