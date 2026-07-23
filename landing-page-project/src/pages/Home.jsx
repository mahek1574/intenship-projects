import Hero from "../components/Hero";
import ClientLogos from "../components/Clientlogos";
import Portfolio from "../components/Portfolio";
import Quistion from "../components/Quistion";
import Services from "../components/Services";
import ProcessSection from "../components/ProcessSection";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <main>
      <div id="home"><Hero /></div>
      <div id="logos"><ClientLogos /></div>
      <div id="services"><Services /></div>
    
      <div id="process"><ProcessSection /></div>

      <div id="portfolio"><Portfolio /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="faq"><Quistion /></div>
      <div id="contact"><Contact /></div>
    </main>
  );
};

export default Home;