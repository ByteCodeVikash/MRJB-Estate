import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import { MapPin } from "lucide-react";

export default function LocationsSection() {
  return (
    <section id="location" className="py-24 bg-white relative overflow-hidden">
      {/* Map Grid Background Pattern */}
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
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {siteData.locations.map((loc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-6 rounded-lg border border-gray-100 shadow-lg hover:border-[#D4AF37] transition-all relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#FDF8F0] rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
              <MapPin size={28} className="text-[#D4AF37] mb-4" />
              <h3 className="text-[#0B2E59] font-bold text-xl mb-2">{loc.name}</h3>
              <div className="inline-block bg-[#D4AF37]/10 text-[#D4AF37] font-medium text-xs px-3 py-1 rounded-full mb-3">
                {loc.distance}
              </div>
              <p className="text-gray-500 text-sm">{loc.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
