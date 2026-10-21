import React, { useState } from 'react';
import { X, Copy, Check, QrCode, Download, Radio, Sparkles } from 'lucide-react';
import { AGENT_INFO, downloadVCard } from '../data/agentData';

interface ShareQRModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareQRModal: React.FC<ShareQRModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://bydmarikina.ph/janna-amores';
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(currentUrl)}&color=0B0B0D`;

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-modal-title"
    >
      <div 
        className="relative w-full max-w-sm rounded-2xl sm:rounded-3xl bg-[#0B0B0D] text-white border border-white/10 shadow-2xl p-4 xs:p-6 sm:p-7 overflow-hidden max-h-[92vh] overflow-y-auto"
      >
        {/* Decorative ambient glow */}
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#E60012]/30 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close QR Modal"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="text-center mb-4 sm:mb-5 pr-6 sm:pr-0">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E60012]/20 border border-[#E60012]/30 text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-2">
            <Radio className="w-3 h-3 text-[#E60012]" />
            <span>NFC & QR Digital Card</span>
          </div>
          <h2 id="share-modal-title" className="text-lg xs:text-xl font-extrabold text-white">
            Scan Digital Business Card
          </h2>
          <p className="text-[11px] sm:text-xs text-[#8A8A8A] mt-1">
            Tap with NFC-enabled phone or scan the QR code to instantly view Janna's profile.
          </p>
        </div>

        {/* QR Code Container */}
        <div className="bg-white p-3 xs:p-4 rounded-xl sm:rounded-2xl shadow-inner mx-auto w-fit mb-4 sm:mb-5 flex flex-col items-center justify-center">
          <img
            src={qrApiUrl}
            alt="QR Code for Janna Amores Digital Calling Card"
            className="w-36 h-36 xs:w-44 xs:h-44 sm:w-48 sm:h-48 rounded-lg"
          />
          <div className="mt-2 text-[9px] xs:text-[10px] font-bold tracking-widest text-[#0B0B0D] uppercase">
            BYD MARIKINA · JANNA AMORES
          </div>
        </div>

        {/* Action Controls */}
        <div className="space-y-2.5">
          <button
            onClick={handleCopyLink}
            className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs flex items-center justify-center gap-2 border border-white/10 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-bold">Link Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#E60012]" />
                <span>Copy Card URL</span>
              </>
            )}
          </button>

          <button
            onClick={downloadVCard}
            className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#E60012] hover:bg-[#B8000F] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md shadow-[#E60012]/30"
          >
            <Download className="w-4 h-4" />
            <span>Download Contact (.vcf)</span>
          </button>
        </div>

        {/* NFC Hint */}
        <div className="mt-4 pt-4 border-t border-white/10 text-center">
          <p className="text-[11px] text-gray-400 leading-snug">
            💡 For physical NFC cards, simply tap the card against the back of an iPhone or Android phone without opening any app.
          </p>
        </div>

      </div>
    </div>
  );
};
