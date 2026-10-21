import React, { useState } from 'react';
import { Phone, Mail, MapPin, Download, Check, Send, MessageSquare, Copy } from 'lucide-react';
import { AGENT_INFO, downloadVCard, VEHICLES } from '../data/agentData';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [vcardSaved, setVcardSaved] = useState(false);
  
  // Quick message builder state
  const [selectedVehicle, setSelectedVehicle] = useState('BYD ATTO 3');
  const [inquiryType, setInquiryType] = useState('Test Drive');
  const [customerName, setCustomerName] = useState('');
  const [customMessage, setCustomMessage] = useState('');

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSaveContact = () => {
    downloadVCard();
    setVcardSaved(true);
    setTimeout(() => setVcardSaved(false), 3000);
  };

  const fullMessageBody = `Hi Janna, I'm ${customerName || 'a client'} interested in the ${selectedVehicle} (${inquiryType}) at BYD Marikina. ${customMessage ? `Note: ${customMessage}` : ''}`;
  const smsHref = `sms:${AGENT_INFO.mobileRaw}?body=${encodeURIComponent(fullMessageBody)}`;
  const emailHref = `mailto:${AGENT_INFO.email}?subject=${encodeURIComponent(`BYD Inquiry: ${selectedVehicle} (${inquiryType})`)}&body=${encodeURIComponent(fullMessageBody)}`;

  return (
    <section id="connect" className="py-8 sm:py-12 px-3 sm:px-6 max-w-7xl mx-auto">
      <div className="mb-6 sm:mb-8">
        <div className="text-xs font-bold uppercase tracking-wider text-[#E60012] mb-1.5">
          Direct Channels
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B0B0D] tracking-tight">
          Let's Connect
        </h2>
        <p className="text-xs sm:text-sm text-[#8A8A8A] mt-1 max-w-xl">
          Get in touch with Janna Amores for vehicle inquiries, dealership appointments, and test drives.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        
        {/* Left Column: Contact Cards */}
        <div className="lg:col-span-6 space-y-3.5 sm:space-y-4">
          
          {/* Phone Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-black/5 shadow-xs hover:shadow-md transition-shadow">
            <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-3">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#E60012]/10 text-[#E60012] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs font-bold text-[#8A8A8A] uppercase">Mobile Number</div>
                  <a 
                    href={`tel:${AGENT_INFO.mobileRaw}`}
                    className="text-base sm:text-lg font-bold text-[#0B0B0D] hover:text-[#E60012] transition-colors tracking-wide block truncate"
                  >
                    {AGENT_INFO.mobile}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end xs:self-center shrink-0 w-full xs:w-auto">
                <button
                  onClick={() => copyToClipboard(AGENT_INFO.mobile, 'phone')}
                  title="Copy Phone Number"
                  aria-label="Copy Phone Number"
                  className="p-2 rounded-lg text-gray-500 hover:text-black hover:bg-gray-100 transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center border border-gray-200 xs:border-transparent"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href={`tel:${AGENT_INFO.mobileRaw}`}
                  className="flex-1 xs:flex-initial px-4 py-2 text-xs font-bold text-white bg-[#E60012] hover:bg-[#B8000F] rounded-lg transition-colors min-h-[40px] flex items-center justify-center text-center shadow-xs"
                >
                  Call
                </a>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-black/5 shadow-xs hover:shadow-md transition-shadow">
            <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-3">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gray-100 text-[#0B0B0D] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0 overflow-hidden">
                  <div className="text-[10px] sm:text-xs font-bold text-[#8A8A8A] uppercase">Email Address</div>
                  <a 
                    href={`mailto:${AGENT_INFO.email}`}
                    className="text-sm sm:text-base font-bold text-[#0B0B0D] hover:text-[#E60012] transition-colors truncate block"
                  >
                    {AGENT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end xs:self-center shrink-0 w-full xs:w-auto">
                <button
                  onClick={() => copyToClipboard(AGENT_INFO.email, 'email')}
                  title="Copy Email Address"
                  aria-label="Copy Email Address"
                  className="p-2 rounded-lg text-gray-500 hover:text-black hover:bg-gray-100 transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center border border-gray-200 xs:border-transparent"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href={`mailto:${AGENT_INFO.email}`}
                  className="flex-1 xs:flex-initial px-4 py-2 text-xs font-bold text-[#0B0B0D] bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors min-h-[40px] flex items-center justify-center text-center"
                >
                  Email
                </a>
              </div>
            </div>
          </div>

          {/* Personal Location Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-black/5 shadow-xs hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gray-100 text-[#0B0B0D] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] sm:text-xs font-bold text-[#8A8A8A] uppercase">Personal Address</div>
                <div className="text-xs sm:text-sm font-semibold text-[#0B0B0D] mt-0.5 leading-snug break-words">
                  {AGENT_INFO.personalAddress}
                </div>
                <div className="text-[11px] text-[#8A8A8A] mt-1">
                  Antipolo City, Rizal
                </div>
              </div>
            </div>
          </div>

          {/* Prominent Save Contact Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0B0B0D] text-white border border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3.5">
            <div>
              <div className="text-[11px] font-bold text-[#E60012] uppercase tracking-wider">vCard / Digital Contact</div>
              <div className="text-sm sm:text-base font-bold text-white mt-0.5">Save Janna to Your Contacts</div>
              <p className="text-[11px] text-gray-400 mt-0.5">One-tap import compatible with iPhone and Android.</p>
            </div>

            <button
              onClick={handleSaveContact}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white hover:bg-gray-100 active:scale-95 text-[#E60012] font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shrink-0 min-h-[44px]"
            >
              {vcardSaved ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">Contact Saved</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>SAVE CONTACT</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* Right Column: Quick Vehicle Inquiry Builder */}
        <div className="lg:col-span-6 bg-white rounded-2xl sm:rounded-3xl p-4 xs:p-6 sm:p-8 border border-black/5 shadow-md">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E60012] mb-1">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Fast In-Card Inquiry</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B0B0D] tracking-tight mb-1.5">
            Send an Inquiry
          </h3>
          <p className="text-xs text-[#8A8A8A] mb-4 sm:mb-5">
            Configure your message below to send directly via SMS or Email with one tap.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label htmlFor="client-name" className="block text-xs font-semibold text-gray-700 mb-1">
                Your Name
              </label>
              <input
                id="client-name"
                type="text"
                placeholder="e.g. Maria Santos"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E60012] bg-[#F3F3F3]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="vehicle-model" className="block text-xs font-semibold text-gray-700 mb-1">
                  Vehicle Model
                </label>
                <select
                  id="vehicle-model"
                  value={selectedVehicle}
                  onChange={(e) => setSelectedVehicle(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E60012] bg-[#F3F3F3]"
                >
                  {VEHICLES.map((v) => (
                    <option key={v.id} value={v.name}>{v.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="inquiry-type" className="block text-xs font-semibold text-gray-700 mb-1">
                  Inquiry Purpose
                </label>
                <select
                  id="inquiry-type"
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E60012] bg-[#F3F3F3]"
                >
                  <option value="Test Drive">Test Drive Schedule</option>
                  <option value="Quotation">Price Quotation & Financing</option>
                  <option value="Vehicle Specs">Features & Availability</option>
                  <option value="Dealership Visit">Showroom Visit Appointment</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="inquiry-notes" className="block text-xs font-semibold text-gray-700 mb-1">
                Additional Notes (Optional)
              </label>
              <textarea
                id="inquiry-notes"
                rows={2}
                placeholder="Preferred date/time, questions, or trade-in queries..."
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#E60012] bg-[#F3F3F3]"
              />
            </div>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={smsHref}
                className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#E60012] hover:bg-[#B8000F] active:scale-[0.98] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <Send className="w-4 h-4" />
                <span>Send SMS Direct</span>
              </a>

              <a
                href={emailHref}
                className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#0B0B0D] hover:bg-[#202124] active:scale-[0.98] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Send via Email</span>
              </a>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};
