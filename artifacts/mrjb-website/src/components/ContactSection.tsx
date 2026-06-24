import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { siteData, formSchema, type FormValues } from "@/data/siteData";
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      mobile: "",
      email: "",
      city: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    try {
      const existingStr = localStorage.getItem("mrjb_inquiries");
      const existing = existingStr ? JSON.parse(existingStr) : [];
      const newInquiry = { ...data, source: "contact_form", timestamp: new Date().toISOString() };
      localStorage.setItem("mrjb_inquiries", JSON.stringify([...existing, newInquiry]));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We will get back to you shortly.",
      });
      
      form.reset();
    } catch (e) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please try again later.",
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0B2E59] scroll-mt-24">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold">Get In Touch With Us</h2>
          <p className="text-blue-100 mt-4 max-w-2xl mx-auto">
            Our experts are ready to assist you in finding the perfect plot for your dream home or investment.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Left: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1 bg-white/5 backdrop-blur-md border border-[#D4AF37]/30 p-8 rounded-2xl text-white"
          >
            <h3 className="font-serif text-[#D4AF37] text-3xl font-bold mb-8">{siteData.project.name}</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#D4AF37]/20 p-3 rounded-full mt-1">
                  <MapPin className="text-[#D4AF37] w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Office Address</h4>
                  <p className="text-blue-100/80 leading-relaxed">{siteData.project.contact.address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[#D4AF37]/20 p-3 rounded-full mt-1">
                  <Phone className="text-[#D4AF37] w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Phone Number</h4>
                  <a href={`tel:${siteData.project.contact.phone.replace(/[^0-9+]/g, '')}`} className="text-blue-100/80 hover:text-[#D4AF37] transition-colors">
                    {siteData.project.contact.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[#D4AF37]/20 p-3 rounded-full mt-1">
                  <Mail className="text-[#D4AF37] w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email Address</h4>
                  <a href={`mailto:${siteData.project.contact.email}`} className="text-blue-100/80 hover:text-[#D4AF37] transition-colors">
                    {siteData.project.contact.email}
                  </a>
                </div>
              </div>
            </div>

            <a 
              href={`https://wa.me/${siteData.project.contact.phone.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-lg h-12 rounded-md transition-colors mb-6"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </a>

            {/* Map Placeholder */}
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noreferrer"
              className="block w-full h-32 bg-[#06182E] border border-[#D4AF37]/30 rounded-lg flex items-center justify-center text-[#D4AF37] hover:bg-[#06182E]/80 transition-colors group"
            >
              <div className="flex flex-col items-center gap-2">
                <MapPin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Visit Us On Google Maps</span>
              </div>
            </a>
          </motion.div>

          {/* Right: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1 bg-white rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-[#0B2E59] font-bold text-2xl mb-6">Send Us A Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Full Name *" className="bg-gray-50 border-gray-200 text-[#0B2E59] h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Mobile Number *" type="tel" className="bg-gray-50 border-gray-200 text-[#0B2E59] h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Current City *" className="bg-gray-50 border-gray-200 text-[#0B2E59] h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Email Address *" type="email" className="bg-gray-50 border-gray-200 text-[#0B2E59] h-12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea placeholder="How can we help you?" className="bg-gray-50 border-gray-200 text-[#0B2E59] resize-none" rows={4} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-[#D4AF37] hover:bg-[#0B2E59] text-white hover:text-[#D4AF37] font-bold text-lg h-12 transition-all group mt-2">
                  Send Message
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
