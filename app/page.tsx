import Hero from "@/components/home/Hero";
import FloralShopPreview from "@/components/home/FloralShopPreview";
import Services from "@/components/home/Services";
import FeaturedEvents from "@/components/home/FeaturedEvents";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FloralShopPreview />
      <Services />
      <FeaturedEvents />
      <WhyChooseUs />
      <Testimonials />
      <ContactCTA />
    </main>
  );
}
