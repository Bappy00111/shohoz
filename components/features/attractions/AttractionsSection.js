import { attractions } from "@/lib/attractions.data";
import AttractionCard from "./AttractionCard";

export default function AttractionsSection() {
  return (
    <section className="bg-white pt-12 pb-2 md:py-12">
      <div className="max-w-6xl mx-auto px-4 lg:px-2">

        <h3 className="text-[#101828] text-2xl md:text-4xl font-bold mb-10">
          Must-see attractions
        </h3>

        {attractions.map((attraction) => (
          <AttractionCard
            key={attraction.id}
            attraction={attraction}
          />
        ))}

      </div>
    </section>
  );
}
