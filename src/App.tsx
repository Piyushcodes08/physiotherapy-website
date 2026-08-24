import { useState } from "react";
import { About } from "./components/sections/About";
import { BookingPopup } from "./components/BookingPopup";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import { Header } from "./components/sections/Header";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { Team } from "./components/sections/Team";
import { Testimonials } from "./components/sections/Testimonials";

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <main>
      <Header onBook={() => setBookingOpen(true)} />
      <Hero onBook={() => setBookingOpen(true)} />
      <About />
      <Services />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
      <BookingPopup
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </main>
  );
}
