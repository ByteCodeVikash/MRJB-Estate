import { siteData } from "@/data/siteData";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#06182E] pt-20 pb-10 border-t border-[#0B2E59]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1 */}
          <div>
            <h2 className="text-[#D4AF37] font-serif text-3xl font-bold mb-6">MRJB Group</h2>
            <p className="text-blue-100/70 mb-6 leading-relaxed">
              Crafting premium residential plotted developments near Vrindavan. Secure your future in the fastest growing spiritual corridor of India.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#0B2E59] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#0B2E59] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#0B2E59] transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {siteData.navLinks.map((link) => (
                <li key={link.href}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="text-blue-100/70 hover:text-[#D4AF37] transition-colors"
                  >
                    {link.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Key Amenities</h3>
            <ul className="space-y-4">
              {siteData.amenities.slice(0, 6).map((amenity, i) => (
                <li key={i} className="text-blue-100/70">
                  {amenity.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-blue-100/70">
                <MapPin size={20} className="text-[#D4AF37] shrink-0 mt-1" />
                <span>{siteData.project.contact.address}</span>
              </li>
              <li className="flex items-center gap-3 text-blue-100/70">
                <Phone size={20} className="text-[#D4AF37] shrink-0" />
                <a href={`tel:${siteData.project.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-[#D4AF37] transition-colors">
                  {siteData.project.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-blue-100/70">
                <Mail size={20} className="text-[#D4AF37] shrink-0" />
                <a href={`mailto:${siteData.project.contact.email}`} className="hover:text-[#D4AF37] transition-colors">
                  {siteData.project.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-blue-100/50 text-sm">
            &copy; {new Date().getFullYear()} MRJB Group | All Rights Reserved.
          </p>
          <p className="font-serif italic text-[#D4AF37] text-lg text-center">
            "{siteData.project.tagline}"
          </p>
        </div>
      </div>
    </footer>
  );
}
