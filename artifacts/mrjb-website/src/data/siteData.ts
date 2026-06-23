import { z } from "zod";

export const siteData = {
  project: {
    name: "Kunj Bihari Enclave",
    phase: "Phase 1",
    tagline: "Where Divinity Meets Investment",
    description: "Premium Residential Plots Near Vrindavan",
    contact: {
      phone: "+91 98765 43210",
      email: "info@mrjbgroup.com",
      address: "Near Vrindavan, Mathura District, Uttar Pradesh - 281121",
    }
  },
  navLinks: [
    { title: "Home", href: "home" },
    { title: "About", href: "about" },
    { title: "Layout", href: "layout" },
    { title: "Amenities", href: "amenities" },
    { title: "Gallery", href: "gallery" },
    { title: "Location", href: "location" },
    { title: "Contact", href: "contact" },
  ],
  stats: [
    { title: "Premium Gated Township", subtitle: "Fully Secured Perimeter" },
    { title: "Multiple Plot Sizes", subtitle: "100-500 sq. yards" },
    { title: "30ft Wide Roads", subtitle: "Smooth Internal Roads" },
    { title: "High ROI Zone", subtitle: "Growing Faster Each Year" },
  ],
  amenities: [
    { title: "Electricity", icon: "Zap", description: "24/7 reliable power supply" },
    { title: "Gated Township", icon: "Shield", description: "Secured boundary walls" },
    { title: "Water Line", icon: "Droplets", description: "Continuous water supply" },
    { title: "Wide Roads", icon: "Route", description: "30ft wide paved internal roads" },
    { title: "CCTV Security", icon: "Camera", description: "24/7 surveillance system" },
    { title: "Security Guard", icon: "ShieldCheck", description: "Manned entry & exit points" },
    { title: "Green Park", icon: "TreePine", description: "Lush landscaped gardens" },
    { title: "Temple", icon: "Building2", description: "Dedicated place of worship" },
    { title: "Community Hall", icon: "Users", description: "For gatherings and events" },
  ],
  gallery: [
    { id: 1, title: "Internal Roads", category: "Infrastructure", src: "gallery-1.png" },
    { id: 2, title: "Grand Entrance", category: "Entrance", src: "gallery-2.png" },
    { id: 3, title: "Green Parks", category: "Parks", src: "gallery-3.png" },
    { id: 4, title: "Aerial View", category: "Aerial", src: "gallery-4.png" },
    { id: 5, title: "Community Hall", category: "Infrastructure", src: "gallery-5.png" },
    { id: 6, title: "Night Lighting", category: "Infrastructure", src: "gallery-6.png" },
  ],
  locations: [
    { name: "Prem Mandir", distance: "8 km away", description: "Divine spiritual center" },
    { name: "ISKCON Temple", distance: "10 km away", description: "Global spiritual destination" },
    { name: "Keshi Ghat", distance: "12 km away", description: "Sacred bathing ghat on Yamuna" },
    { name: "Shri Madan Mohan Ji Mandir", distance: "7 km away", description: "Ancient heritage temple" },
    { name: "Chandrodaya Mandir", distance: "9 km away", description: "Upcoming tallest temple" },
  ],
  futureGrowth: [
    { title: "Noida International Airport", icon: "Plane", description: "Jewar Airport is just 45 minutes away, driving massive land value appreciation across the NCR corridor." },
    { title: "Yamuna Expressway Connectivity", icon: "Route", description: "Direct access via Yamuna Expressway connecting Delhi, Noida, Agra, and beyond." },
    { title: "Industrial Development", icon: "Factory", description: "YEIDA industrial zones are creating thousands of jobs, boosting residential demand." },
    { title: "Land Appreciation Potential", icon: "TrendingUp", description: "The region has seen 3x land appreciation in 5 years and the trajectory is accelerating." },
  ],
  whyInvest: [
    { title: "Fast Developing Corridor", description: "One of NCR's fastest-growing investment zones outside Noida" },
    { title: "Airport-Driven Growth", description: "Jewar International Airport proximity ensures rapid appreciation" },
    { title: "Religious Tourism Demand", description: "Vrindavan attracts 3 crore devotees annually, driving land demand" },
    { title: "Future Appreciation", description: "Land prices expected to double in the next 3 years" },
    { title: "Strategic Connectivity", description: "Yamuna Expressway, NH-2, and upcoming metro connectivity" },
    { title: "Safe Investment", description: "Clear title, RERA-compliant, legal documentation assured" },
  ],
  testimonials: [
    { name: "Rajesh Sharma", role: "Investor, Delhi", rating: 5, quote: "The plots near Vrindavan are a once-in-a-lifetime opportunity. MRJB Group has delivered on every promise. My plot value has already appreciated 40% in just one year.", initials: "RS" },
    { name: "Priya & Suresh Gupta", role: "Family, Agra", rating: 5, quote: "We always dreamed of owning land near Vrindavan. The amenities, the location, and the team's professionalism made the decision easy for our family.", initials: "PG" },
    { name: "Amit Agarwal", role: "NRI Investor, London", rating: 5, quote: "Managing investment from abroad is always a concern, but MRJB Group's transparency and documentation process gave me complete confidence.", initials: "AA" },
  ],
  faqs: [
    { question: "What plot sizes are available?", answer: "We offer plots ranging from 100 sq. yd. to 500 sq. yd., with various configurations to suit different budgets and family requirements." },
    { question: "Is registry available?", answer: "Yes, complete registry and legal documentation is available for all plots. All properties have clear titles and full legal clearance." },
    { question: "How far is Vrindavan?", answer: "Kunj Bihari Enclave Phase 1 is located 7-12 km from the major temples of Vrindavan, approximately 15-20 minutes by car." },
    { question: "Is loan facility available?", answer: "Yes, we have tie-ups with leading nationalized banks and NBFCs. Our dedicated team will guide you through the entire loan process." },
    { question: "How can I book a site visit?", answer: "Simply fill the inquiry form above or call/WhatsApp us directly. We arrange complimentary site visits every weekend." },
  ]
};

export const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  mobile: z.string().min(10, "Valid mobile number is required"),
  email: z.string().email("Valid email is required"),
  city: z.string().min(2, "City is required"),
  message: z.string().optional(),
});
export type FormValues = z.infer<typeof formSchema>;
