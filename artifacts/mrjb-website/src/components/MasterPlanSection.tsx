import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Expand } from "lucide-react";
import masterPlanImg from "@/assets/images/master-plan.png";

export default function MasterPlanSection() {
  return (
    <section id="layout" className="py-24 bg-[#0B2E59] relative">
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
          <p className="text-blue-100 mt-4 max-w-2xl mx-auto">
            A meticulously planned township featuring wide internal roads, dedicated green spaces, and strategic plot placements.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-5xl mx-auto rounded-xl overflow-hidden border-2 border-[#D4AF37]/30 group"
        >
          <img 
            src={masterPlanImg} 
            alt="Master Plan of Kunj Bihari Enclave Phase 1" 
            className="w-full h-auto object-cover"
          />
          
          <div className="absolute inset-0 bg-[#0B2E59]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
            <Dialog>
              <DialogTrigger asChild>
                <button className="bg-[#D4AF37] text-[#0B2E59] px-6 py-3 rounded font-bold flex items-center gap-2 transform hover:scale-105 transition-transform">
                  <Expand size={20} />
                  View Full Layout
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-7xl w-11/12 p-1 bg-[#06182E] border-[#D4AF37]/50">
                <img src={masterPlanImg} alt="Master Plan Full View" className="w-full h-auto" />
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
