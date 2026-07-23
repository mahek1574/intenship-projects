import { useState } from "react";
import { Code, Search, Share2, Sparkles, Smartphone, ShieldCheck, Palette, ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Services() {
  const categories = [
    { id: "all", label: "All Services" },
    { id: "dev", label: "Web & App" },
    { id: "marketing", label: "Marketing & SEO" },
    { id: "design", label: "Design & Branding" },
  ];

  const allServices = [
    {
      slug: "web-design-development",
      category: "dev",
      icon: Code,
      title: "Web Design & Development",
      description: "We build custom, high-converting websites optimized for speed, mobile devices, and SEO.",
    },
    {
      slug: "mobile-app-development",
      category: "dev",
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps for iOS and Android built with seamless UI/UX.",
    },
    {
      slug: "search-engine-optimization",
      category: "marketing",
      icon: Search,
      title: "Search Engine Optimization",
      description: "Boost your rankings on Google search and attract organic, high-intent traffic.",
    },
    {
      slug: "social-media-marketing",
      category: "marketing",
      icon: Share2,
      title: "Social Media Marketing",
      description: "Engage your target audience and grow your brand footprint on all social channels.",
    },
    {
      slug: "branding-identity",
      category: "design",
      icon: Sparkles,
      title: "Branding & Identity",
      description: "Craft a distinct voice, logo, and design language that stands out in the market.",
    },
    {
      slug: "ui-ux-design",
      category: "design",
      icon: Palette,
      title: "UI/UX Experience Design",
      description: "Intuitive digital product designs focused on seamless user journeys and conversions.",
    },
    {
      slug: "website-maintenance-security",
      category: "dev",
      icon: ShieldCheck,
      title: "Website Audit & Security",
      description: "24/7 server monitoring, performance audits, and malware protection for web apps.",
    },
  ];

  const [activeTab, setActiveTab] = useState("all");

  const filteredServices = activeTab === "all" 
    ? allServices 
    : allServices.filter(s => s.category === activeTab);

  return (
    <section id="services" className="relative py-24 bg-[#FAFCFB] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#6B8F7B]/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#6B8F7B] bg-[#6B8F7B]/10 px-4 py-1.5 rounded-full cursor-default">
            Our Expertise
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold text-[#17221B] tracking-tight">
            Comprehensive Solutions For Your Business
          </h2>
          <p className="mt-4 text-gray-500 text-base max-w-2xl mx-auto">
            From design to development and marketing, we provide full-suite digital solutions engineered for growth.
          </p>
        </motion.div>

        
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === category.id
                  ? "text-white bg-[#6B8F7B] shadow-md shadow-[#6B8F7B]/20"
                  : "text-gray-600 bg-white hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

    
        <motion.div 
          layout 
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredServices.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={service.slug}
                  className="relative bg-white p-7 rounded-3xl border border-gray-100 shadow-xs hover:shadow-2xl hover:border-[#6B8F7B]/30 transition-all duration-300 group flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#6B8F7B]/10 rounded-full blur-2xl group-hover:bg-[#6B8F7B]/20 transition-all duration-500" />

                    <div className="w-12 h-12 rounded-2xl bg-[#6B8F7B]/10 text-[#6B8F7B] flex items-center justify-center group-hover:bg-[#6B8F7B] group-hover:text-white transition-colors duration-300 shadow-inner">
                      <Icon size={24} />
                    </div>

                    <h3 className="mt-6 font-bold text-lg text-[#17221B] group-hover:text-[#6B8F7B] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-gray-100/80">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6B8F7B] hover:text-[#17221B] transition-colors duration-200"
                    >
                      Learn More
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}

        
           {activeTab === "all" && (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.3 }}
    className="relative bg-gradient-to-br from-[#6B8F7B]/10 via-[#6B8F7B]/5 to-white p-7 rounded-3xl border-2 border-dashed border-[#6B8F7B]/40 shadow-xs hover:shadow-xl hover:border-[#6B8F7B] transition-all duration-300 group flex flex-col justify-between overflow-hidden"
  >
  
    <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#6B8F7B]/20 rounded-full blur-2xl group-hover:bg-[#6B8F7B]/30 transition-all duration-500" />

    <div>
    
      <div className="w-12 h-12 rounded-2xl bg-[#6B8F7B] text-white flex items-center justify-center shadow-md shadow-[#6B8F7B]/20">
        <Sparkles size={22} />
      </div>

      <h3 className="mt-6 font-extrabold text-lg text-[#17221B] group-hover:text-[#6B8F7B] transition-colors duration-300">
        Need Something Custom?
      </h3>
      
      <p className="mt-3 text-sm text-gray-600 leading-relaxed">
        Have a unique requirement? We engineer tailored tech solutions specifically for your business goals.
      </p>
    </div>
    <div className="mt-8 pt-4 border-t border-[#6B8F7B]/20">
      <a
        href="#contact"
        className="inline-flex items-center justify-between w-full text-xs font-bold uppercase tracking-wider text-[#17221B] group-hover:text-[#6B8F7B] transition-colors"
      >
        <span>Let's Discuss Project</span>
        <ArrowUpRight className="w-4 h-4 text-[#6B8F7B] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </div>
  </motion.div>
)}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}