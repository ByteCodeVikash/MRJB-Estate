import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";

import townshipImg from "@assets/image_1782233739275.png";
import mapLayoutImg from "@assets/image_1782233846555.png";
import locationsImg from "@assets/image_1782233764748.png";
import masterPlanImg from "@assets/image_1782233791211.png";
import futureGrowthImg from "@assets/image_1782233807536.png";
import amenitiesImg from "@assets/image_1782233751282.png";

const galleryItems = [
  { id: 1, title: "Township Site Images", category: "Site", src: townshipImg, description: "Actual on-ground township photographs showing the development progress and landscape." },
  { id: 2, title: "Project Map Layout", category: "Layout", src: mapLayoutImg, description: "Detailed plot layout of Kunj Bihari Enclave Phase 1 showing all plot numbers and roads." },
  { id: 3, title: "Prime Locations Nearby", category: "Location", src: locationsImg, description: "Sacred landmarks and temples within easy reach of the township." },
  { id: 4, title: "YEIDA Master Plan 2041", category: "Infrastructure", src: masterPlanImg, description: "Official Yamuna Expressway Industrial Development Area master plan highlighting the strategic growth corridor." },
  { id: 5, title: "Future Growth Corridor", category: "Infrastructure", src: futureGrowthImg, description: "Airport, expressway, and industrial development driving massive appreciation potential." },
  { id: 6, title: "Township Facilities", category: "Amenities", src: amenitiesImg, description: "Complete amenities offered at Kunj Bihari Enclave Phase 1." },
];

const categories = ["All", "Site", "Layout", "Location", "Infrastructure", "Amenities"];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("All");
  const [selected, setSelected] = useState<typeof galleryItems[0] | null>(null);

  const filtered = activeTab === "All"
    ? galleryItems
    : galleryItems.filter(g => g.category === activeTab);

  return (
    <section id="gallery" className="py-24 bg-[#111111] relative border-t border-[#1A1A1A] scroll-mt-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-3 block">Gallery</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-4">Township Gallery</h2>
          <p className="text-gray-300/70 max-w-2xl mx-auto mb-10">
            Real images from Kunj Bihari Enclave Phase 1 — see the land, the layout, and the location that makes this investment exceptional.
          </p>

          <div className="flex overflow-x-auto md:flex-wrap md:justify-center gap-2 md:gap-3 mb-8 pb-3 scrollbar-none -mx-6 px-6 md:mx-0 md:px-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2 rounded-full border transition-all text-sm font-medium shrink-0 ${
                  activeTab === cat
                    ? "bg-[#D4AF37] border-[#D4AF37] text-[#1C1C1C]"
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
              className="group cursor-pointer relative overflow-hidden rounded-xl border border-white/10 hover:border-[#D4AF37]/50 transition-all"
              onClick={() => setSelected(item)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-1">{item.category}</span>
                <h4 className="text-white font-serif text-lg font-bold leading-tight">{item.title}</h4>
                <p className="text-white/70 text-xs mt-1 line-clamp-2">{item.description}</p>
              </div>
              <div className="absolute top-3 right-3 bg-[#D4AF37] text-[#1C1C1C] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                {item.category}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selected && (
        <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
          <DialogContent className="max-w-5xl w-11/12 bg-[#111111] border border-[#D4AF37]/30 p-2">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-1.5 transition-colors"
            >
              <X size={18} />
            </button>
            <img
              src={selected.src}
              alt={selected.title}
              className="w-full h-auto rounded max-h-[80vh] object-contain"
            />
            <div className="p-4">
              <h3 className="text-white font-serif text-xl font-bold">{selected.title}</h3>
              <p className="text-gray-300/70 text-sm mt-1">{selected.description}</p>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
