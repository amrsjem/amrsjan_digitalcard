import React, { useState } from 'react';
import { Phone, MessageSquare, Download, MapPin, Mail, QrCode, Sparkles, Check } from 'lucide-react';
import { AGENT_INFO, downloadVCard } from '../data/agentData';

interface HeroCardProps {
  onOpenMessageModal: () => void;
  onOpenQRModal: () => void;
}

export const HeroCard: React.FC<HeroCardProps> = ({ onOpenMessageModal, onOpenQRModal }) => {
  const profileImage = AGENT_INFO.profileImage;
  const [isPhotoViewerOpen, setIsPhotoViewerOpen] = useState(false);
  const [vcardSaved, setVcardSaved] = useState(false);

  const handleSaveContact = () => {
    downloadVCard();
    setVcardSaved(true);
    setTimeout(() => setVcardSaved(false), 3000);
  };

  return (
    <section id="profile" className="relative pt-2 sm:pt-4 pb-6 sm:pb-8 px-2.5 sm:px-6 max-w-4xl mx-auto">
      {/* NFC Hero Container */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#0B0B0D] text-white border border-white/10 shadow-2xl shadow-black/40">
        
        {/* Background Showroom Backdrop with Automotive Red Ambient Lighting */}
        <div className="relative h-40 xs:h-44 sm:h-64 w-full overflow-hidden">
          <img 
            src={AGENT_INFO.images.showroomHero} 
            alt="BYD Dealership Showroom with Electric Vehicles"
            className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
            referrerPolicy="no-referrer"
          />
          {/* Gradients and Overlays for Optimal Text & Subject Contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/65 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#7A0712]/30 via-transparent to-[#0B0B0D]/40" />
          
          {/* Subtle NFC Badge Indicator */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-2">
            <button
              onClick={onOpenQRModal}
              title="Open QR Code for instant sharing"
              aria-label="Open QR Code"
              className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] sm:text-xs text-white/90 hover:bg-black/90 hover:text-white transition-colors"
            >
              <QrCode className="w-3.5 h-3.5 text-[#E60012]" />
              <span className="font-medium">NFC / QR</span>
            </button>
          </div>
        </div>

        {/* Foreground Profile Identity Card */}
        <div className="relative px-4 sm:px-8 pb-6 sm:pb-8 pt-0">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 -mt-12 xs:-mt-14 sm:-mt-20 mb-5">
            
            {/* Profile Avatar / Photo Slot (Zoomed Portrait on Janna) */}
            <div className="relative inline-block self-start group">
              <div 
                onClick={() => setIsPhotoViewerOpen(true)}
                title="Tap to view full profile photo"
                className="w-24 h-24 xs:w-28 xs:h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden bg-[#202124] p-1 ring-3 sm:ring-4 ring-[#E60012]/40 shadow-xl relative cursor-pointer"
              >
                <div className="w-full h-full rounded-xl overflow-hidden relative bg-[#0B0B0D]">
                  <img 
                    src={profileImage} 
                    alt={AGENT_INFO.name} 
                    className="w-full h-full object-cover rounded-xl transition-transform duration-300 scale-[2.5] origin-[50%_62%] group-hover:scale-[2.6]"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Subtle photo expand hint on hover/tap */}
                <div className="absolute inset-1 rounded-xl bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider bg-black/70 px-2 py-0.5 rounded-full">View</span>
                </div>
              </div>

              {/* Dealership verified badge */}
              <div className="absolute -bottom-2 left-2 sm:left-4 bg-[#E60012] text-white text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded shadow flex items-center gap-1 whitespace-nowrap">
                <Sparkles className="w-2.5 h-2.5" />
                <span>OFFICIAL AGENT</span>
              </div>
            </div>

            {/* Quick Dealership and Location Metadata */}
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] sm:text-xs text-[#8A8A8A] sm:text-right pt-2 sm:pt-0">
              <span className="flex items-center gap-1 text-white/90 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#E60012] shrink-0" />
                {AGENT_INFO.dealership}
              </span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span>Marikina City</span>
              <span aria-hidden="true" className="text-white/20">·</span>
              <span className="text-emerald-400 font-medium">Available Today</span>
            </div>
          </div>

          {/* Agent Title & Name Hierarchy */}
          <div className="space-y-1.5 mb-5 sm:mb-6">
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold tracking-wider text-[#E60012] uppercase">
              <span>{AGENT_INFO.position}</span>
              <span aria-hidden="true">·</span>
              <span className="text-white/70">{AGENT_INFO.dealership}</span>
            </div>
            
            <h1 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-white tracking-tight break-words">
              {AGENT_INFO.name}
            </h1>

            <p className="text-xs sm:text-base text-gray-300 max-w-2xl leading-relaxed">
              "{AGENT_INFO.introduction}"
            </p>
          </div>

          {/* Primary Quick Touch Actions — Mobile Optimized Touch Targets (>= 48px) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1">
            
            {/* CALL NOW (Primary #E60012) */}
            <a
              href={`tel:${AGENT_INFO.mobileRaw}`}
              aria-label={`Call Janna Amores at ${AGENT_INFO.mobile}`}
              className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#E60012] hover:bg-[#B8000F] active:scale-[0.98] text-white font-bold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#E60012]/30"
            >
              <Phone className="w-4 h-4 fill-current shrink-0" />
              <span>CALL NOW</span>
            </a>

            {/* MESSAGE Janna */}
            <button
              onClick={onOpenMessageModal}
              aria-label="Message Janna Amores"
              className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-[#202124] hover:bg-[#202124]/80 active:scale-[0.98] text-white font-semibold text-xs sm:text-sm border border-white/15 flex items-center justify-center gap-2 transition-all"
            >
              <MessageSquare className="w-4 h-4 text-[#E60012] shrink-0" />
              <span>MESSAGE Janna</span>
            </button>

            {/* SAVE CONTACT */}
            <button
              onClick={handleSaveContact}
              aria-label="Save contact to phone"
              className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-white hover:bg-gray-100 active:scale-[0.98] text-[#E60012] border-2 border-[#E60012] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs"
            >
              {vcardSaved ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-emerald-700">SAVED TO PHONE</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 shrink-0" />
                  <span>SAVE CONTACT</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Contact Info Strip */}
          <div className="mt-5 pt-4 sm:mt-6 sm:pt-5 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs text-gray-300">
            <a 
              href={`tel:${AGENT_INFO.mobileRaw}`}
              className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 active:scale-[0.99] transition-colors"
            >
              <div className="w-8 h-8 rounded-md bg-[#E60012]/20 text-[#E60012] flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-[#8A8A8A] uppercase font-semibold">Direct Mobile</div>
                <div className="font-semibold text-white tracking-wide">{AGENT_INFO.mobile}</div>
              </div>
            </a>

            <a 
              href={`mailto:${AGENT_INFO.email}`}
              className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 active:scale-[0.99] transition-colors min-w-0"
            >
              <div className="w-8 h-8 rounded-md bg-white/10 text-white flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0 overflow-hidden">
                <div className="text-[10px] text-[#8A8A8A] uppercase font-semibold">Official Email</div>
                <div className="font-semibold text-white truncate block">{AGENT_INFO.email}</div>
              </div>
            </a>
          </div>

        </div>
      </div>

      {/* Full Photo Viewer Lightbox Modal */}
      {isPhotoViewerOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setIsPhotoViewerOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Profile Photo Viewer"
        >
          <div 
            className="relative max-w-sm sm:max-w-md w-full bg-[#0B0B0D] rounded-2xl overflow-hidden border border-white/15 shadow-2xl p-3 sm:p-4 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 px-1 border-b border-white/10 text-xs">
              <span className="font-bold text-white tracking-wide">{AGENT_INFO.name} · {AGENT_INFO.position}</span>
              <button
                onClick={() => setIsPhotoViewerOpen(false)}
                className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close photo view"
              >
                <span className="text-sm font-bold px-1.5">✕</span>
              </button>
            </div>
            
            <div className="mt-3 rounded-xl overflow-hidden max-h-[70vh] flex items-center justify-center bg-black">
              <img 
                src={profileImage} 
                alt={`${AGENT_INFO.name} Full Profile Photo`} 
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
              />
            </div>

            <div className="mt-3 text-[11px] text-[#8A8A8A] flex items-center justify-center gap-2">
              <span className="text-[#E60012] font-semibold">{AGENT_INFO.dealership}</span>
              <span>·</span>
              <span>Official Sales Agent Photo</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
