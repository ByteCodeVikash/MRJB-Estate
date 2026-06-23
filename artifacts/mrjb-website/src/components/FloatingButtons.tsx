import { siteData } from "@/data/siteData";
import { MessageCircle, Phone } from "lucide-react";

export default function FloatingButtons() {
  const whatsappUrl = `https://wa.me/${siteData.project.contact.phone.replace(/[^0-9]/g, '')}`;
  const phoneUrl = `tel:${siteData.project.contact.phone.replace(/[^0-9+]/g, '')}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Call Button */}
      <a
        href={phoneUrl}
        className="w-14 h-14 rounded-full bg-[#0B2E59] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-xl hover:bg-[#D4AF37] hover:text-[#0B2E59] transition-all group relative"
      >
        <Phone size={24} />
        <span className="absolute right-full mr-4 bg-[#0B2E59] text-white px-3 py-1 rounded text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call Us Now
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-xl hover:scale-110 transition-all group relative"
      >
        <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75" />
        <MessageCircle size={30} className="relative z-10" />
        <span className="absolute right-full mr-4 bg-[#0B2E59] text-white px-3 py-1 rounded text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
