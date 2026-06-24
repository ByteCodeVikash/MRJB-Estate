import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import locationsImg from "@assets/image_1782234262049.png";

const locations = [
  { name: "Prem Mandir", distance: "8 km away", description: "One of India's most magnificent temples, known for its stunning white marble architecture and divine ambiance." },
  { name: "ISKCON Temple", distance: "10 km away", description: "Global spiritual destination attracting millions of devotees from across the world every year." },
  { name: "Keshi Ghat", distance: "12 km away", description: "Sacred bathing ghat on the banks of the holy Yamuna river, steeped in ancient mythology." },
  { name: "Shri Madan Mohan Ji Mandir", distance: "7 km away", description: "One of the oldest and most revered temples in Vrindavan, a cherished heritage site." },
  { name: "Chandrodaya Mandir", distance: "9 km away", description: "The upcoming tallest religious structure in the world, set to become the region's most iconic landmark." },
];

export default function LocationsSection() {
  return (
    <section id="location" className="py-24 bg-white relative overflow-hidden scroll-mt-24">
      <div
        className="absolute inset-0 opacity-[0.03] z-0"
        style={{ backgroundImage: 'linear-gradient(#0B2E59 1px, transparent 1px), linear-gradient(90deg, #0B2E59 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-3 block">Connectivity</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#0B2E59] font-bold">Surrounded by Sacred & Modern Landmarks</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Kunj Bihari Enclave places you moments away from the holiest sites of Vrindavan — where spiritual legacy meets strategic living.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Brochure locations visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden border-2 border-[#D4AF37]/30 shadow-2xl"
          >
            <img
              src={locationsImg}
              alt="Prime Locations near Kunj Bihari Enclave — Prem Mandir, ISKCON, Chandrodaya Mandir"
              loading="lazy"
              className="w-full h-auto object-contain bg-white"
            />
          </motion.div>

          {/* Location cards */}
          <div className="flex flex-col gap-4">
            {locations.map((loc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:border-[#D4AF37] hover:shadow-lg transition-all flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 group-hover:bg-[#D4AF37] flex items-center justify-center shrink-0 transition-colors mt-0.5">
                  <MapPin size={18} className="text-[#D4AF37] group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                    <h3 className="text-[#0B2E59] font-bold text-base">{loc.name}</h3>
                    <span className="bg-[#D4AF37]/10 text-[#D4AF37] font-semibold text-xs px-3 py-0.5 rounded-full shrink-0">
                      {loc.distance}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-snug">{loc.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
