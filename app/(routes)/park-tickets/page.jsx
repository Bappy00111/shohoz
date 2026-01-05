
import FaqSection from '@/components/features/bus/FaqSection'
import Footer from '@/components/features/footer/Footer'
import LaunchPurchaseSteps from '@/components/features/launch/LaunchPurchaseSteps'
import MobileAppSection from '@/components/features/launch/MobileAppSection'
import OneStopSolution from '@/components/features/launch/OneStopSolution'
import TravelOptionsSection from '@/components/features/launch/TravelOptionsSection'
import ParkHero from '@/components/features/park/ParkHero'
import ParkSection from '@/components/features/park/ParkSection'
import React from 'react'

export default function parkTickets() {
  return (
    <>
      <ParkHero />
      <ParkSection />
      <LaunchPurchaseSteps />
      <OneStopSolution />
      <MobileAppSection />
      <TravelOptionsSection />
      <FaqSection />
      <Footer />
    </>
  )
}
