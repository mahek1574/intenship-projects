import { motion } from "framer-motion";
import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import logo from "../assets/logo.svg";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "UI/UX Design",
    "Web Development",
    "Brand Identity",
    "Digital Marketing",
  ];

  return (
    <footer className="relative bg-black text-gray-300 border-t border-white/10 overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16"
      >

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          
          <div className="lg:col-span-2">

            <img
              src={logo}
              alt="Logo"
              className="h-10 brightness-0 invert hover:scale-105 transition duration-300"
            />

            <p className="mt-6 max-w-md leading-7 text-gray-400">
              We craft premium digital experiences that help ambitious brands
              grow faster through modern design, strategic development and
              powerful marketing solutions.
            </p>

            <div className="flex items-center gap-4 mt-8">

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
              <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
                <FaXTwitter />
              </a>

            </div>

          </div>

        
          <div>

            <h3 className="text-white font-semibold text-lg mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

          </div>
                
          <div>

            <h3 className="text-white font-semibold text-lg mb-6">
              Services
            </h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>

          </div>

        </div>

    
      
              
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500 text-center md:text-left"
          >
            © {new Date().getFullYear()} Landing Page Project. All Rights
            Reserved.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-6 text-sm">

            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-white transition-colors duration-300"
            >
              Terms & Conditions
            </a>

          </div>

        </div>

      </motion.div>

      
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full bg-white text-black shadow-xl flex items-center justify-center hover:scale-110 transition-all duration-300"
      >
        <ArrowUp size={20} />
      </button>

    </footer>
  );
}