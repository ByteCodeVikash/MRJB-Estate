import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function WhyInvestSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-3 block">Advantages</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C1C] font-bold max-w-3xl mx-auto">
            6 Reasons Smart Investors Choose Kunj Bihari Enclave
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {siteData.whyInvest.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#FDF8F0] p-8 rounded-lg border border-transparent hover:border-[#D4AF37] transition-colors relative"
            >
              <div className="absolute top-6 right-6 text-4xl font-serif font-black text-[#D4AF37]/20">
                0{i + 1}
              </div>
              <h3 className="text-[#1C1C1C] font-bold text-xl mb-3 pr-8 relative z-10">{reason.title}</h3>
              <p className="text-gray-600 text-sm relative z-10">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
