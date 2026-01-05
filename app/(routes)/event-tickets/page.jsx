
import FaqSection from '@/components/features/bus/FaqSection'
import ActiveEventsSection from '@/components/features/event/ActiveEventsSection'
import EventHero from '@/components/features/event/EventHero'
import PastEventsSection from '@/components/features/event/PastEventsSection'
import Footer from '@/components/features/footer/Footer'
import LaunchPurchaseSteps from '@/components/features/launch/LaunchPurchaseSteps'
import MobileAppSection from '@/components/features/launch/MobileAppSection'
import OneStopSolution from '@/components/features/launch/OneStopSolution'
import TravelOptionsSection from '@/components/features/launch/TravelOptionsSection'
import React from 'react'

export default function eventTickets() {
  return (
    <>
      <EventHero />
      <ActiveEventsSection />
      <PastEventsSection />
      <LaunchPurchaseSteps />
      <OneStopSolution />
      <MobileAppSection />
      <TravelOptionsSection />
      <FaqSection />
      <Footer />

    </>
  )
}
