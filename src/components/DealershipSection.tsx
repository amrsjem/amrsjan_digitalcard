import React from 'react';
import { MapPin, Navigation, Clock, Building2, ExternalLink } from 'lucide-react';
import { AGENT_INFO } from '../data/agentData';

export const DealershipSection: React.FC = () => {
  return (
    <section id="dealership" className="py-8 sm:py-12 px-3 sm:px-6 max-w-7xl mx-auto">
      <div className="bg-[#0B0B0D] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-xl text-white relative">
        
        {/* Subtle automotive background accent */}
        <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#E60012]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 p-4 xs:p-6 sm:p-10 lg:p-12 items-center relative z-10">
          
          {/* Left Column: Dealership Information */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E60012] mb-1.5">
                <Building2 className="w-3.5 h-3.5" />
                <span>Authorized Dealership</span>
              </div>
              
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold tracking-tight text-white break-words">
                Visit {AGENT_INFO.dealership}
              </h2>
              
              <p className="text-sm sm:text-base text-gray-300 mt-1.5 font-medium leading-relaxed">
                Visit us and explore the latest BYD vehicles.
              </p>
            </div>

            {/* Address Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#E60012]/20 text-[#E60012] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs uppercase tracking-wider text-[#8A8A8A] font-bold">Dealership Address</div>
                  <div className="text-sm sm:text-base font-semibold text-white mt-0.5 leading-snug break-words">
                    {AGENT_INFO.dealershipAddress}
                  </div>
                </div>
              </div>

              <div className="pt-2.5 border-t border-white/10 flex items-center gap-2 text-[11px] sm:text-xs text-gray-400">
                <Clock className="w-3.5 h-3.5 text-[#E60012] shrink-0" />
                <span>Showroom & Test Drive Assistance with Janna Amores</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-1">
              <a
                href={AGENT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[48px] px-5 sm:px-6 py-3 rounded-xl bg-[#E60012] hover:bg-[#B8000F] active:scale-[0.98] text-white font-bold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#E60012]/25"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <a
                href={`tel:${AGENT_INFO.mobileRaw}`}
                className="w-full sm:w-auto min-h-[48px] px-5 sm:px-6 py-3 rounded-xl bg-[#202124] hover:bg-[#202124]/80 active:scale-[0.98] text-white font-semibold text-xs sm:text-sm border border-white/15 flex items-center justify-center gap-2 transition-all"
              >
                <span>Call Before Visiting</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Map Preview Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#202124] rounded-2xl p-4 border border-white/10 space-y-4">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-900 relative group">
                <iframe
                  title="BYD Marikina Map Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(1.05)' }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=BYD%20Marikina%20Mayor%20Gil%20Fernando%20Avenue%20Santo%20Nino%20Marikina%20City&t=&z=15&ie=UTF8&iwloc=&output=embed"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-gray-400 px-1">
                <span className="flex items-center gap-1.5 text-white/80 font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#E60012]" />
                  BYD Marikina Dealership
                </span>
                <a
                  href={AGENT_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E60012] hover:underline flex items-center gap-1 font-semibold"
                >
                  Open in Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
