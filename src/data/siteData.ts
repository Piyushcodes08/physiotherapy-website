import { Activity, Dumbbell, Stethoscope } from "lucide-react";

export const images = {
  hero: "Public/assets/111.png",
  about: "Public/assets/physiotherapy_clinic_496x620.png",
  sarah: "https://lh3.googleusercontent.com/aida-public/AB6AXuA44xShHMuNWqkifddjdrHtsTd4O4-MpHVuuQ_KfbgkATvWCPnt1TwBQ0imAU6xOC5FO6K6REmn0HnSFO7dm0FUgLFyUi3dYvE_ti731Cgru-hvJIfYKuKB2Is0l3K9VYyRns5sggj4KV0-tP6GHCQDjXV-26lSlh0R8a4_Dz1wmoJGjK3d6yLiQo5isqvgziCfnTmmUvKZkGFiFni_sVZ2w8BD3NzU-GV6R1BC9aorjB8Rr_rGD_e1aw",
  michael: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOf0xGS1y8edg9fKpMZngQ2qwx1azEChMcdPWE3TLK6i2kw-R0PN90mYfjdAYYe-6ymPN491nqKULIeizXdqndloIL4PFzrGS8lFDpQ7rzsOkmD_OYTqujf46QQ1R1EAKP5yMBxHXNO-N1x06ViXcQa4fVOy-BSdRbIe7uXKauFepteRUK2UxZ85oqvlNuzP2WEHbshApsWfihwcqPpsBK1KMboRzxO8LRDZUJu6nRM4X47sZhqcpCFw",
  map: "https://lh3.googleusercontent.com/aida-public/AB6AXuClPgUuiJ-r-Uzm-yv3sKXz-5Bhl8nmwNg_ywQk8DX4gNaSRD0ydOVN5z4F07zAu3fkV-WwvjsPjqES51J7g2SQ28nXl05ZcPXldXXqpEih2Ui_LOimQQblUtbUYyL7COnzJnI6DhzfMwNxZkynAYUu1YDlkt2HQXibjP7f7H7QiOjRz_ZSBjWNU6AyTzhYJ0qguBeHmCRutHlLkST26b7K2cDmAGqEWIQXdNdraZ7YHuCbWz5EP3uHig",
} as const;

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
