import BusDestinationCard from "./BusDestinationCard";


export default function BusDestinations() {
  return (
    <section className="bg-slate-50 py-8 md:py-10 lg:py-14 px-4 md:px-2.5">
      <h1 className="text-center text-2xl lg:text-3xl  font-semibold text-slate-900">
        Discover Trending Destinations
      </h1>

      <div className="mx-auto w-full max-w-[560px] md:max-w-[680px] lg:max-w-[860px] xl:max-w-6xl ">
        <div className="mt-8 grid grid-cols-12 gap-6">
        {/* Top row */}
        <BusDestinationCard
          title="Chittagong"
          imageSrc="https://s3-ap-south-1.amazonaws.com/shohoz-bus/prod/destinations/Chittagong-1440x600.jpg?v=1.0.3"
          priority
          className="col-span-12 md:col-span-6 h-[240px] md:h-[300px]"
        />
        <BusDestinationCard
          title="Dhaka"
          imageSrc="https://s3-ap-south-1.amazonaws.com/shohoz-bus/prod/destinations/Dhaka-1440x600.jpg?v=1.0.3"
          priority
          className="col-span-12 md:col-span-6 h-[240px] md:h-[300px]"
        />

        {/* Bottom row (Rajshahi বড়, Rangpur মাঝারি, Sylhet ছোট) */}
        <BusDestinationCard
          title="Rajshahi"
          imageSrc="https://s3-ap-south-1.amazonaws.com/shohoz-bus/prod/destinations/Rajshahi-1440x600.webp?v=1.0.3"
          className="col-span-12 md:col-span-5 h-[220px] md:h-[260px]"
        />
        <BusDestinationCard
          title="Rangpur"
          imageSrc="https://s3-ap-south-1.amazonaws.com/shohoz-bus/prod/destinations/Rangpur-1440x600.webp?v=1.0.3"
          className="col-span-12 md:col-span-4 h-[220px] md:h-[260px]"
        />
        <BusDestinationCard
          title="Sylhet"
          imageSrc="https://s3-ap-south-1.amazonaws.com/shohoz-bus/prod/destinations/Sylhet-1440x600.jpg?v=1.0.3"
          className="col-span-12 md:col-span-3 h-[220px] md:h-[260px]"
        />
      </div>
      </div>
    </section>
  );
}
