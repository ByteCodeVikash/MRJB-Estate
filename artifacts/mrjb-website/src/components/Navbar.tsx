import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#0B2E59]/90 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div 
            className="text-2xl md:text-3xl font-serif text-[#D4AF37] font-bold cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            MRJB Group
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {siteData.navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-white hover:text-[#D4AF37] font-medium transition-colors"
              >
                {link.title}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[#D4AF37] text-[#0B2E59] px-6 py-2 rounded font-semibold flex items-center gap-2 hover:bg-[#FDF8F0] transition-colors"
            >
              Book Site Visit
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[#D4AF37]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0B2E59] pt-24 px-6 flex flex-col items-center gap-8 md:hidden"
          >
            {siteData.navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-white text-2xl font-serif hover:text-[#D4AF37]"
              >
                {link.title}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-[#D4AF37] text-[#0B2E59] px-8 py-3 rounded text-xl font-bold w-full max-w-sm mt-4"
            >
              Book Site Visit
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
