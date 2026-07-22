import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform Rebrand",
      category: "Retail & Commerce",
      bgColor: "from-[#BCCFC4]/20 to-[#6B8F7B]/10",
      accentColor: "#6B8F7B",
    },
    {
      title: "Fintech Mobile Application",
      category: "Financial Technology",
      bgColor: "from-[#17221B]/5 to-[#17221B]/20",
      accentColor: "#17221B",
    },
    {
      title: "AI-Powered SaaS Dashboard",
      category: "B2B Software",
      bgColor: "from-[#6B8F7B]/20 to-[#17221B]/15",
      accentColor: "#4F6658",
    },
  ];

  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 18,
      },
    },
  };

  return (
    <section id="portfolio" className="py-24 bg-[#F8FAF8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
      
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{once:false}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-block text-xs font-bold uppercase tracking-widest text-[#6B8F7B] bg-[#6B8F7B]/10 px-4 py-1.5 rounded-full cursor-default"
          >
            Our Portfolio
          </motion.span>
          <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold text-[#17221B] tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-4 text-gray-500 text-base max-w-2xl mx-auto">
            A curated selection of our digital campaigns, branding initiatives, and custom platforms.
          </p>
        </motion.div>

  
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once:false , margin: "-50px" }}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-[32px] overflow-hidden border border-gray-100/80 shadow-xs hover:shadow-2xl hover:border-[#6B8F7B]/20 transition-all duration-300 group cursor-pointer"
            >
          
              <div
                className={`relative h-60 bg-gradient-to-br ${project.bgColor} flex items-center justify-center p-8 overflow-hidden`}
              >
            
                <motion.div
                  className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                <div className="text-center relative z-10 transition-transform duration-500 group-hover:scale-105">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-xs">
                    {project.category}
                  </span>
                  <h4 className="mt-4 text-xl font-black text-[#17221B] line-clamp-2">
                    {project.title}
                  </h4>
                </div>
              </div>

            
              <div className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                    Case Study
                  </p>
                  <h3 className="text-base font-bold text-[#17221B] mt-1 group-hover:text-[#6B8F7B] transition-colors duration-300">
                    View Details
                  </h3>
                </div>

              
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-[#17221B] text-white flex items-center justify-center group-hover:bg-[#6B8F7B] transition-colors duration-300 shadow-md"
                >
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}