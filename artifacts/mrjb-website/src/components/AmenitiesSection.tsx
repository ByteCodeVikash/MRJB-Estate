import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import * as Icons from "lucide-react";

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="py-24 bg-[#FDF8F0] scroll-mt-24">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-3 block">Facilities</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#0B2E59] font-bold">World-Class Amenities</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {siteData.amenities.map((amenity, i) => {
            const Icon = Icons[amenity.icon as keyof typeof Icons] as any;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded border border-transparent hover:border-t-[#D4AF37] hover:border-t-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors">
                  {Icon && <Icon size={28} className="text-[#D4AF37] group-hover:text-white transition-colors" />}
                </div>
                <h3 className="text-[#0B2E59] font-bold text-xl mb-3">{amenity.title}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
