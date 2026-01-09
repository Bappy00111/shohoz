import Image from "next/image";

export default function AttractionCard({ attraction }) {
  return (
    <div className="flex flex-col md:flex-row justify-between mb-10">

      {/* Image */}
      <div className="relative w-full h-64 md:basis-[528px] md:mr-10">
        <Image
          src={attraction.image}
          alt={attraction.title}
          fill
          className="object-cover rounded-3xl"
        />
      </div>

      {/* Content */}
      <div className="w-full mt-4 md:mt-0">
        <h4 className="text-xl md:text-3xl font-semibold text-[#101828]">
          {attraction.title}
        </h4>

        <span className="block text-gray-500 mb-4">
          {attraction.location}
        </span>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          {attraction.description.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>

    </div>
  );
}
