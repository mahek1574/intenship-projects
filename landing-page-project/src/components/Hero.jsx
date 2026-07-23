import heroImage from "../assets/hero.jpg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.98, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 lg:pb-24 bg-gradient-to-b from-[#F8FAF8] via-white to-[#F8FAF8] overflow-hidden"
    >
      
      <div className="absolute top-10 right-0 w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-[#BCCFC4]/20 rounded-full blur-3xl -z-10 animate-pulse duration-[8000ms]"></div>
      <div className="absolute bottom-10 left-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-[#6B8F7B]/15 rounded-full blur-3xl -z-10"></div>

    
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-10">
        
    
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-center">
          
      
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            
            className="w-full lg:col-span-7 z-10 text-center lg:text-left max-w-xl md:max-w-3xl lg:max-w-none mx-auto"
          >
        
            <motion.div variants={itemVariants} className="inline-block">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#BCCFC4]/40 shadow-sm hover:border-[#6B8F7B]/50 transition-colors duration-300">
                <span className="w-2 h-2 rounded-full bg-[#6B8F7B] animate-ping"></span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#4F6658]">
                  Digital Marketing Agency
                </span>
              </div>
            </motion.div>

          
            <motion.h1 
              variants={itemVariants} 
              className="mt-4 sm:mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.16] tracking-tight text-[#17221B]"
            >
              We Help Businesses{" "}
              <span className="bg-gradient-to-r from-[#6B8F7B] to-[#4F6658] bg-clip-text text-transparent inline-block">
                Grow Digitally
              </span>
              With Smart Solutions
            </motion.h1>

        
            <motion.p 
              variants={itemVariants} 
              className="mt-3.5 sm:mt-4 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg md:max-w-2xl lg:max-w-xl mx-auto lg:mx-0"
            >
              From high-converting websites to SEO, branding, advertising, and
              AI-powered marketing, we help businesses attract more customers
              and increase revenue.
            </motion.p>

          
            <motion.div 
              variants={itemVariants} 
              className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href="#contact"
                className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-full bg-[#17221B] text-white font-semibold shadow-md hover:bg-[#6B8F7B] hover:shadow-lg transition-all duration-300 text-xs sm:text-sm"
              >
                Get Free Strategy Call
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href="#services"
                className="px-6 py-3.5 sm:px-7 sm:py-4 rounded-full bg-white border border-[#BCCFC4]/60 text-[#17221B] font-semibold hover:bg-gray-50 hover:shadow-sm transition-all duration-300 text-xs sm:text-sm"
              >
                Explore Services
              </motion.a>
            </motion.div>

          
            <motion.div 
              variants={itemVariants} 
              className="mt-7 sm:mt-9 pt-5 border-t border-gray-200/60 flex items-center justify-center lg:justify-start gap-8 sm:gap-12"
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17221B]">
                  50+
                </h3>
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400 mt-0.5">
                  Successful Projects
                </p>
              </div>

              <div className="h-8 w-px bg-gray-200"></div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17221B]">
                  95%
                </h3>
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-gray-400 mt-0.5">
                  Client Satisfaction
                </p>
              </div>
            </motion.div>
          </motion.div>

        
          <motion.div 
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full lg:col-span-5 relative flex justify-center lg:justify-end mt-2 lg:mt-0"
          >
          
            <div className="relative w-full max-w-md md:max-w-xl lg:max-w-none">
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#6B8F7B]/20 to-[#BCCFC4]/30 rounded-[32px] rotate-2 blur-xs"></div>

              <div className="relative bg-white rounded-[28px] lg:rounded-[32px] p-3 shadow-xl border border-gray-100/80 overflow-hidden">
                <img
                  src={heroImage}
                  alt="Digital Growth"
                  className="w-full h-[280px] sm:h-[340px] md:h-[380px] lg:h-[400px] object-cover rounded-[22px] lg:rounded-[26px] transition-transform duration-700 hover:scale-105"
                />

            
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.25 }}
                  viewport={{ once: true }}
                  className="absolute top-5 left-5 bg-white/95 backdrop-blur-md shadow-md rounded-xl p-2.5 sm:p-3 border border-white/60 animate-float"
                >
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                    Growth Rate
                  </p>
                  <h4 className="text-base sm:text-lg font-black text-[#6B8F7B] mt-0.5">
                    +240%
                  </h4>
                </motion.div>

            
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.25 }}
                  viewport={{ once: true }}
                  className="absolute bottom-5 right-5 bg-[#17221B]/95 backdrop-blur-md text-white rounded-xl p-2.5 sm:p-3 shadow-md border border-white/10 animate-float-delayed"
                >
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-gray-300 font-bold">
                    Trusted By
                  </p>
                  <h4 className="font-bold text-xs sm:text-sm mt-0.5">
                    Modern Businesses
                  </h4>
                </motion.div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;