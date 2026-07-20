import { ArrowUpRight } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform Rebrand",
      category: "Retail & Commerce",
      bgColor: "from-[#BCCFC4]/20 to-[#6B8F7B]/10",
      accentColor: "#6B8F7B"
    },
    {
      title: "Fintech Mobile Application",
      category: "Financial Technology",
      bgColor: "from-[#17221B]/5 to-[#17221B]/20",
      accentColor: "#17221B"
    },
    {
      title: "AI-Powered SaaS Dashboard",
      category: "B2B Software",
      bgColor: "from-[#6B8F7B]/20 to-[#17221B]/15",
      accentColor: "#4F6658"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-[#F8FAF8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6B8F7B] bg-[#6B8F7B]/10 px-4 py-1.5 rounded-full">
            Our Portfolio
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold text-[#17221B] tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-4 text-gray-500 text-base max-w-2xl mx-auto">
            A curated selection of our digital campaigns, branding initiatives, and custom platforms.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-xs 
              hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group"
            >
              <div className={`h-60 bg-gradient-to-br ${project.bgColor} flex items-center justify-center 
              p-8 transition-transform duration-500 group-hover:scale-[1.02]`}>
                <div className="text-center">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400
                   bg-white px-3 py-1 rounded-full shadow-xs">
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
                <div className="w-10 h-10 rounded-full bg-[#17221B] text-white flex items-center
                 justify-center group-hover:bg-[#6B8F7B] transition-colors duration-300">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
