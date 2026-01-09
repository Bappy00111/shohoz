import FaqSection from '@/components/features/bus/FaqSection'
import Footer from '@/components/features/footer/Footer'
import LaunchHero from '@/components/features/launch/LaunchHero'
import LaunchPurchaseSteps from '@/components/features/launch/LaunchPurchaseSteps'
import MobileAppSection from '@/components/features/launch/MobileAppSection'
import OneStopSolution from '@/components/features/launch/OneStopSolution'
import TravelOptionsSection from '@/components/features/launch/TravelOptionsSection'

export default function launchTickets() {
  return (
    <>
      <LaunchHero />
      <LaunchPurchaseSteps />
      <OneStopSolution />
      <MobileAppSection />
      <TravelOptionsSection />
      <FaqSection />
    </>
  )
}
