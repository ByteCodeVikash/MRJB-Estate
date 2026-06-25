import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Expand, Map } from "lucide-react";

import mapLayoutImg from "@assets/image_1782233846555.png";
import regionalMapImg from "@assets/image_1782233791211.png";

export default function MasterPlanSection() {
  return (
    <section id="layout" className="py-24 bg-[#1C1C1C] relative scroll-mt-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-3 block">Layout</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold">Project Layout & Master Plan</h2>
          <p className="text-gray-300/80 mt-4 max-w-2xl mx-auto">
            A meticulously planned township featuring wide internal roads, dedicated green spaces, and strategically numbered plots ready for registry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Plot Layout */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-4"
          >
            <div className="text-[#D4AF37] font-bold uppercase text-xs tracking-widest flex items-center gap-2 mb-1">
              <Map size={14} />
              Kunj Bihari Enclave — Plot Layout
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative rounded-xl overflow-hidden border-2 border-[#D4AF37]/40 group hover:border-[#D4AF37] transition-colors cursor-pointer">
                  <img
                    src={mapLayoutImg}
                    alt="Plot Layout Map — Kunj Bihari Enclave Phase 1"
                    loading="lazy"
                    className="w-full h-auto object-contain bg-white"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <button className="bg-[#D4AF37] text-[#1C1C1C] px-6 py-3 rounded font-bold flex items-center gap-2 transform hover:scale-105 transition-transform pointer-events-none">
                      <Expand size={20} />
                      View Full Layout
                    </button>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#D4AF37] text-[#1C1C1C] p-2 rounded-full shadow-lg md:hidden opacity-90">
                    <Expand size={16} />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-7xl w-11/12 p-1 bg-white border-[#D4AF37]/50">
                <img src={mapLayoutImg} alt="Plot Layout Full View" className="w-full h-auto" />
              </DialogContent>
            </Dialog>
            <p className="text-gray-300/70 text-sm text-center">
              Colour-coded plots showing available sizes and positions within the gated township boundary.
            </p>
          </motion.div>

          {/* Regional Master Plan */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <div className="text-[#D4AF37] font-bold uppercase text-xs tracking-widest flex items-center gap-2 mb-1">
              <Map size={14} />
              YEIDA Master Plan 2041 — Strategic Location
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative rounded-xl overflow-hidden border-2 border-[#D4AF37]/40 group hover:border-[#D4AF37] transition-colors cursor-pointer">
                  <img
                    src={regionalMapImg}
                    alt="YEIDA Master Plan 2041 — Yamuna Expressway Industrial Development Area"
                    loading="lazy"
                    className="w-full h-auto object-contain bg-white"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <button className="bg-[#D4AF37] text-[#1C1C1C] px-6 py-3 rounded font-bold flex items-center gap-2 transform hover:scale-105 transition-transform pointer-events-none">
                      <Expand size={20} />
                      View Regional Plan
                    </button>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#D4AF37] text-[#1C1C1C] p-2 rounded-full shadow-lg md:hidden opacity-90">
                    <Expand size={16} />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-7xl w-11/12 p-1 bg-white border-[#D4AF37]/50">
                <img src={regionalMapImg} alt="YEIDA Master Plan 2041 Full View" className="w-full h-auto" />
              </DialogContent>
            </Dialog>
            <p className="text-gray-300/70 text-sm text-center">
              Official YEIDA 2041 master plan — Vrindavan is positioned inside the fastest-growing development corridor in North India.
            </p>
          </motion.div>
        </div>

        {/* Key stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto"
        >
          {[
            { label: "Plot Sizes", value: "100–500 sq. yd." },
            { label: "Road Width", value: "30 ft wide" },
            { label: "Township Type", value: "Gated & Secure" },
            { label: "Registry", value: "Available" },
          ].map((stat, i) => (
            <div key={i} className="text-center bg-white/5 border border-[#D4AF37]/20 rounded-lg py-5 px-3">
              <div className="text-[#D4AF37] font-bold text-lg md:text-xl font-serif">{stat.value}</div>
              <div className="text-gray-400/60 text-xs mt-1 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
