import React from "react";
import { useParams, Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ServiceDetail() {
  const { id } = useParams();
  const service = servicesData[id];

  if (!service) {
    return (
      <div className="min-h-screen pt-32 px-6 text-center bg-[#FAFCFB]">
        <h2 className="text-2xl font-bold text-red-500">Service Not Found</h2>
        <p className="mt-2 text-gray-600">
          The service you are looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#6B8F7B] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#FAFCFB]">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        
      
        <Link
          to="/#services"
          onClick={() => {
            setTimeout(() => {
              const el = document.getElementById("services");
              if (el) el.scrollIntoView({ behavior: "instant" });
            }, 50);
          }}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6B8F7B] hover:text-[#17221B] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Services
        </Link>

      
        <div className="max-w-3xl">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#6B8F7B] bg-[#6B8F7B]/10 px-4 py-1.5 rounded-full">
            Service Detail
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold text-[#17221B] tracking-tight">
            {service.title}
          </h1>
          <p className="mt-4 text-lg text-gray-600 font-medium leading-relaxed">
            {service.subtitle}
          </p>
        </div>

    
        <div className="mt-10 p-8 bg-white rounded-3xl border border-gray-100 shadow-xs">
          <h2 className="text-xl font-bold text-[#17221B] mb-3">Overview</h2>
          <p className="text-gray-600 leading-relaxed text-base">
            {service.description}
          </p>
        </div>

    
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#17221B] mb-6">
            Key Features & Deliverables
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-5 bg-white border border-gray-100 rounded-2xl shadow-xs"
              >
                <CheckCircle2 className="w-5 h-5 text-[#6B8F7B] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[#17221B]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

    
        <div className="mt-12 p-8 bg-[#6B8F7B]/5 rounded-3xl border border-[#6B8F7B]/20">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#6B8F7B] mb-4">
            Technologies & Frameworks We Use
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {service.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white text-[#17221B] border border-gray-200 rounded-full text-xs font-bold shadow-2xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

    
        {service.relatedProjects && service.relatedProjects.length > 0 && (
          <div className="mt-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-2 border-b border-gray-100 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#6B8F7B]">
                  Featured Case Studies
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17221B] mt-1">
                  Recent {service.title} Work
                </h2>
              </div>
              <p className="text-xs font-medium text-gray-500">
                Real results delivered for our clients
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {service.relatedProjects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white border border-gray-200/80 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-60 overflow-hidden bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {project.result && (
                      <span className="absolute top-4 left-4 bg-[#17221B]/90 backdrop-blur-md text-white text-[11px] font-bold px-3.5 py-1.5 rounded-full shadow-md border border-white/10 tracking-wide">
                        {project.result}
                      </span>
                    )}
                  </div>

                  <div className="p-6 bg-white">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#6B8F7B] bg-[#6B8F7B]/10 px-2.5 py-1 rounded-md">
                      Case Study
                    </span>
                    <h3 className="text-lg font-bold text-[#17221B] mt-2 group-hover:text-[#6B8F7B] transition-colors leading-snug">
                      {project.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        
        <div className="mt-16 bg-gradient-to-br from-[#6B8F7B]/10 via-[#FAFCFB] to-[#6B8F7B]/20 border border-[#6B8F7B]/20 p-8 sm:p-12 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="max-w-xl text-center md:text-left">
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#6B8F7B] bg-white border border-[#6B8F7B]/20 px-3.5 py-1 rounded-full mb-3 shadow-2xs">
              Get Started
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#17221B]">
              Ready to transform your project?
            </h3>
            <p className="mt-2 text-gray-600 text-sm font-medium leading-relaxed">
              Let's build something exceptional together. Schedule a discussion call today.
            </p>
          </div>

          <a
            href="/#contact"
            className="shrink-0 bg-[#6B8F7B] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#17221B] hover:shadow-lg transition-all duration-300 shadow-md"
          >
            Get a Quote
          </a>
        </div>

      </div>
    </div>
  );
}