import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { About } from "./components/sections/About";
import { BookingPopup } from "./components/BookingPopup";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import { Header } from "./components/sections/Header";
import { Hero } from "./components/sections/Hero";
import { CoreServices } from "./components/sections/CoreServices";
import { Services } from "./components/sections/Services";
import { Team } from "./components/sections/Team";
import { Testimonials } from "./components/sections/Testimonials";
import { Treatments } from "./components/sections/Treatments";
import { getWhatsAppBookingUrl } from "./data/siteData";

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedService(serviceName);
    setBookingOpen(true);
  };

  return (
    <main>
      <Header onBook={() => handleOpenBooking()} />
      <Hero onBook={() => handleOpenBooking()} />
      <CoreServices onBook={(service) => handleOpenBooking(service)} />
        <About onBook={() => handleOpenBooking()} />
      <Services onBook={(service) => handleOpenBooking(service)} />
      
     
      <Team onBook={() => handleOpenBooking()} />
      <Testimonials />
      <Contact />
      <Footer onBook={() => handleOpenBooking()} />
      <BookingPopup
        open={bookingOpen}
        defaultService={selectedService}
        onClose={() => setBookingOpen(false)}
      />

      {/* Floating Action Button */}
      <button
        type="button"
        onClick={() => handleOpenBooking()}
        aria-label="Book appointment"
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(37,211,102,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(37,211,102,0.5)] cursor-pointer"
      >
        <MessageCircle className="h-5 w-5 fill-current" />
        <span className="hidden sm:inline">Book appointment</span>
      </button>
    </main>
  );
}
