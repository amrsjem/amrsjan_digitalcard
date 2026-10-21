import React from 'react';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { AGENT_INFO } from '../data/agentData';

interface MainCTASectionProps {
  onOpenMessageModal: () => void;
}

export const MainCTASection: React.FC<MainCTASectionProps> = ({ onOpenMessageModal }) => {
  return (
    <section className="py-8 sm:py-12 px-3 sm:px-6 max-w-7xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#0B0B0D] border border-white/10 p-5 xs:p-8 sm:p-12 lg:p-16 text-center text-white shadow-2xl">
        
        {/* Subtle red automotive ambient aura */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-[#E60012]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 right-10 w-56 sm:w-72 h-56 sm:h-72 bg-[#7A0712]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E60012] mb-1">
            <span>BYD Sales Assistance</span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white break-words">
            Looking for your next BYD?
          </h2>

          <p className="text-xs sm:text-base lg:text-lg text-gray-300 font-normal">
            Let's find the right BYD vehicle for you.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 pt-4 sm:pt-6 w-full">
            <button
              onClick={onOpenMessageModal}
              aria-label="Message Janna"
              className="w-full sm:w-auto min-h-[48px] px-6 sm:px-8 py-3.5 rounded-xl bg-[#E60012] hover:bg-[#B8000F] active:scale-[0.98] text-white font-bold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#E60012]/30"
            >
              <MessageSquare className="w-4 h-4 shrink-0" />
              <span>MESSAGE JANNA</span>
            </button>

            <a
              href={`tel:${AGENT_INFO.mobileRaw}`}
              aria-label={`Call ${AGENT_INFO.mobile}`}
              className="w-full sm:w-auto min-h-[48px] px-6 sm:px-8 py-3.5 rounded-xl bg-[#202124] hover:bg-white/10 active:scale-[0.98] text-white font-bold text-xs sm:text-sm border border-white/20 flex items-center justify-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 text-[#E60012] shrink-0" />
              <span>CALL {AGENT_INFO.mobile}</span>
            </a>
          </div>
          
          <div className="pt-6 text-xs text-[#8A8A8A]">
            <span>Janna Amores</span>
            <span className="mx-2">·</span>
            <span>BYD Sales Agent</span>
            <span className="mx-2">·</span>
            <span>BYD Marikina</span>
          </div>
        </div>
      </div>
    </section>
  );
};
