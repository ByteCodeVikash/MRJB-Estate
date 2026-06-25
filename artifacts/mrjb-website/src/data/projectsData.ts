import gallery1 from "@/assets/images/gallery-1.png";
import gallery2 from "@/assets/images/gallery-2.png";
import gallery3 from "@/assets/images/gallery-3.png";
import gallery4 from "@/assets/images/gallery-4.png";
import gallery5 from "@/assets/images/gallery-5.png";
import gallery6 from "@/assets/images/gallery-6.png";
import masterPlan from "@/assets/images/master-plan.png";

export interface Project {
  name: string;
  slug: string;
  shortDescription: string;
  heroImage: string;
  galleryImages: string[];
  amenities: string[];
  location: string;
  status: "Ready to Registry" | "Upcoming" | "Sold Out" | string;
  brochure?: string;
  layoutPlan?: string;
}

export const projectsData: Project[] = [
  {
    name: "Kunj Bihari Enclave",
    slug: "kunj-bihari-enclave",
    shortDescription: "Premium gated residential plotted community near Vrindavan. Secure layout offering a divine lifestyle with peaceful surroundings and superb connectivity.",
    heroImage: gallery1,
    galleryImages: [
      gallery1,
      gallery2,
      gallery3
    ],
    amenities: ["Electricity", "Gated Township", "Water Line", "Wide Roads", "Green Park"],
    location: "Near Vrindavan, Mathura District, Uttar Pradesh",
    status: "Ready to Registry",
    brochure: "/Kunj Bihari Enclave Phase-1 New Brochure.pdf",
    layoutPlan: masterPlan
  },
  {
    name: "Kunj Bihari Enclave Phase 1",
    slug: "kunj-bihari-enclave-phase-1",
    shortDescription: "Phase 1 of our flagship residential community near Vrindavan. Offers 100-500 sq. yard plots with completed 30ft wide roads, 24/7 security, and immediate registration.",
    heroImage: gallery2,
    galleryImages: [
      gallery2,
      gallery4,
      gallery6
    ],
    amenities: ["Electricity", "Gated Township", "Water Line", "Wide Roads", "CCTV Security", "Green Park", "Temple"],
    location: "Near Vrindavan, Yamuna Expressway Corridor, Uttar Pradesh",
    status: "Ready to Registry",
    brochure: "/Kunj Bihari Enclave Phase-1 New Brochure.pdf",
    layoutPlan: masterPlan
  },
  {
    name: "Bhavna Enclave",
    slug: "bhavna-enclave",
    shortDescription: "Premium residential township designed for modern families. Offers spacious plots in a highly secure, gated environment with beautifully landscaped gardens and prime connectivity.",
    heroImage: gallery3,
    galleryImages: [
      gallery3,
      gallery5,
      gallery1
    ],
    amenities: ["Electricity", "Gated Township", "Water Line", "Wide Roads", "Security Guard", "Green Park"],
    location: "Noida-Vrindavan Corridor, Uttar Pradesh",
    status: "Upcoming",
    brochure: "/Kunj Bihari Enclave Phase-1 New Brochure.pdf",
    layoutPlan: masterPlan
  },
  {
    name: "Bhavna Enclave Phase 1",
    slug: "bhavna-enclave-phase-1",
    shortDescription: "A premium expansion of Bhavna Enclave featuring modern layouts, wider internal roads, lush green parks, and dedicated community zones at highly competitive prices.",
    heroImage: gallery5,
    galleryImages: [
      gallery5,
      gallery6,
      gallery2
    ],
    amenities: ["Electricity", "Gated Township", "Water Line", "Wide Roads", "CCTV Security", "Green Park", "Community Hall"],
    location: "Noida-Vrindavan Expressway Region, Uttar Pradesh",
    status: "Upcoming",
    brochure: "/Kunj Bihari Enclave Phase-1 New Brochure.pdf",
    layoutPlan: masterPlan
  }
];
