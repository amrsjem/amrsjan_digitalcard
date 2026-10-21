import showroomHeroImg from '../assets/images/byd_showroom_hero_1792594059702.jpg';
import sealImg from '../assets/images/byd_seal_sedan_1792594060057.jpg';
import atto3Img from '../assets/images/byd_atto3_suv_1792594060523.jpg';
import dolphinImg from '../assets/images/byd_dolphin_ev_1792594061991.jpg';
import sharkImg from '../assets/images/byd_shark_truck_1792594061530.jpg';
import emax7Img from '../assets/images/byd_emax7_mpv_1792594061792.jpg';
import seagullImg from '../assets/images/byd_seagull_ev_1792594076826.jpg';

export interface Vehicle {
  id: string;
  name: string;
  category: 'Sedan' | 'SUV' | 'Hatchback' | 'Truck' | 'MPV';
  tagline: string;
  description: string;
  image: string;
  powertrain: string;
}

export const AGENT_INFO = {
  name: 'Janna Amores',
  position: 'BYD Sales Agent',
  dealership: 'BYD Marikina',
  mobile: '0997 879 1816',
  mobileRaw: '+639978791816',
  email: 'jannaamores0123@gmail.com',
  personalAddress: '#18 Marigman St., Brgy. San Roque, Antipolo City',
  dealershipAddress: 'Lot 2D Mayor Gil Fernando Avenue, Santo Niño, Marikina City, Metro Manila 1800',
  introduction: 'Helping you find the right BYD vehicle for your lifestyle, budget, and driving needs.',
  profileImage: '/assets/aistudio/image_c435b045.png',
  social: {
    facebook: 'https://www.facebook.com/janna.312978',
    facebookHandle: 'facebook.com/janna.312978',
    instagram: 'https://www.instagram.com/iammrsjan/',
    instagramHandle: 'instagram.com/iammrsjan',
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=BYD+Marikina+Lot+2D+Mayor+Gil+Fernando+Avenue+Santo+Nino+Marikina+City+Metro+Manila+1800',
  images: {
    showroomHero: showroomHeroImg,
    profilePhoto: '/assets/aistudio/image_c435b045.png',
  }
};

export const VEHICLES: Vehicle[] = [
  {
    id: 'byd-seal',
    name: 'BYD SEAL',
    category: 'Sedan',
    tagline: 'Pure Electric Performance Sedan',
    description: 'Discover dynamic elegance and aerodynamic sports styling. Engineered with an ocean aesthetic and high-performance electric drive for an exhilarating commute.',
    image: sealImg,
    powertrain: 'Pure Electric (EV)',
  },
  {
    id: 'byd-atto3',
    name: 'BYD ATTO 3',
    category: 'SUV',
    tagline: 'Dynamic Electric Compact SUV',
    description: 'Combining energetic modern crossover proportions with versatile interior comfort, cutting-edge infotainment, and dependable daily driving range.',
    image: atto3Img,
    powertrain: 'Pure Electric (EV)',
  },
  {
    id: 'byd-dolphin',
    name: 'BYD DOLPHIN',
    category: 'Hatchback',
    tagline: 'Ocean Series Electric City Car',
    description: 'Sleek, eco-friendly compact hatchback crafted for modern urban mobility with seamless maneuverability, smart space utilization, and zero tailpipe emissions.',
    image: dolphinImg,
    powertrain: 'Pure Electric (EV)',
  },
  {
    id: 'byd-seagull',
    name: 'BYD SEAGULL',
    category: 'Hatchback',
    tagline: 'Modern Compact Electric Hatchback',
    description: 'Agile, stylish city EV engineered for spirited daily drives, easy parking in tight metropolitan streets, and effortless electric efficiency.',
    image: seagullImg,
    powertrain: 'Pure Electric (EV)',
  },
  {
    id: 'byd-shark',
    name: 'BYD SHARK',
    category: 'Truck',
    tagline: 'High-Performance Electric Hybrid Pickup',
    description: 'Bold capability meets refined electric luxury. Designed with a commanding front stance, robust bed capacity, and advanced dual-motor off-road power.',
    image: sharkImg,
    powertrain: 'Electric Hybrid (DMO)',
  },
  {
    id: 'byd-emax7',
    name: 'BYD eMAX 7',
    category: 'MPV',
    tagline: 'Premium 7-Seater Electric MPV',
    description: 'Spacious 7-seater multi-purpose vehicle offering generous family room, quiet electric ride quality, and contemporary tech for every road trip.',
    image: emax7Img,
    powertrain: 'Pure Electric (EV)',
  },
];

export function generateVCardData(): string {
  return [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${AGENT_INFO.name}`,
    `TEL;TYPE=CELL:${AGENT_INFO.mobileRaw}`,
    `EMAIL:${AGENT_INFO.email}`,
    `ORG:${AGENT_INFO.dealership}`,
    `TITLE:${AGENT_INFO.position}`,
    `ADR;TYPE=HOME:;;#18 Marigman St.;Brgy. San Roque;Antipolo City;;Philippines`,
    `URL:${AGENT_INFO.social.facebook}`,
    'END:VCARD'
  ].join('\r\n');
}

export function downloadVCard(): void {
  const vcardText = generateVCardData();
  const blob = new Blob([vcardText], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Janna_Amores_BYD.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}
