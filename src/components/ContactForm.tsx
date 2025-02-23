import React from 'react';

export default function ContactForm() {
  return (
    <section className="relative bg-gradient-to-br from-[#217e88] to-[#185f67] py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <div className="space-y-12">
            <div>
              <h2 className="text-6xl font-bold text-white mb-4">GET IN TOUCH</h2>
              <p className="text-white/80">Trusted by CatholicTV, NLC Mutual, SDPAA +++</p>
            </div>

            {/* Testimonial */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <div className="flex items-start gap-6">
                <img 
                  src="https://ik.imagekit.io/buildable/Kevin%20Dodds%20Wildwood.jpeg?updatedAt=1735537695872" 
                  alt="Kevin Dodds"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="space-y-4">
                  <blockquote className="text-white/80 italic text-lg">
                    "The new system transformed our logistics and quoting processes. Buildable enabled us to eliminate our manual bottlenecks, deliver quotes faster, and focus on strategic growth."
                  </blockquote>
                  <div className="text-white">
                    <p className="font-medium">Kevin Dodds</p>
                    <p className="text-sm text-white/60">President / Wildwood Trading Group</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <form className="bg-white rounded-xl p-8 shadow-xl space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="First Name*"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2AC9A5] focus:ring-2 focus:ring-[#2AC9A5]/20 outline-none transition-all"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name*"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2AC9A5] focus:ring-2 focus:ring-[#2AC9A5]/20 outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <input
                type="email"
                placeholder="Business E-mail Address*"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2AC9A5] focus:ring-2 focus:ring-[#2AC9A5]/20 outline-none transition-all"
              />
            </div>

            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2AC9A5] focus:ring-2 focus:ring-[#2AC9A5]/20 outline-none transition-all"
              />
            </div>

            <div>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2AC9A5] focus:ring-2 focus:ring-[#2AC9A5]/20 outline-none transition-all text-gray-500">
                <option value="">Type of inquiry*</option>
                <option value="general">General</option>
                <option value="project">Project</option>
                <option value="support">Support</option>
              </select>
            </div>

            <div>
              <textarea
                placeholder="Message*"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#2AC9A5] focus:ring-2 focus:ring-[#2AC9A5]/20 outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-[#F8B42E] text-[#0A0B14] rounded-lg font-semibold text-lg hover:bg-[#e6a329] transition-colors"
            >
              Get in touch
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}