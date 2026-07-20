import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "My Projects", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/75 
    backdrop-blur-md border-b border-gray-100/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center" onClick={() => setOpen(false)}>
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-[#17221B]/80 font-semibold hover:text-[#6B8F7B] transition-colors 
                duration-300 py-2 group text-sm"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6B8F7B] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <a 
            href="#contact" 
            className="hidden md:inline-block bg-[#17221B] text-white px-6 py-2.5
             rounded-full font-semibold hover:bg-[#6B8F7B] 
            transition-all duration-300 hover:shadow-lg active:scale-95 text-xs tracking-wider uppercase"
          >
            Get in Touch
          </a>

          <button
            className="md:hidden text-[#17221B] p-2 hover:bg-gray-100/80 rounded-full transition-colors duration-300"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-200/50 transition-all duration-300 ease-in-out origin-top ${
          open ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-95 invisible h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-8 px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#17221B] font-semibold hover:text-[#6B8F7B] transition-colors text-lg"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="w-full text-center bg-[#17221B] text-white px-6 py-3 
            rounded-full font-semibold hover:bg-[#6B8F7B] transition-colors duration-300 max-w-xs"
            onClick={() => setOpen(false)}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;