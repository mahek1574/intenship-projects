import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-[#17221B] text-gray-400 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
         <div className="md:col-span-2 md:pl-10 lg:pl-20">
  <img src={logo} alt="Logo" className="h-10 w-auto brightness-0 invert" />

  <p className="mt-6 text-sm text-gray-400 max-w-sm leading-relaxed">
    We help modern brands scale with design-first product interfaces, high-end content strategies, and growth marketing frameworks.
  </p>
</div>
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">
              Agency Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">contact us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-5">
              Get Connected
            </h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Support</a></li>
              <li><a href="mailto:hello@agency.com" className="hover:text-white transition-colors">123@example.com</a></li>
              <li><a href="tel:+15551234567" className="hover:text-white transition-colors">+91 1234567890</a></li>
            </ul> 
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs gap-4">
          <p>© {new Date().getFullYear()} Landing Page Project. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
