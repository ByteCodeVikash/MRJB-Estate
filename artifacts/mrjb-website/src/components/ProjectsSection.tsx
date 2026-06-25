import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MapPin, Shield, Zap, Droplets, Route, Camera, ShieldCheck, TreePine, Building2, Users, Check, PhoneCall, Download } from "lucide-react";
import { projectsData, type Project } from "@/data/projectsData";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleEnquireNow = (projectName: string) => {
    setSelectedProject(null);
    sessionStorage.setItem("selectedProject", projectName);
    window.dispatchEvent(new CustomEvent("projectEnquire", { detail: projectName }));
    
    const el = document.getElementById("contact");
    if (el) {
      const headerOffset = window.innerWidth < 768 ? 96 : 88;
      const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const getAmenityIcon = (name: string) => {
    switch (name) {
      case "Electricity": return <Zap className="w-4 h-4 text-[#D4AF37]" />;
      case "Gated Township": return <Shield className="w-4 h-4 text-[#D4AF37]" />;
      case "Water Line": return <Droplets className="w-4 h-4 text-[#D4AF37]" />;
      case "Wide Roads": return <Route className="w-4 h-4 text-[#D4AF37]" />;
      case "CCTV Security": return <Camera className="w-4 h-4 text-[#D4AF37]" />;
      case "Security Guard": return <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />;
      case "Green Park": return <TreePine className="w-4 h-4 text-[#D4AF37]" />;
      case "Temple": return <Building2 className="w-4 h-4 text-[#D4AF37]" />;
      case "Community Hall": return <Users className="w-4 h-4 text-[#D4AF37]" />;
      default: return <Check className="w-4 h-4 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#FDF8F0]/40 scroll-mt-24 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-3 block">Portfolio</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C1C] font-bold">Featured Projects</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover our premium plotted developments designed for high returns and divine residential living.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:border-[#D4AF37]/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={project.heroImage}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 z-10">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                    project.status === "Ready to Registry" 
                      ? "bg-[#D4AF37] text-white" 
                      : "bg-[#1C1C1C] text-[#D4AF37]"
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-2">
                  <MapPin size={14} className="text-[#D4AF37] shrink-0" />
                  <span className="truncate">{project.location}</span>
                </div>
                
                <h3 className="font-serif text-xl font-bold text-[#1C1C1C] mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="border border-[#D4AF37] hover:bg-[#D4AF37]/5 text-[#D4AF37] hover:text-[#D4AF37] font-bold text-xs py-3 px-2 rounded transition-colors text-center cursor-pointer"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => handleEnquireNow(project.name)}
                    className="bg-[#D4AF37] hover:bg-[#1C1C1C] text-white font-bold text-xs py-3 px-2 rounded transition-all text-center cursor-pointer"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Details Dialog */}
      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl w-11/12 max-h-[90vh] overflow-y-auto bg-white border border-[#D4AF37]/30 p-6 rounded-2xl">
            <DialogHeader className="mb-6">
              <div className="flex flex-wrap items-center gap-3">
                <DialogTitle className="font-serif text-2xl md:text-3xl font-bold text-[#1C1C1C]">
                  {selectedProject.name}
                </DialogTitle>
                <span className="bg-[#D4AF37]/15 text-[#D4AF37] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {selectedProject.status}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-500 text-sm mt-2">
                <MapPin size={16} className="text-[#D4AF37]" />
                <span>{selectedProject.location}</span>
              </div>
            </DialogHeader>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column: Media & Actions */}
              <div className="flex flex-col gap-6">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-md">
                  <img
                    src={selectedProject.heroImage}
                    alt={selectedProject.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Gallery preview */}
                {selectedProject.galleryImages && selectedProject.galleryImages.length > 0 && (
                  <div>
                    <h4 className="text-sm font-bold text-[#1C1C1C] uppercase tracking-wider mb-3">Project Gallery</h4>
                    <div className="grid grid-cols-3 gap-3">
                      {selectedProject.galleryImages.map((img, i) => (
                        <div key={i} className="aspect-[4/3] rounded-lg overflow-hidden border border-gray-100 shadow-sm bg-gray-50">
                          <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Info & Details */}
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="text-sm font-bold text-[#1C1C1C] uppercase tracking-wider mb-2">Description</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{selectedProject.shortDescription}</p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-[#1C1C1C] uppercase tracking-wider mb-3">Key Amenities</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedProject.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-center gap-2 bg-[#FDF8F0] p-2.5 rounded-lg border border-[#D4AF37]/10">
                        {getAmenityIcon(amenity)}
                        <span className="text-gray-700 text-xs font-medium">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col gap-3 mt-auto pt-6 border-t border-gray-100">
                  <button
                    onClick={() => handleEnquireNow(selectedProject.name)}
                    className="w-full bg-[#D4AF37] hover:bg-[#1C1C1C] text-white font-bold h-12 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                  >
                    <PhoneCall size={18} />
                    Enquire & Block Your Plot
                  </button>

                  <div className="grid grid-cols-2 gap-3">
                    {selectedProject.brochure ? (
                      <a
                        href={selectedProject.brochure}
                        download
                        className="border border-[#D4AF37] hover:bg-[#D4AF37]/5 text-[#D4AF37] font-bold text-xs h-11 rounded-lg flex items-center justify-center gap-1.5 transition-colors text-center cursor-pointer"
                      >
                        <Download size={14} />
                        Brochure
                      </a>
                    ) : (
                      <button
                        disabled
                        className="border border-gray-200 text-gray-400 font-bold text-xs h-11 rounded-lg flex items-center justify-center gap-1.5 cursor-not-allowed"
                      >
                        Brochure Soon
                      </button>
                    )}

                    {selectedProject.layoutPlan ? (
                      <a
                        href={selectedProject.layoutPlan}
                        download
                        className="border border-[#D4AF37] hover:bg-[#D4AF37]/5 text-[#D4AF37] font-bold text-xs h-11 rounded-lg flex items-center justify-center gap-1.5 transition-colors text-center cursor-pointer"
                      >
                        <Download size={14} />
                        Layout Plan
                      </a>
                    ) : (
                      <button
                        disabled
                        className="border border-gray-200 text-gray-400 font-bold text-xs h-11 rounded-lg flex items-center justify-center gap-1.5 cursor-not-allowed"
                      >
                        Layout Soon
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
