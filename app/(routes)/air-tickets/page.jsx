
import AirHeroSearch from '@/components/features/air/AirHeroSearch';
import PopularDestination from '@/components/features/air/PopularDestination';
import PopularPackages from '@/components/features/air/PopularPackages';
import FaqSection from '@/components/features/bus/FaqSection';
import MobileAppPromo from '@/components/features/bus/MobileAppPromo';
import Footer from '@/components/features/footer/Footer';
import React from 'react'

export default function airTickets() {
  return (
    <>
      <AirHeroSearch />
      <PopularPackages />
      <PopularDestination />
      <MobileAppPromo />
      <FaqSection />
    </>
  );
}
