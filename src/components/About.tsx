import React from "react";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

const AboutCredai: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFF8F1] py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-[90%] mx-auto">
        <div className="bg-[#8b1538] rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left side - Image */}
            <div className="relative h-64 md:h-auto">
              <Image
                src="/temple-sunset.png"
                alt="Tamil Nadu Temple at Sunset"
                fill
                className="object-cover"
              />
            </div>

            {/* Right side - Content */}
            <div className="p-8 md:p-10 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About CREDAI Tamil Nadu
              </h2>

              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  The Confederation of Real Estate Developers’ Associations of
                  India (CREDAI) is the premier body of private real estate
                  developers in India, established in 1999 with a vision to
                  transform the Indian real estate landscape and promote housing
                  and habitat development. Representing 13,000+ developers
                  across 230 city chapters in 21 states, CREDAI plays a crucial
                  role in policy formulation by voicing industry concerns and
                  advocating for progressive real estate policies with the
                  Government of India. CREDAI Tamil Nadu is a key chapter of
                  CREDAI, representing 450+ developers across 10 major city
                  chapters, including Chennai, Coimbatore, Madurai, Trichy,
                  Erode, Tirunelveli, Salem, Hosur, Dharmapuri, and Puducherry.
                  As a recognised partner of the Ministry of Housing & Urban
                  Affairs, CREDAI Tamil Nadu champions ethical business
                  practices, sustainable construction, and affordable housing
                  initiatives. It actively engages in policy advocacy, skill
                  development for construction workers, and social welfare
                  programs such as tree plantations, flood relief, water
                  conservation, and healthcare initiatives. CREDAI Tamil Nadu
                  continues to work towards an organised, transparent, and
                  progressive real estate sector that benefits developers,
                  investors, and homebuyers alike.
                </p>
              </div>

              <div className="w-full flex items-center mt-5">
                <button className="bg-[#FBF9F1] text-[#890B31] font-bold px-6 py-3 rounded-full shadow hover:bg-amber-300 transition text-sm md:text-base">
                  Vist our website
                </button>
                <span className="bg-[#FBF9F1] p-4 -ml-2 rounded-full border border-[#890B31]">
                  <MdArrowOutward color="#890B31" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCredai;
