import React, { useState } from 'react';
import { Phone, MessageSquare, Download, Check } from 'lucide-react';
import { AGENT_INFO, downloadVCard } from '../data/agentData';

interface MobileStickyBarProps {
  onOpenMessageModal: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenMessageModal }) => {
  const [vcardSaved, setVcardSaved] = useState(false);

  const handleSaveContact = () => {
    downloadVCard();
    setVcardSaved(true);
    setTimeout(() => setVcardSaved(false), 3000);
  };

  return (
    <aside 
      aria-label="Quick contact actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0B0B0D]/95 backdrop-blur-lg border-t border-white/10 px-3 py-2.5 pb-safe shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto items-center">
        
        {/* CALL button */}
        <a
          href={`tel:${AGENT_INFO.mobileRaw}`}
          aria-label="Call Janna Amores"
          className="min-h-[44px] px-2 py-2 rounded-xl bg-[#E60012] hover:bg-[#B8000F] active:scale-95 text-white flex flex-col items-center justify-center text-center transition-all shadow-md shadow-[#E60012]/30"
        >
          <Phone className="w-4 h-4 fill-current mb-0.5" />
          <span className="text-[11px] font-extrabold uppercase tracking-tight">CALL</span>
        </a>

        {/* MESSAGE button */}
        <button
          onClick={onOpenMessageModal}
          aria-label="Message Janna Amores"
          className="min-h-[44px] px-2 py-2 rounded-xl bg-[#202124] hover:bg-white/10 active:scale-95 text-white border border-white/15 flex flex-col items-center justify-center text-center transition-all"
        >
          <MessageSquare className="w-4 h-4 text-[#E60012] mb-0.5" />
          <span className="text-[11px] font-bold uppercase tracking-tight">MESSAGE</span>
        </button>

        {/* SAVE CONTACT button */}
        <button
          onClick={handleSaveContact}
          aria-label="Save Janna Amores to contacts"
          className="min-h-[44px] px-2 py-2 rounded-xl bg-white hover:bg-gray-100 active:scale-95 text-[#E60012] border border-[#E60012] flex flex-col items-center justify-center text-center transition-all shadow-xs"
        >
          {vcardSaved ? (
            <>
              <Check className="w-4 h-4 text-emerald-600 mb-0.5" />
              <span className="text-[11px] font-extrabold uppercase tracking-tight text-emerald-600">SAVED</span>
            </>
          ) : (
            <>
              <Download className="w-4 h-4 mb-0.5" />
              <span className="text-[11px] font-extrabold uppercase tracking-tight">SAVE</span>
            </>
          )}
        </button>

      </div>
    </aside>
  );
};
