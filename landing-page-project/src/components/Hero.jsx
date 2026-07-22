import heroImage from "../assets/hero.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative pt-24 pb-16 md:pt-28 md:pb-20 lg:pt-36 lg:pb-28 bg-gradient-to-b from-[#F8FAF8] via-white to-[#F8FAF8] overflow-hidden"
    >
  
      <div className="absolute top-10 right-0 w-72 h-72 md:w-96 md:h-96 bg-[#BCCFC4]/20 rounded-full blur-3xl -z-10 animate-pulse duration-[8000ms]"></div>
      <div className="absolute bottom-10 left-0 w-60 h-60 md:w-80 md:h-80 bg-[#6B8F7B]/15 rounded-full blur-3xl -z-10"></div>

    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-6 lg:gap-10 items-center">
          
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 z-10 text-center md:text-left"
          >
          
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#BCCFC4]/40 shadow-sm hover:border-[#6B8F7B]/50 transition-colors duration-300">
              <span className="w-2 h-2 rounded-full bg-[#6B8F7B] animate-ping"></span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#4F6658]">
                Digital Marketing Agency
              </span>
            </div>

          
            <h1 className="mt-5 text-3xl sm:text-4xl md:text-[2.65rem] lg:text-6xl font-extrabold leading-[1.15] tracking-tight text-[#17221B]">
              We Help Businesses{" "}
              <span className="bg-gradient-to-r from-[#6B8F7B] to-[#4F6658] bg-clip-text text-transparent inline-block">
                Grow Digitally
              </span>{" "}
              With Smart Solutions
            </h1>

            
            <p className="mt-4 text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              From high-converting websites to SEO, branding, advertising, and
              AI-powered marketing, we help businesses attract more customers
              and increase revenue.
            </p>

      
            <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="px-6 py-3 md:px-7 md:py-3.5 rounded-full bg-[#17221B] text-white font-semibold shadow-md hover:bg-[#6B8F7B] transition-all duration-300 text-xs md:text-sm"
              >
                Get Free Strategy Call
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#services"
                className="px-6 py-3 md:px-7 md:py-3.5 rounded-full bg-white border border-[#BCCFC4]/60 text-[#17221B] font-semibold hover:bg-gray-50 transition-all duration-300 text-xs md:text-sm"
              >
                Explore Services
              </motion.a>
            </div>

          
            <div className="mt-6 md:mt-8 pt-5 border-t border-gray-200/60 flex items-center justify-center md:justify-start gap-8 md:gap-10">
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#17221B]">
                  50+
                </h3>
                <p className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-gray-400 mt-0.5">
                  Successful Projects
                </p>
              </div>

              <div className="h-8 w-px bg-gray-200"></div>

              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#17221B]">
                  95%
                </h3>
                <p className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-gray-400 mt-0.5">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </motion.div>

        
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="md:col-span-5 relative flex justify-center md:justify-end mt-6 md:mt-0"
          >
            <div className="relative w-full max-w-sm md:max-w-none">
              
            
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#6B8F7B]/20 to-[#BCCFC4]/30 rounded-[32px] rotate-2 blur-xs"></div>

              <div className="relative bg-white rounded-[28px] md:rounded-[32px] p-3 shadow-xl border border-gray-100/80 overflow-hidden">
                <img
                  src={heroImage}
                  alt="Digital Growth"
                  className="w-full h-[260px] sm:h-[320px] md:h-[310px] lg:h-[400px] object-cover rounded-[22px] md:rounded-[26px] transition-transform duration-700 hover:scale-105"
                />

            
                <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md shadow-md rounded-xl p-2.5 border border-white/60 animate-float">
                  <p className="text-[9px] uppercase tracking-wider text-gray-400 font-bold">
                    Growth Rate
                  </p>
                  <h4 className="text-base md:text-lg font-black text-[#6B8F7B] mt-0.5">
                    +240%
                  </h4>
                </div>

              
                <div className="absolute bottom-5 right-5 bg-[#17221B]/95 backdrop-blur-md text-white rounded-xl p-2.5 shadow-md border border-white/10 animate-float-delayed">
                  <p className="text-[9px] uppercase tracking-wider text-gray-300 font-bold">
                    Trusted By
                  </p>
                  <h4 className="font-bold text-xs mt-0.5">
                    Modern Businesses
                  </h4>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;