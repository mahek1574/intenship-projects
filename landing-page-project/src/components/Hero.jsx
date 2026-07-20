import heroImage from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-to-b from-[#F8FAF8] via-white to-[#F8FAF8] overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#BCCFC4]/20 rounded-full blur-3xl -z-10 animate-pulse duration-[8000ms]"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#6B8F7B]/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 relative z-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#BCCFC4]/30 shadow-sm hover:border-[#6B8F7B]/50 transition-colors duration-300">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6B8F7B] animate-ping"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#4F6658]">
                Digital Marketing Agency
              </span>
            </div>

            <h1 className="mt-8 text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight text-[#17221B]">
              We Help Businesses
              <span className="block mt-2 bg-gradient-to-r from-[#6B8F7B] to-[#4F6658] bg-clip-text text-transparent">
                Grow Digitally
              </span>
              With Smart Solutions
            </h1>

            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-gray-500 text-lg leading-relaxed">
              From high-converting websites to SEO, branding, advertising and
              AI-powered marketing, we help businesses attract more customers
              and increase revenue.
            </p>

            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="px-8 py-4 rounded-full bg-[#17221B] text-white font-semibold shadow-lg hover:bg-[#6B8F7B] hover:shadow-xl transition-all duration-300 active:scale-95 text-sm"
              >
                Get Free Strategy Call
              </a>
              <a
                href="#services"
                className="px-8 py-4 rounded-full bg-white border border-[#BCCFC4]/50 text-[#17221B] font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 text-sm"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-center lg:justify-start gap-12">
              <div>
                <h3 className="text-3xl font-extrabold text-[#17221B]">
                  50+
                </h3>
                <p className="text-xs font-medium uppercase tracking-wider text-gray-400 mt-1">
                  Successful Projects
                </p>
              </div>
              <div className="h-10 w-px bg-gray-200"></div>
              <div>
                <h3 className="text-3xl font-extrabold text-[#17221B]">
                  95%
                </h3>
                <p className="text-xs font-medium uppercase tracking-wider text-gray-400 mt-1">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#6B8F7B]/30 to-[#BCCFC4]/40 rounded-[40px] rotate-3 blur-xs"></div>

              <div className="relative bg-white rounded-[40px] p-4 shadow-2xl border border-gray-100/50 overflow-hidden">
                <img
                  src={heroImage}
                  alt="Digital Growth"
                  className="w-full h-[400px] object-cover rounded-[30px] transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-4 border border-white/50 animate-float">
                  <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                    Growth Rate
                  </p>
                  <h4 className="text-2xl font-black text-[#6B8F7B] mt-0.5">
                    +240%
                  </h4>
                </div>

                <div className="absolute bottom-8 right-8 bg-[#17221B]/95 backdrop-blur-md text-white rounded-2xl p-4 shadow-xl border border-white/10 animate-float-delayed">
                  <p className="text-[10px] uppercase tracking-wider text-gray-300 font-bold">
                    Trusted By
                  </p>
                  <h4 className="font-bold text-sm mt-0.5">
                    Modern Businesses
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;