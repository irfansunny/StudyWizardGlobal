import Hero from "@/components/sections/hero";
import Stats from "@/components/sections/stats";
import Services from "@/components/sections/services";
import Destinations from "@/components/sections/destinations";
import Process from "@/components/sections/process";
import Testimonials from "@/components/sections/testimonials";
import About from "@/components/sections/about";
import Faq from "@/components/sections/faq";
import Contact from "@/components/sections/contact";
import Cta from "@/components/sections/cta";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Destinations />
      <Process />
      <Testimonials />
      <About />
      <Faq />
      <Contact />
      <Cta />
    </>
  );
};

export default HomePage;
