import { Flower2, Gift, Sparkles } from "lucide-react";

export const clinicInfo = {
  name: "Health Hunter",
  fullName: "Health Hunter Physiotherapy Clinic & Wellness Center",
  tagline: "Physiotherapy Clinic & Wellness Center",
  email: "HealthHunterPlus@protonmail.com",
  phones: [
    { number: "+91 63536 27860", raw: "6353627860", tel: "+916353627860" },
    { number: "+91 93272 22529", raw: "9327222529", tel: "+919327222529" },
  ],
  primaryPhone: "+91 63536 27860",
  secondaryPhone: "+91 93272 22529",
  whatsappNumber: "916353627860",
  address: {
    line1: "309, Gala Empire",
    line2: "Opp. Doordarshan Metro Station, SAL Cross Road",
    line3: "Drive-In Road, Memnagar, Ahmedabad",
    full: "309, Gala Empire, Opp. Doordarshan Metro Station, SAL Cross Road, Drive-In Road, Memnagar, Ahmedabad",
    short: "309, Gala Empire, Opp. Doordarshan Metro, Memnagar, Ahmedabad",
    mapsUrl: "https://maps.google.com/?q=Gala+Empire+Opp+Doordarshan+Metro+Station+Drive-In+Road+Memnagar+Ahmedabad",
  },
  instagram: {
    handle: "health.hunter_",
    url: "https://www.instagram.com/health.hunter_/",
  },
  youtube: {
    handle: "@Health.Hunter_dp",
    url: "https://www.youtube.com/@Health.Hunter_dp",
  },
  hours: "Mon–Sat · 8:00 AM–8:00 PM",
} as const;

export const images = {
  logo: "/assets/health-henter-logo.svg",
  hero: "/assets/hero.webp",
  heroNew: "/assets/hero-new.jpg",
  heroIndian: "/assets/hero-indian.jpg",
  heroBg: "/assets/hero-hunter.png",
  about: "/assets/about.webp",
  serviceFitness: "/assets/service-fitness.jpg",
  serviceRelaxation: "/assets/service-relaxation.jpg",
  servicePhysio: "/assets/service-physio.jpg",
  sarah: "https://lh3.googleusercontent.com/aida-public/AB6AXuA44xShHMuNWqkifddjdrHtsTd4O4-MpHVuuQ_KfbgkATvWCPnt1TwBQ0imAU6xOC5FO6K6REmn0HnSFO7dm0FUgLFyUi3dYvE_ti731Cgru-hvJIfYKuKB2Is0l3K9VYyRns5sggj4KV0-tP6GHCQDjXV-26lSlh0R8a4_Dz1wmoJGjK3d6yLiQo5isqvgziCfnTmmUvKZkGFiFni_sVZ2w8BD3NzU-GV6R1BC9aorjB8Rr_rGD_e1aw",
  michael: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOf0xGS1y8edg9fKpMZngQ2qwx1azEChMcdPWE3TLK6i2kw-R0PN90mYfjdAYYe-6ymPN491nqKULIeizXdqndloIL4PFzrGS8lFDpQ7rzsOkmD_OYTqujf46QQ1R1EAKP5yMBxHXNO-N1x06ViXcQa4fVOy-BSdRbIe7uXKauFepteRUK2UxZ85oqvlNuzP2WEHbshApsWfihwcqPpsBK1KMboRzxO8LRDZUJu6nRM4X47sZhqcpCFw",
  map: "https://lh3.googleusercontent.com/aida-public/AB6AXuClPgUuiJ-r-Uzm-yv3sKXz-5Bhl8nmwNg_ywQk8DX4gNaSRD0ydOVN5z4F07zAu3fkV-WwvjsPjqES51J7g2SQ28nXl05ZcPXldXXqpEih2Ui_LOimQQblUtbUYyL7COnzJnI6DhzfMwNxZkynAYUu1YDlkt2HQXibjP7f7H7QiOjRz_ZSBjWNU6AyTzhYJ0qguBeHmCRutHlLkST26b7K2cDmAGqEWIQXdNdraZ7YHuCbWz5EP3uHig",
} as const;

export const team = [
  {
    photo: "/assets/doctor-male.jpg",
    name: "Dr. Arjun Mehta",
    role: "Senior Physiotherapist",
    bio: "Orthopaedic rehabilitation & pain management",
    quote: "True healing begins when we understand the root cause and empower you with the confidence to move freely again.",
  },
  {
    photo: "/assets/doctor-female.jpg",
    name: "Dr. Priya Sharma",
    role: "Sports Physiotherapist",
    bio: "Sports injury, mobility & performance recovery",
    quote: "Rehabilitation isn't just about recovering from an injury—it's about building a stronger, more resilient body.",
  },
] as const;

export const membershipPillars = [
  {
    title: "Health Maintenance+ Membership Benefit",
    description:
      "We provide regular recovery/relaxation sessions in our bi-weekly membership plan for maintenance of optimal body function.",
    badge: "Bi-Weekly Plan",
  },
  {
    title: "Injury Prevention and Health Security",
    description:
      "Our program includes advanced injury prevention protocols and added injury treatment cost coverage.",
    badge: "Health Security",
  },
] as const;

export const coreServices = [
  {
    id: "manual-therapy",
    title: "Manual Therapy",
    badge: "SERVICES",
    headline: "MANUAL THERAPY",
    banner: "/assets/manual therapy.webp",
    fullImage: "/assets/manual therapy.webp",
    accentColor: "#16a578",
    features: [
      {
        num: "01",
        title: "MYOFASCIAL RELEASE TECHNIQUES",
        description:
          "Relaxes and enhances tissue quality by restoring optimal muscle and fascial tone and tensile quality by deep tissue release instantly reducing pain .",
      },
      {
        num: "02",
        title: "JOINT MOBILISATION AND MANIPULATION",
        description:
          "Restores joint mobility and maintains joint health by lubrication of joint and acquires full range joint strength by correction fascia and joint alignment.",
      },
      {
        num: "03",
        title: "PAIN REDUCTION",
        description:
          "Spontaneous reduction of pain achieved due to treatment of problem from the root cause ensuring permanent relief of pain.",
      },
    ],
  },
  {
    id: "chiropractic-therapy",
    title: "Chiropractic Therapy",
    badge: "SERVICES",
    headline: "CHIROPRACTIC THERAPY",
    banner: "/assets/chiropractice therapy.webp",
    fullImage: "/assets/chiropractice therapy.webp",
    accentColor: "#16a578",
    features: [
      {
        num: "01",
        title: "JOINT MANIPULATION AND THRUST",
        description:
          "Highly Specialized spinal thrust techniques which focuses on fixing spinal mal-alignments",
      },
      {
        num: "02",
        title: "POSTURE CORRECTION",
        description:
          "Improves bad postural alignments and corrects overall postural faults of various joints and spinal facets.",
      },
      {
        num: "03",
        title: "PAIN RELIEF",
        description:
          "Modulates spinal nerves to release endogenous endorphins and stops pain signals to the brain inducing relaxation through the body",
      },
    ],
  },
  {
    id: "chinese-cupping-therapy",
    title: "Chinese Cupping Therapy",
    badge: "SERVICES",
    headline: "CHINESE CUPPING THERAPY",
    banner: "/assets/cupping therapy.webp",
    fullImage: "/assets/cupping therapy.webp",
    accentColor: "#16a578",
    features: [
      {
        num: "01",
        title: "BLOOD FLOW RESTORATION",
        description:
          "Tightened tissue structures of fascia and muscles are relaxed which restore smooth blood flow to the treated areas.",
      },
      {
        num: "02",
        title: "DETOXIFICATION",
        description:
          "Toxic metabolites and excess inflammatory debris are cleared from the affected area which detoxes blood and relieves pain and swelling and heals faster.",
      },
      {
        num: "03",
        title: "PAIN REDUCTION AND RELAXATION.",
        description:
          "Reduction from pain by endorphin release and mechano-receptors stimulus causes central nervous relaxation.",
      },
    ],
  },
] as const;

export const services = [
  [
    Sparkles,
    "Age-Reversing Fitness Program",
    [
      "Enhance mobility & flexibility",
      "Build strength & core stability",
      "Reduce natural signs of physical aging",
      "Keeps you active, vibrant & confident at any age.",
    ],
    images.serviceFitness,
    "Longevity & Fitness",
    [
      {
        num: "01",
        title: "MOBILITY & FLEXIBILITY",
        description:
          "Targeted movements to restore full joint articulation, release stiff muscle groups, and regain effortless daily mobility.",
      },
      {
        num: "02",
        title: "CORE STABILITY & STRENGTH",
        description:
          "Progressive functional conditioning to reinforce core muscle groups, stabilize the spine, and prevent physical strain.",
      },
      {
        num: "03",
        title: "VITALITY & AGE REVERSAL",
        description:
          "Combats age-related muscle degeneration, reduces physical wear, and keeps you active, energized, and confident.",
      },
    ],
  ],
  [
    Flower2,
    "Relaxation Therapy Sessions",
    [
      "Rejuvenates deep tissues and recovers fatigue.",
      "Reduces physical & mental stress",
      "Enhances circulation & natural recovery",
      "Promotes full body wellness and deep sleep.",
    ],
    images.serviceRelaxation,
    "Recovery & Wellness",
    [
      {
        num: "01",
        title: "DEEP TISSUE RESTORATION",
        description:
          "Rejuvenates tired fascia and tight muscle structures, releasing chronic muscle tension and post-work fatigue.",
      },
      {
        num: "02",
        title: "STRESS & BURNOUT RELIEF",
        description:
          "Calms the nervous system through sensory stimulation and endorphin flow, relieving mental strain and fatigue.",
      },
      {
        num: "03",
        title: "CIRCULATION & SLEEP QUALITY",
        description:
          "Improves micro-vascular circulation to flush metabolic waste, expedite healing, and promote deep restful sleep.",
      },
    ],
  ],
] as const;

export const stories = [
  ["The age-reversing program helped restore my mobility and strength. I feel more energetic and confident every day.", "Riya Shah", "Age-reversing fitness"],
  ["The relaxation therapy sessions completely relieved my muscle fatigue and work stress. Highly recommended!", "Kunal Mehta", "Relaxation therapy"],
  ["The complimentary physiotherapy consultation helped me identify the root problem and recover quickly.", "Anjali Patel", "Complimentary physiotherapy"],
] as const;

export const navigation = ["About", "Services", "Treatments", "Team", "Testimonials", "Contact"] as const;

export const getWhatsAppBookingUrl = (customMessage?: string) => {
  const defaultMessage =
    "Hello Health Hunter Clinic, I would like to book an appointment for a physiotherapy consultation. Please let me know the available slots.";
  const text = encodeURIComponent(customMessage || defaultMessage);
  return `https://wa.me/${clinicInfo.whatsappNumber}?text=${text}`;
};
