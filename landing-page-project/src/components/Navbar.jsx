import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.svg";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/75 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">

          
          <a href="#home" onClick={() => setOpen(false)}>
            <img
              src={logo}
              alt="Logo"
              className="h-10 lg:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </a>

        
          <nav className="hidden md:flex items-center gap-5 lg:gap-7 xl:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative whitespace-nowrap text-sm lg:text-[15px] font-medium lg:font-semibold text-[#17221B]/80 hover:text-[#6B8F7B] transition-colors duration-300 group"
              >
                {link.name}

                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#6B8F7B] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="hidden md:inline-flex items-center justify-center
            whitespace-nowrap
            bg-[#17221B]
            text-white
            px-5 lg:px-7
            py-2.5 lg:py-3
            rounded-full
            text-xs lg:text-sm
            font-semibold
            tracking-wide
            uppercase
            hover:bg-[#6B8F7B]
            transition-colors
            duration-300
            hover:shadow-lg"
          >
            Get in Touch
          </motion.a>

        
          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

    
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-semibold text-[#17221B] hover:text-[#6B8F7B] transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                onClick={() => setOpen(false)}
                className="bg-[#17221B] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#6B8F7B] transition-colors duration-300"
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;