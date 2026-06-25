import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import { Quote, Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-[#FDF8F0]">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-3 block">Testimonials</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1C1C1C] font-bold">What Our Buyers Say</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {siteData.testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg relative border border-transparent hover:border-[#D4AF37]/30 transition-colors"
            >
              <Quote className="absolute top-6 right-6 text-[#D4AF37]/20 w-12 h-12 rotate-180" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-8 italic relative z-10">"{testimonial.quote}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center text-white font-serif font-bold text-lg">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="text-[#1C1C1C] font-bold font-serif">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
