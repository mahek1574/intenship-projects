import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";
import Question from "./components/Quistion";
import ClientLogos from "./components/Clientlogos";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ClientLogos/>
      <Services />
      <Portfolio />
      <Testimonials />
      <Question/>
      <Contact/>
       <Footer/>

    </>
  );
}

export default App;
