import { motion, type Variants } from "framer-motion";
import { Calendar, Download, ChevronDown } from "lucide-react";
import heroImg from "@/assets/images/hero.png";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function HeroSection() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-12">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/90 to-[#1C1C1C]/80 mix-blend-multiply" />
      
      {/* Decorative Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-10 w-px h-1/2 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent" />
        <div className="absolute top-1/4 right-10 w-px h-1/2 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center pt-36 pb-12 md:pt-40 md:pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <motion.span variants={itemVariants} className="text-[#D4AF37] font-semibold tracking-[0.2em] text-xs sm:text-sm md:text-base uppercase mb-3 sm:mb-4">
            MRJB Group Presents
          </motion.span>
          
          <motion.h1 variants={itemVariants} className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-2">
            Kunj Bihari Enclave
          </motion.h1>
          
          <motion.div variants={itemVariants} className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#D4AF37] mb-4 sm:mb-6">
            Phase 1
          </motion.div>

          <motion.div variants={itemVariants} className="w-24 h-px bg-[#D4AF37] mb-6 sm:mb-8" />

          <motion.p variants={itemVariants} className="text-lg sm:text-xl md:text-2xl text-white/90 font-light mb-2">
            Premium Residential Plots Near Vrindavan
          </motion.p>
          
          <motion.p variants={itemVariants} className="text-sm sm:text-base md:text-lg text-[#D4AF37]/80 mb-6 sm:mb-10 tracking-wide uppercase">
            Where Divinity Meets Investment
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12 xl:mb-16 w-full sm:w-auto">
            <button onClick={scrollToContact} className="bg-[#D4AF37] hover:bg-[#FDF8F0] text-[#1C1C1C] px-8 py-4 rounded font-bold flex items-center justify-center gap-2 transition-all cursor-pointer">
              <Calendar size={20} />
              Book Site Visit
            </button>
            <button className="border border-[#D4AF37] hover:bg-[#D4AF37]/10 text-[#D4AF37] px-8 py-4 rounded font-bold flex items-center justify-center gap-2 transition-all backdrop-blur-sm bg-white/5 cursor-pointer">
              <Download size={20} />
              Download Brochure
            </button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3">
            {["Gated Township", "Wide Roads", "Water Line", "Electricity", "Security", "Green Park"].map((badge, i) => (
              <div key={i} className="px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white/90 text-sm font-medium">
                {badge}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden xl:flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-xs uppercase tracking-widest">Scroll Discover</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={24} className="text-[#D4AF37]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
