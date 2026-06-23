import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { siteData } from "@/data/siteData";

import g1 from "@/assets/images/gallery-1.png";
import g2 from "@/assets/images/gallery-2.png";
import g3 from "@/assets/images/gallery-3.png";
import g4 from "@/assets/images/gallery-4.png";
import g5 from "@/assets/images/gallery-5.png";
import g6 from "@/assets/images/gallery-6.png";

const images = {
  "gallery-1.png": g1,
  "gallery-2.png": g2,
  "gallery-3.png": g3,
  "gallery-4.png": g4,
  "gallery-5.png": g5,
  "gallery-6.png": g6,
};

const categories = ["All", "Infrastructure", "Entrance", "Parks", "Aerial"];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All" 
    ? siteData.gallery 
    : siteData.gallery.filter(g => g.category === activeTab);

  return (
    <section id="gallery" className="py-24 bg-[#06182E] relative border-t border-[#0B2E59]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-3 block">Gallery</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-10">Township Gallery</h2>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 rounded-full border transition-all text-sm font-medium ${
                  activeTab === cat 
                    ? "bg-[#D4AF37] border-[#D4AF37] text-[#0B2E59]" 
                    : "bg-transparent border-white/20 text-white hover:border-[#D4AF37] hover:text-[#D4AF37]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer relative overflow-hidden rounded-lg aspect-[4/3]"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="w-full h-full relative">
                    <img 
                      src={images[item.src as keyof typeof images]} 
                      alt={item.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06182E]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div>
                        <h4 className="text-white font-serif text-xl">{item.title}</h4>
                        <span className="text-[#D4AF37] text-sm">{item.category}</span>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-5xl bg-black border-none p-0 overflow-hidden">
                  <img src={images[item.src as keyof typeof images]} alt={item.title} className="w-full h-auto" />
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
