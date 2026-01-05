import BusDestinations from '@/components/features/bus/BusDestinations'
import BusHero from '@/components/features/bus/BusHero'
import FaqSection from '@/components/features/bus/FaqSection'
import MobileAppPromo from '@/components/features/bus/MobileAppPromo'
import TrustedOperatorsSection from '@/components/features/bus/TrustedOperatorsSection'
import TrustedShohozSection from '@/components/features/bus/TrustedShohozSection'
import Footer from '@/components/features/footer/Footer'
import React from 'react'

export default function home() {
  return (
    <>
      <BusHero />
      <BusDestinations />
      <TrustedOperatorsSection />
      <TrustedShohozSection />
      <MobileAppPromo />
      <FaqSection />
      <Footer />
    </>
  )
}
