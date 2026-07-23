import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo.svg";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { servicesData } from "../data/servicesData";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const navigate = useNavigate();
  const serviceKeys = Object.keys(servicesData);


  const handleHomeClick = () => {
    setOpen(false);
    setServicesDropdown(false);
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSectionScroll = (hash) => {
    setOpen(false);
    setServicesDropdown(false);
    navigate("/");
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#EAF0EB]/95 backdrop-blur-md border-b border-[#BCCFC4]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          
        
          <Link to="/" onClick={handleHomeClick}>
            <img
              src={logo}
              alt="Logo"
              className="h-8 sm:h-12 lg:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </Link>

        
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          
            <Link
              to="/"
              onClick={handleHomeClick}
              className="text-sm lg:text-[15px] font-medium text-[#17221B]/80 hover:text-[#6B8F7B] transition-colors"
            >
              Home
            </Link>

        
            <div
              className="relative py-6"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button
                onClick={() => handleSectionScroll("#services")}
                className="flex items-center gap-1.5 text-sm lg:text-[15px] font-medium text-[#17221B]/80 hover:text-[#6B8F7B] transition-colors"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    servicesDropdown ? "rotate-180 text-[#6B8F7B]" : ""
                  }`}
                />
              </button>

          
              <AnimatePresence>
                {servicesDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-[calc(100%-8px)] left-0 w-56 bg-white rounded-xl shadow-xl border border-[#BCCFC4]/30 py-2 overflow-hidden"
                  >
                    {serviceKeys.map((slug) => (
                      <Link
                        key={slug}
                        to={`/services/${slug}`}
                        onClick={() => setServicesDropdown(false)}
                        className="block px-4 py-2.5 text-sm font-medium text-[#17221B]/90 hover:bg-[#EAF0EB] hover:text-[#6B8F7B] transition-colors"
                      >
                        {servicesData[slug].title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => handleSectionScroll("#portfolio")}
              className="text-sm lg:text-[15px] font-medium text-[#17221B]/80 hover:text-[#6B8F7B] transition-colors"
            >
              Projects
            </button>

            <button
              onClick={() => handleSectionScroll("#testimonials")}
              className="text-sm lg:text-[15px] font-medium text-[#17221B]/80 hover:text-[#6B8F7B] transition-colors"
            >
              Testimonials
            </button>

            <button
              onClick={() => handleSectionScroll("#contact")}
              className="text-sm lg:text-[15px] font-medium text-[#17221B]/80 hover:text-[#6B8F7B] transition-colors"
            >
              Contact
            </button>
          </nav>

          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSectionScroll("#contact")}
            className="hidden md:inline-flex bg-[#17221B] text-white px-6 py-2.5 rounded-full text-xs lg:text-sm font-semibold uppercase tracking-wide hover:bg-[#6B8F7B] transition-colors shadow-md"
          >
            Get in Touch
          </motion.button>

          
          <button
            className="md:hidden relative z-50 p-2 rounded-full text-[#17221B] hover:bg-[#BCCFC4]/40 transition-colors"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>


      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-[#BCCFC4]/40 shadow-2xl overflow-hidden px-6 py-6"
          >
            <div className="flex flex-col gap-4">
        
              <Link
                to="/"
                onClick={handleHomeClick}
                className="text-base font-semibold text-[#17221B]"
              >
                Home
              </Link>

            
              <div className="border-y border-gray-100 py-3">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full text-base font-semibold text-[#17221B]"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180 text-[#6B8F7B]" : ""
                    }`}
                  />
                </button>

                {mobileServicesOpen && (
                  <div className="flex flex-col gap-2.5 mt-3 pl-3 border-l-2 border-[#6B8F7B]">
                    {serviceKeys.map((slug) => (
                      <Link
                        key={slug}
                        to={`/services/${slug}`}
                        onClick={() => setOpen(false)}
                        className="text-sm font-medium text-gray-600 hover:text-[#6B8F7B] transition-colors"
                      >
                        {servicesData[slug].title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => handleSectionScroll("#portfolio")}
                className="text-left text-base font-semibold text-[#17221B]"
              >
                Projects
              </button>

              <button
                onClick={() => handleSectionScroll("#contact")}
                className="text-left text-base font-semibold text-[#17221B]"
              >
                Contact
              </button>

              <button
                onClick={() => handleSectionScroll("#contact")}
                className="mt-2 w-full bg-[#17221B] text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider text-center"
              >
                Get In Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;