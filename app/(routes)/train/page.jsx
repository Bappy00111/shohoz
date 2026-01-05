
import PaymentPartners from '@/components/features/train/PaymentPartners';
import PurchaseInstructions from '@/components/features/train/PurchaseInstructions';
import SiteFooter from '@/components/features/train/SiteFooter';
import TicketPurchaseSteps from '@/components/features/train/TicketPurchaseSteps';
import TrainSearchWidget from '@/components/features/train/TrainSearchWidget';
import React from 'react'

export default function train() {
  return (
    <>
      <TrainSearchWidget />
      <TicketPurchaseSteps />
      <PurchaseInstructions />
      <PaymentPartners />
      <SiteFooter />
    </>
  );
}
