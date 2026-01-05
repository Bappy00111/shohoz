"use client";

export default function TextField({ label, icon, placeholder, value, onChange, accent = "text-[#079D49]" }) {
  return (
    <div className="relative flex h-[66px] items-center rounded-2xl border border-[#dcdcdc] bg-white px-5">
      <span className={`absolute left-5 top-2 text-[12px] font-semibold ${accent}`}>{label}</span>
      <span className="mt-4">{icon}</span>
      <input
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="mt-4 w-full bg-transparent pl-3 text-[18px] font-semibold text-[#111] outline-none placeholder:text-[#9aa3af]"
      />
    </div>
  );
}
