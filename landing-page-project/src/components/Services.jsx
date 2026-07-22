import { Code, Search, Share2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Web Design & Development",
      description: "We build custom, high-converting websites optimized for all devices and speed."
    },
    {
      icon: Search,
      title: "Search Engine Optimization",
      description: "Boost your rankings on Google search and attract organic, high-intent traffic."
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Engage your target audience and grow your brand footprint on all social channels."
    },
    {
      icon: Sparkles,
      title: "Branding & Identity",
      description: "Craft a distinct voice, logo, and design language that stands out in the market."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#6B8F7B] bg-[#6B8F7B]/10 px-4 py-1.5 rounded-full">
            Our Services
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold text-[#17221B] tracking-tight">
            How We Grow Your Business
          </h2>
          <p className="mt-4 text-gray-500 text-base max-w-2xl mx-auto">
            Tailored digital solutions engineered to acquire customers and drive measurable ROI.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xs hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#6B8F7B]/10 text-[#6B8F7B] flex items-center 
                justify-center group-hover:bg-[#6B8F7B] group-hover:text-white transition-colors
                 duration-300 shadow-inner">
                  <Icon size={24} />
                </div>
                <h3 className="mt-6 font-bold text-lg text-[#17221B] group-hover:text-[#6B8F7B] 
                transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
