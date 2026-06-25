import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Plane, Route, Factory, TrendingUp, Expand } from "lucide-react";
import futureGrowthImg from "@assets/image_1782233807536.png";

const growthPoints = [
  {
    icon: Plane,
    title: "Noida International Airport",
    description: "The upcoming Noida International Airport (Jewar) is expected to drive strong demand and boost property prices in this region. Located approximately 45 minutes away, it is transforming the entire corridor.",
  },
  {
    icon: Route,
    title: "Expressway Connectivity",
    description: "Direct access to the Yamuna Expressway ensures fast and seamless connectivity to Delhi, Noida, and Agra — making this one of the most accessible residential zones in the NCR.",
  },
  {
    icon: Factory,
    title: "Industrial Development",
    description: "Rapid industrial growth nearby is accelerating infrastructure development and increasing future value. YEIDA industrial zones are generating thousands of jobs and boosting residential demand.",
  },
  {
    icon: TrendingUp,
    title: "Land Price Appreciation Potential",
    description: "With continuous development, today's investment holds strong potential for significant future returns. The region has seen consistent land appreciation year-on-year.",
  },
];

export default function FutureGrowthSection() {
  return (
    <section className="py-24 bg-[#1C1C1C] relative overflow-hidden scroll-mt-24">
      {/* Subtle decorative pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] z-0"
        style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-3 block">Investment Potential</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold">Future Growth Around Your Investment</h2>
          <p className="text-gray-300/70 mt-4 max-w-2xl mx-auto">
            The land around Vrindavan is at the centre of one of India's most ambitious development corridors — driven by infrastructure, industry, and spiritual tourism.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
          {/* Growth cards */}
          <div className="grid grid-cols-1 gap-6">
            {growthPoints.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-md border border-[#D4AF37]/25 p-6 rounded-xl hover:bg-white/10 hover:border-[#D4AF37]/60 transition-all flex gap-5"
                >
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center shrink-0">
                    <Icon size={22} className="text-[#1C1C1C]" />
                  </div>
                  <div>
                    <h3 className="text-white font-serif text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-300/75 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Brochure infographic visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/40 group hover:border-[#D4AF37] transition-colors cursor-pointer">
                  <img
                    src={futureGrowthImg}
                    alt="Future Growth Around Kunj Bihari Enclave Investment — Airport, Expressway, Industrial, Appreciation"
                    loading="lazy"
                    className="w-full h-auto object-contain bg-white"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <button className="bg-[#D4AF37] text-[#1C1C1C] px-4 py-2 sm:px-5 sm:py-3 rounded font-bold flex items-center gap-2 hover:scale-105 transition-transform text-sm sm:text-base pointer-events-none">
                      <Expand size={18} />
                      View Full Infographic
                    </button>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#D4AF37] text-[#1C1C1C] p-2 rounded-full shadow-lg md:hidden opacity-90">
                    <Expand size={16} />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl w-11/12 p-1 bg-white border-[#D4AF37]/50">
                <img src={futureGrowthImg} alt="Future Growth Full View" className="w-full h-auto" />
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
