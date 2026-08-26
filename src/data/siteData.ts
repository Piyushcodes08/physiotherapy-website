import { Activity, Dumbbell, Stethoscope } from "lucide-react";

export const clinicInfo = {
  name: "Health Hunter",
  fullName: "Health Hunter Physiotherapy Clinic & Wellness Center",
  tagline: "Physiotherapy Clinic & Wellness Center",
  email: "HealthHunterPlus@protonmail.com",
  phones: [
    { number: "+91 93272 22529", raw: "9327222529", tel: "+919327222529" },
    { number: "+91 63536 27860", raw: "6353627860", tel: "+916353627860" },
  ],
  primaryPhone: "+91 93272 22529",
  secondaryPhone: "+91 63536 27860",
  whatsappNumber: "919327222529",
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
  hero: "/assets/654.png",
  about: "/assets/physiotherapy_clinic_496x620.png",
  sarah: "https://lh3.googleusercontent.com/aida-public/AB6AXuA44xShHMuNWqkifddjdrHtsTd4O4-MpHVuuQ_KfbgkATvWCPnt1TwBQ0imAU6xOC5FO6K6REmn0HnSFO7dm0FUgLFyUi3dYvE_ti731Cgru-hvJIfYKuKB2Is0l3K9VYyRns5sggj4KV0-tP6GHCQDjXV-26lSlh0R8a4_Dz1wmoJGjK3d6yLiQo5isqvgziCfnTmmUvKZkGFiFni_sVZ2w8BD3NzU-GV6R1BC9aorjB8Rr_rGD_e1aw",
  michael: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOf0xGS1y8edg9fKpMZngQ2qwx1azEChMcdPWE3TLK6i2kw-R0PN90mYfjdAYYe-6ymPN491nqKULIeizXdqndloIL4PFzrGS8lFDpQ7rzsOkmD_OYTqujf46QQ1R1EAKP5yMBxHXNO-N1x06ViXcQa4fVOy-BSdRbIe7uXKauFepteRUK2UxZ85oqvlNuzP2WEHbshApsWfihwcqPpsBK1KMboRzxO8LRDZUJu6nRM4X47sZhqcpCFw",
  map: "https://lh3.googleusercontent.com/aida-public/AB6AXuClPgUuiJ-r-Uzm-yv3sKXz-5Bhl8nmwNg_ywQk8DX4gNaSRD0ydOVN5z4F07zAu3fkV-WwvjsPjqES51J7g2SQ28nXl05ZcPXldXXqpEih2Ui_LOimQQblUtbUYyL7COnzJnI6DhzfMwNxZkynAYUu1YDlkt2HQXibjP7f7H7QiOjRz_ZSBjWNU6AyTzhYJ0qguBeHmCRutHlLkST26b7K2cDmAGqEWIQXdNdraZ7YHuCbWz5EP3uHig",
} as const;

export const team = [
  {
    photo: images.sarah,
    name: "Dr. Sarah Jenkins",
    role: "Senior Physiotherapist",
    bio: "Orthopaedic rehabilitation & pain management",
    quote: "True healing begins when we understand the root cause and empower you with the confidence to move freely again.",
  },
  {
    photo: images.michael,
    name: "Dr. Michael D’souza",
    role: "Sports Physiotherapist",
    bio: "Sports injury, mobility & performance recovery",
    quote: "Rehabilitation isn't just about recovering from an injury—it's about building a stronger, more resilient body.",
  },
] as const;

export const services = [
  [Activity, "Orthopaedic", "Care for joint pain, arthritis, posture concerns and musculoskeletal conditions."],
  [Dumbbell, "Sports Therapy", "Injury rehabilitation and performance support for active people and athletes."],
  [Stethoscope, "Post-Surgical Care", "Guided recovery to rebuild strength and mobility after orthopaedic surgery."],
] as const;

export const stories = [
  ["After weeks of shoulder pain, I finally understood the cause and saw steady progress in every session.", "Riya Shah", "Orthopaedic care"],
  ["The plan was clear, practical and built around my sport. I returned stronger and more confident.", "Kunal Mehta", "Sports therapy"],
  ["Patient, professional and encouraging. The one-to-one attention made recovery feel manageable.", "Anjali Patel", "Post-surgical care"],
] as const;

export const navigation = ["About", "Services", "Testimonials", "Team", "Contact"] as const;
