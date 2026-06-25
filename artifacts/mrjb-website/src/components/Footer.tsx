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
    <footer className="bg-[#111111] pt-20 pb-10 border-t border-[#1A1A1A]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="MRJB Group Logo" className="h-12 w-auto" />
              <span className="text-[#D4AF37] font-serif text-2xl font-bold tracking-wide">MRJB Group</span>
            </div>
            <p className="text-gray-400/80 mb-6 leading-relaxed">
              Crafting premium residential plotted developments near Vrindavan. Secure your future in the fastest growing spiritual corridor of India.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#111111] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#111111] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#111111] transition-colors">
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
                    className="text-gray-400/80 hover:text-[#D4AF37] transition-colors cursor-pointer"
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
                <li key={i} className="text-gray-400/80">
                  {amenity.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400/80">
                <MapPin size={20} className="text-[#D4AF37] shrink-0 mt-1" />
                <span>
                  <strong>MRJB Group</strong>
                  <br />
                  {siteData.project.contact.address}
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400/80">
                <Phone size={20} className="text-[#D4AF37] shrink-0" />
                <a href={`tel:${siteData.project.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-[#D4AF37] transition-colors">
                  {siteData.project.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400/80">
                <Mail size={20} className="text-[#D4AF37] shrink-0" />
                <a href={`mailto:${siteData.project.contact.email}`} className="hover:text-[#D4AF37] transition-colors">
                  {siteData.project.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500/60 text-sm">
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
