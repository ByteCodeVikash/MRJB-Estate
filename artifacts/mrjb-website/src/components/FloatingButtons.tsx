import { useState, useEffect } from "react";
import { siteData } from "@/data/siteData";
import { MessageCircle, Phone } from "lucide-react";

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(true);
  const whatsappUrl = `https://wa.me/${siteData.project.contact.phone.replace(/[^0-9]/g, '')}`;
  const phoneUrl = `tel:${siteData.project.contact.phone.replace(/[^0-9+]/g, '')}`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const isTargetVisible = entries.some((entry) => entry.isIntersecting);
        setIsVisible(!isTargetVisible);
      },
      { threshold: 0.05 }
    );

    const contactEl = document.getElementById("contact");
    const footerEl = document.querySelector("footer");

    if (contactEl) observer.observe(contactEl);
    if (footerEl) observer.observe(footerEl);

    return () => {
      if (contactEl) observer.unobserve(contactEl);
      if (footerEl) observer.unobserve(footerEl);
    };
  }, []);

  return (
    <div className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-3 md:gap-4 transition-all duration-300 ${
      isVisible ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
    }`}>
      {/* Call Button */}
      <a
        href={phoneUrl}
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1C1C1C] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-xl hover:bg-[#D4AF37] hover:text-[#1C1C1C] transition-all group relative cursor-pointer"
      >
        <Phone className="w-5 h-5 md:w-6 md:h-6" />
        <span className="absolute right-full mr-4 bg-[#1C1C1C] text-white px-3 py-1 rounded text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call Us Now
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-xl hover:scale-110 transition-all group relative"
      >
        <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75" />
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7 relative z-10" />
        <span className="absolute right-full mr-4 bg-[#1C1C1C] text-white px-3 py-1 rounded text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
