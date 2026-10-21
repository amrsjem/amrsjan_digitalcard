import React, { useState, useEffect } from 'react';
import { X, MessageSquare, Send, Mail, Phone, ExternalLink, Check, Sparkles } from 'lucide-react';
import { AGENT_INFO, VEHICLES, Vehicle } from '../data/agentData';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVehicle?: Vehicle | null;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialVehicle,
}) => {
  const [vehicleName, setVehicleName] = useState('General BYD Inquiry');
  const [inquiryType, setInquiryType] = useState('Test Drive');
  const [userName, setUserName] = useState('');
  const [userNote, setUserNote] = useState('');

  useEffect(() => {
    if (initialVehicle) {
      setVehicleName(initialVehicle.name);
    } else {
      setVehicleName('General BYD Inquiry');
    }
  }, [initialVehicle, isOpen]);

  if (!isOpen) return null;

  const messageText = `Hi Janna, I am ${userName ? userName : 'interested in BYD'}. I would like to inquire about the ${vehicleName} for ${inquiryType} at BYD Marikina.${userNote ? ` Additional note: ${userNote}` : ''}`;

  const smsUrl = `sms:${AGENT_INFO.mobileRaw}?body=${encodeURIComponent(messageText)}`;
  const waUrl = `https://wa.me/639978791816?text=${encodeURIComponent(messageText)}`;
  const mailUrl = `mailto:${AGENT_INFO.email}?subject=${encodeURIComponent(`Inquiry for ${vehicleName} - BYD Marikina`)}&body=${encodeURIComponent(messageText)}`;
  const messengerUrl = `https://m.me/janna.312978`;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
    >
      <div className="relative w-full max-w-lg rounded-2xl sm:rounded-3xl bg-[#0B0B0D] text-white border border-white/10 shadow-2xl p-4 xs:p-6 sm:p-8 overflow-hidden max-h-[92vh] overflow-y-auto">
        
        {/* Ambient aura */}
        <div className="absolute -top-16 -left-16 w-48 h-48 bg-[#E60012]/20 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Inquiry Modal"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E60012] mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Message</span>
          </div>
          <h2 id="inquiry-modal-title" className="text-2xl font-extrabold text-white tracking-tight">
            Message Janna Amores
          </h2>
          <p className="text-xs text-[#8A8A8A] mt-1">
            BYD Sales Agent · BYD Marikina · Fast reply for quotes & test drives
          </p>
        </div>

        {/* Quick Config Form */}
        <div className="space-y-4 mb-6">
          <div>
            <label htmlFor="inquiry-modal-name" className="block text-xs font-semibold text-gray-300 mb-1">
              Your Name (Optional)
            </label>
            <input
              id="inquiry-modal-name"
              type="text"
              placeholder="e.g. Juan dela Cruz"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#202124] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#E60012]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="inquiry-modal-vehicle" className="block text-xs font-semibold text-gray-300 mb-1">
                Vehicle
              </label>
              <select
                id="inquiry-modal-vehicle"
                value={vehicleName}
                onChange={(e) => setVehicleName(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-white/10 bg-[#202124] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#E60012]"
              >
                <option value="General BYD Inquiry">General BYD Inquiry</option>
                {VEHICLES.map((v) => (
                  <option key={v.id} value={v.name}>{v.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="inquiry-modal-type" className="block text-xs font-semibold text-gray-300 mb-1">
                Interest Type
              </label>
              <select
                id="inquiry-modal-type"
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-white/10 bg-[#202124] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#E60012]"
              >
                <option value="Test Drive Schedule">Schedule Test Drive</option>
                <option value="Price Quotation & Financing">Price & Financing</option>
                <option value="Unit Availability">Unit Availability</option>
                <option value="Dealership Visit">Showroom Visit</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="inquiry-modal-notes" className="block text-xs font-semibold text-gray-300 mb-1">
              Message or Questions
            </label>
            <textarea
              id="inquiry-modal-notes"
              rows={2}
              placeholder="Ask about color availability, promotions, or trade-in..."
              value={userNote}
              onChange={(e) => setUserNote(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-white/10 bg-[#202124] text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#E60012]"
            />
          </div>

          {/* Message Preview Box */}
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300 font-mono">
            <div className="text-[10px] text-[#8A8A8A] uppercase font-bold mb-1">Preview Message:</div>
            "{messageText}"
          </div>
        </div>

        {/* Messaging Channel Options */}
        <div className="space-y-2.5">
          <div className="text-xs font-bold uppercase tracking-wider text-[#8A8A8A]">
            Choose How to Send:
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {/* SMS Option */}
            <a
              href={smsUrl}
              className="min-h-[48px] px-4 py-3 rounded-xl bg-[#E60012] hover:bg-[#B8000F] active:scale-[0.98] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-[#E60012]/30"
            >
              <Send className="w-4 h-4" />
              <span>Send via SMS</span>
            </a>

            {/* WhatsApp Option */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] px-4 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] active:scale-[0.98] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp / Viber</span>
            </a>

            {/* Facebook Messenger */}
            <a
              href={messengerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] px-4 py-3 rounded-xl bg-[#0084FF] hover:bg-[#0070D8] active:scale-[0.98] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <ExternalLink className="w-4 h-4" />
              <span>FB Messenger</span>
            </a>

            {/* Email Option */}
            <a
              href={mailUrl}
              className="min-h-[48px] px-4 py-3 rounded-xl bg-[#202124] hover:bg-white/10 active:scale-[0.98] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-white/20 transition-all"
            >
              <Mail className="w-4 h-4 text-[#E60012]" />
              <span>Email Janna</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
