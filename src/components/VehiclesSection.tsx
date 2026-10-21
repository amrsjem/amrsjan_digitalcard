import React, { useState } from 'react';
import { ChevronRight, Sparkles, MessageCircle } from 'lucide-react';
import { VEHICLES, Vehicle } from '../data/agentData';

interface VehiclesSectionProps {
  onInquireVehicle: (vehicle: Vehicle) => void;
}

export const VehiclesSection: React.FC<VehiclesSectionProps> = ({ onInquireVehicle }) => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Sedan' | 'SUV' | 'Hatchback' | 'Truck' | 'MPV'>('All');

  const filteredVehicles = selectedFilter === 'All' 
    ? VEHICLES 
    : VEHICLES.filter(v => v.category === selectedFilter);

  return (
    <section id="vehicles" className="py-8 sm:py-12 px-3 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E60012] mb-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>BYD Electric & Hybrid Lineup</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B0B0D] tracking-tight">
              Explore BYD
            </h2>
            <p className="text-xs sm:text-sm text-[#8A8A8A] mt-1 max-w-xl">
              Discover a modern electric driving experience with BYD. Explore cutting-edge technology, spacious comfort, and eco-friendly mobility.
            </p>
          </div>

          {/* Interactive Category Filter Tabs (Zero-Pill Discipline: Segmented Controls with smooth mobile scroll) */}
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-black/5 shadow-xs overflow-x-auto no-scrollbar max-w-full">
            {(['All', 'Sedan', 'SUV', 'Hatchback', 'Truck', 'MPV'] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 min-h-[38px] active:scale-95 ${
                  selectedFilter === cat
                    ? 'bg-[#0B0B0D] text-white shadow-xs'
                    : 'text-[#8A8A8A] hover:text-[#0B0B0D] hover:bg-gray-50'
                }`}
              >
                {cat === 'All' ? 'All Models' : cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Vehicle Grid: Responsive single column mobile, 2 cols on tablet, 3 cols on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredVehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="group bg-white rounded-2xl overflow-hidden border border-black/5 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Vehicle Image Container */}
              <div className="relative aspect-[4/3] bg-gradient-to-b from-gray-100 to-gray-200 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={`${vehicle.name} - ${vehicle.tagline}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md text-white text-[10px] font-semibold tracking-wider px-2.5 py-1 rounded-md uppercase border border-white/10">
                  {vehicle.powertrain}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xl font-extrabold text-[#0B0B0D] tracking-tight">
                    {vehicle.name}
                  </h3>
                  <span className="text-xs font-medium text-[#8A8A8A]">
                    {vehicle.category}
                  </span>
                </div>

                <div className="text-xs font-semibold text-[#E60012]">
                  {vehicle.tagline}
                </div>

                <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                  {vehicle.description}
                </p>
              </div>
            </div>

            {/* Card Action */}
            <div className="p-5 sm:p-6 pt-0">
              <button
                onClick={() => onInquireVehicle(vehicle)}
                aria-label={`Inquire about ${vehicle.name}`}
                className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#E60012] hover:bg-[#B8000F] active:scale-[0.98] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>INQUIRE NOW</span>
                <ChevronRight className="w-4 h-4 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
