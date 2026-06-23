import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import * as Icons from "lucide-react";

export default function FutureGrowthSection() {
  return (
    <section className="py-24 bg-[#0B2E59] relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-3 block">Investment Potential</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold">Why Your Investment Will Multiply</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {siteData.futureGrowth.map((item, i) => {
            const Icon = Icons[item.icon as keyof typeof Icons] as any;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-[#D4AF37]/30 p-8 rounded-xl hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center mb-6">
                  {Icon && <Icon size={24} className="text-[#0B2E59]" />}
                </div>
                <h3 className="text-white font-serif text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-blue-100/80 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
