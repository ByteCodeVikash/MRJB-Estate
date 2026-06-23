import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FDF8F0] rounded-bl-full -z-0 opacity-50" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#0B2E59]/5 rounded-tr-full -z-0 opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-3 block">Our Project</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#0B2E59] font-bold">About Kunj Bihari Enclave Phase 1</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              Nestled near the sacred bounds of Vrindavan, Kunj Bihari Enclave offers you an opportunity to build your dream home in a divine and developing ecosystem. Designed with meticulous attention to detail, this gated township provides the perfect balance of modern amenities and serene living.
            </p>
            <blockquote className="pl-6 border-l-4 border-[#D4AF37] text-xl font-serif italic text-[#0B2E59]">
              "A lifestyle investment where every breath feels blessed and every dream finds a home."
            </blockquote>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you are looking for a high-return investment in the booming NCR corridor or a peaceful abode close to Lord Krishna's playground, Phase 1 of Kunj Bihari Enclave stands out as a prime real estate choice.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {siteData.stats.map((stat, idx) => (
              <div key={idx} className="bg-white p-6 border border-gray-100 shadow-lg rounded-lg hover:border-[#D4AF37] transition-colors group">
                <div className="w-12 h-12 rounded-full bg-[#FDF8F0] flex items-center justify-center text-[#D4AF37] mb-4 group-hover:bg-[#D4AF37] group-hover:text-white transition-colors">
                  <span className="font-serif font-bold text-xl">{idx + 1}</span>
                </div>
                <h3 className="text-[#0B2E59] font-bold text-xl mb-1">{stat.title}</h3>
                <p className="text-gray-500 text-sm">{stat.subtitle}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
