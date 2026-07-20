import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessageSent(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setMessageSent(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        
          <div className="lg:col-span-5 lg:pl-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#6B8F7B] bg-[#6B8F7B]/10 px-4 py-1.5 rounded-full">
              Contact Us
            </span>

            <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold text-[#17221B] tracking-tight leading-tight max-w-md">
              Let's Start a Project Together
            </h2>

            <p className="mt-4 text-gray-500 text-base leading-relaxed max-w-md">
              Ready to take your digital presence to the next level? Drop us a
              line, and our team will get back to you as soon as possible.
            </p>

            <div className="mt-8 space-y-5">

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#6B8F7B]/10 text-[#6B8F7B] flex items-center justify-center">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase">
                    Email Us
                  </p>
                  <p className="text-sm font-semibold text-[#17221B]">
                    123@gmail.com
                  </p>
                </div>
              </div>


              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#6B8F7B]/10 text-[#6B8F7B] flex items-center justify-center">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase">
                    Call Us
                  </p>
                  <p className="text-sm font-semibold text-[#17221B]">
                    +91 1234567890
                  </p>
                </div>
              </div>


              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#6B8F7B]/10 text-[#6B8F7B] flex items-center justify-center">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase">
                    Visit Us
                  </p>
                  <p className="text-sm font-semibold text-[#17221B]">
                    Ahmedabad, India
                  </p>
                </div>
              </div>

            </div>
          </div>


          
          <div className="lg:col-span-7 flex justify-end">
            <div className="w-full max-w-xl bg-[#F8FAF8] border border-gray-100 p-7 sm:p-9 rounded-[32px] shadow-sm">

              <form onSubmit={handleSubmit} className="space-y-5">

                <div className="grid sm:grid-cols-2 gap-5">

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-400 mb-2">
                      Your Name
                    </label>

                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Emily Carter"
                      className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-3.5 text-sm text-[#17221B] focus:border-[#6B8F7B] focus:outline-none"
                    />
                  </div>


                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-400 mb-2">
                      Your Email
                    </label>

                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="123@example.com"
                      className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-3.5 text-sm text-[#17221B] focus:border-[#6B8F7B] focus:outline-none"
                    />
                  </div>

                </div>


                <div>
                  <label className="block text-xs font-bold uppercase text-gray-400 mb-2">
                    Project Description
                  </label>

                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-sm text-[#17221B] focus:border-[#6B8F7B] focus:outline-none resize-none"
                  />
                </div>


                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#17221B] text-white py-3.5 rounded-2xl font-semibold hover:bg-[#6B8F7B] transition-colors duration-300 cursor-pointer shadow-md"
                >
                  Send Message
                  <Send size={16} />
                </button>


                {messageSent && (
                  <p className="text-center text-sm font-semibold text-[#6B8F7B] mt-4">
                    Thank you Your message has been sent successfully.
                  </p>
                )}

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}