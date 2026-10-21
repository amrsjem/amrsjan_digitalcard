import React from 'react';
import { QrCode, UserCheck } from 'lucide-react';
import { downloadVCard } from '../data/agentData';

interface HeaderNavProps {
  onOpenQR: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ onOpenQR }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#0B0B0D]/95 backdrop-blur-md border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-6">
        {/* Zone 1: Brand Wordmark */}
        <a 
          href="#profile" 
          className="flex items-center gap-2 text-sm sm:text-base font-bold tracking-wider text-white whitespace-nowrap shrink-0 hover:text-white/90 transition-colors"
        >
          <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded bg-[#E60012] text-white font-black text-[11px] sm:text-xs tracking-widest shadow-xs">
            BYD
          </span>
          <span className="font-display font-semibold tracking-tight text-xs sm:text-base">
            BYD MARIKINA
          </span>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#8A8A8A]">
          <a href="#profile" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Profile
          </a>
          <a href="#vehicles" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Vehicles
          </a>
          <a href="#dealership" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Dealership
          </a>
          <a href="#connect" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Let's Connect
          </a>
        </nav>

        {/* Zone 3: Primary Actions (Responsive for all mobile sizes) */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          <button
            onClick={onOpenQR}
            title="Scan or Share NFC / QR Code"
            aria-label="Scan or Share NFC / QR Code"
            className="p-2 sm:px-3 sm:py-2 text-xs font-medium text-white/90 bg-white/10 hover:bg-white/15 active:scale-95 border border-white/10 rounded-lg transition-colors flex items-center gap-1.5 min-h-[40px] sm:min-h-[44px]"
          >
            <QrCode className="w-4 h-4 text-[#E60012]" />
            <span className="hidden sm:inline">QR Code</span>
          </button>
          
          <button
            onClick={downloadVCard}
            aria-label="Save Contact"
            className="px-2.5 sm:px-3.5 py-2 text-xs font-semibold text-white bg-[#E60012] hover:bg-[#B8000F] active:scale-95 rounded-lg transition-all shadow-md shadow-[#E60012]/20 flex items-center gap-1.5 whitespace-nowrap min-h-[40px] sm:min-h-[44px]"
          >
            <UserCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Save<span className="hidden xs:inline"> Contact</span></span>
          </button>
        </div>
      </div>
    </header>
  );
};
