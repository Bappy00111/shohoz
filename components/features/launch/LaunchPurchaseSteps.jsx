import { FaSearch } from "react-icons/fa";
import { FaHandPointer } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";
import { PiHandTap } from "react-icons/pi";

const STEPS = [
  {
    title: "Search",
    desc: "Choose your origin, destination, journey dates and search for launches",
    Icon: RiSearchLine,
  },
  {
    title: "Select",
    desc: "Select your desired trip and choose your seats",
    Icon: PiHandTap,
  },
  {
    title: "Pay",
    desc: "Pay by bank cards or mobile banking",
    Icon: FaMobileAlt,
  },
];

function StepItem({ Icon, title, desc }) {
  return (
    <div className="flex items-start justify-center gap-6">
      {/* Icon + soft shadow block like screenshot */}
      <div className="relative shrink-0">
        <div className="absolute left-4 top-4 h-12 w-12 rounded-xl bg-[#079D49]/10" />
        <div className="relative flex h-14 w-14 items-center justify-center">
          <Icon className="h-10 w-10 text-[#079D49]" />
        </div>
      </div>

      {/* Text */}
      <div className="max-w-[260px] text-left">
        <p className="text-3xl font-semibold text-slate-800">{title}</p>
        <p className="mt-3 text-base leading-relaxed text-slate-600">{desc}</p>
      </div>
    </div>
  );
}

export default function LaunchPurchaseSteps() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14 text-2xl md:text-[36px]">
        {/* Heading (green + black like screenshot) */}
        <h2 className="text-center text-3xl font-semibold md:text-[36px]">
          <span className="text-[#0b7a59]">Buy launch tickets</span>{" "}
          <span className="text-slate-800">in 3 easy steps</span>
        </h2>

        {/* Items */}
        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-6">
          {STEPS.map((s) => (
            <StepItem key={s.title} Icon={s.Icon} title={s.title} desc={s.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
