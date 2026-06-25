import { useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { siteData, formSchema, type FormValues } from "@/data/siteData";
import { MessageCircle, Send } from "lucide-react";
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

export default function LeadFormSection() {
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

  useEffect(() => {
    const handleEnquire = (e: Event) => {
      const projectName = (e as CustomEvent).detail;
      form.setValue("message", `I am interested in ${projectName}. Please share pricing and availability.`);
    };
    window.addEventListener("projectEnquire", handleEnquire);
    return () => window.removeEventListener("projectEnquire", handleEnquire);
  }, [form]);

  const onSubmit = (data: FormValues) => {
    try {
      const existingStr = localStorage.getItem("mrjb_inquiries");
      const existing = existingStr ? JSON.parse(existingStr) : [];
      const newInquiry = { ...data, timestamp: new Date().toISOString() };
      localStorage.setItem("mrjb_inquiries", JSON.stringify([...existing, newInquiry]));
      
      toast({
        title: "Inquiry Submitted Successfully!",
        description: "Our team will contact you within 24 hours.",
      });
      
      form.reset();
    } catch (e) {
      toast({
        variant: "destructive",
        title: "Error submitting inquiry",
        description: "Please try again later or contact us directly.",
      });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1C1C1C] via-[#111111] to-[#D4AF37] opacity-95 z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center lg:text-left text-white"
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Schedule Your Site Visit Today
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-lg mx-auto lg:mx-0">
              Take the first step towards securing your premium residential plot near the divine city of Vrindavan. Our property experts will connect with you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <div className="flex flex-col">
                <span className="text-white/60 text-sm uppercase tracking-wider mb-1">Call Us Directly</span>
                <a href={`tel:${siteData.project.contact.phone.replace(/[^0-9+]/g, '')}`} className="text-2xl font-bold text-[#D4AF37]">
                  {siteData.project.contact.phone}
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Full Name *" className="bg-white/90 border-transparent text-[#1C1C1C] placeholder:text-gray-500" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Mobile Number *" type="tel" className="bg-white/90 border-transparent text-[#1C1C1C] placeholder:text-gray-500" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Email Address *" type="email" className="bg-white/90 border-transparent text-[#1C1C1C] placeholder:text-gray-500" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Current City *" className="bg-white/90 border-transparent text-[#1C1C1C] placeholder:text-gray-500" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea placeholder="Any specific requirements? (Optional)" className="bg-white/90 border-transparent text-[#1C1C1C] placeholder:text-gray-500 resize-none" rows={3} {...field} />
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-[#D4AF37] hover:bg-white text-[#1C1C1C] font-bold text-lg h-12 transition-all group mt-2 cursor-pointer">
                  Submit Inquiry
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <div className="flex items-center gap-4 my-4">
                  <div className="h-px bg-white/20 flex-1" />
                  <span className="text-white/60 text-sm">or</span>
                  <div className="h-px bg-white/20 flex-1" />
                </div>

                <a 
                  href={`https://wa.me/${siteData.project.contact.phone.replace(/[^0-9]/g, '')}?text=Hi%2C%20I%20am%20interested%20in%20Kunj%20Bihari%20Enclave.`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-lg h-12 rounded-md transition-colors"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </a>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
