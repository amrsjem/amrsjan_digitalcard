/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { HeroCard } from './components/HeroCard';
import { VehiclesSection } from './components/VehiclesSection';
import { DealershipSection } from './components/DealershipSection';
import { ContactSection } from './components/ContactSection';
import { SocialSection } from './components/SocialSection';
import { MainCTASection } from './components/MainCTASection';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ShareQRModal } from './components/ShareQRModal';
import { InquiryModal } from './components/InquiryModal';
import { AGENT_INFO, Vehicle } from './data/agentData';

export default function App() {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [selectedVehicleForInquiry, setSelectedVehicleForInquiry] = useState<Vehicle | null>(null);

  const handleOpenInquiryForVehicle = (vehicle: Vehicle) => {
    setSelectedVehicleForInquiry(vehicle);
    setIsInquiryModalOpen(true);
  };

  const handleOpenGeneralMessage = () => {
    setSelectedVehicleForInquiry(null);
    setIsInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F3F3F3] text-[#202124] flex flex-col font-sans pb-24 md:pb-0">
      {/* Top Header Navigation */}
      <HeaderNav onOpenQR={() => setIsQRModalOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* Profile Hero NFC Business Card Section */}
        <HeroCard 
          onOpenMessageModal={handleOpenGeneralMessage}
          onOpenQRModal={() => setIsQRModalOpen(true)}
        />

        {/* Vehicles Section: Explore BYD */}
        <VehiclesSection onInquireVehicle={handleOpenInquiryForVehicle} />

        {/* Dealership Section: Visit BYD Marikina */}
        <DealershipSection />

        {/* Contact Section: Let's Connect */}
        <ContactSection />

        {/* Social Media Section: Connect with Janna */}
        <SocialSection />

        {/* Main CTA Section: Looking for your next BYD? */}
        <MainCTASection onOpenMessageModal={handleOpenGeneralMessage} />

      </main>

      {/* Footer */}
      <footer className="bg-[#0B0B0D] text-white py-8 px-4 sm:px-6 border-t border-white/10 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <div className="font-bold text-white tracking-wide">
              {AGENT_INFO.name} · {AGENT_INFO.position}
            </div>
            <div className="text-[#8A8A8A]">
              {AGENT_INFO.dealership} · {AGENT_INFO.dealershipAddress}
            </div>
          </div>

          <div className="text-[#8A8A8A] text-[11px]">
            <span>Official Digital Business Card & NFC Profile</span>
            <span className="mx-2">·</span>
            <span>All rights reserved</span>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar onOpenMessageModal={handleOpenGeneralMessage} />

      {/* NFC & QR Share Modal */}
      <ShareQRModal 
        isOpen={isQRModalOpen} 
        onClose={() => setIsQRModalOpen(false)} 
      />

      {/* In-Card Message & Vehicle Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        initialVehicle={selectedVehicleForInquiry}
      />
    </div>
  );
}
