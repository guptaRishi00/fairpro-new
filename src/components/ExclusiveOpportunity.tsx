import React from "react";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

const ExclusiveOpportunity: React.FC = () => {
  return (
    <div className="bg-[#FFF8F1] py-10 px-4 sm:px-6 lg:px-8 overflow-visible lg:mt-20">
      <div className="max-w-6xl h-[500px] mx-auto relative overflow-visible">
        <div className="bg-linear-to-r from-[#8b1538] to-[#6b1530] rounded-3xl shadow-2xl overflow-visible relative">
          <div className="grid lg:grid-cols-2 gap-0 items-center overflow-visible">
            {/* Left - Content */}
            <div className="p-8 md:p-12 text-white z-10 relative">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 ">
                Don't Miss This Exclusive Opportunity
              </h2>

              <p className="text-sm md:text-base mb-8 leading-relaxed">
                Join CREDAI Tamil Nadu at the Dubai Expo and take the next step
                towards owning your dream property in Tamil Nadu. Use your NRI
                privileges to invest in real estate risk-free at{" "}
                <span className="font-semibold">
                  LE MERIDIEN DUBAI HOTEL & CONFERENCE CENTRE
                </span>
                .
              </p>

              <div className="w-full flex justify-start items-center">
                <Link
                  href={"https://www.credaitamilnadu.org/"}
                  className="bg-[#FBF9F1] border border-[#890B31] text-[#890B31] font-bold px-6 py-3 rounded-full shadow hover:bg-amber-300 transition text-sm md:text-base"
                >
                  View our main website
                </Link>
                <Link
                  href={"https://www.credaitamilnadu.org/"}
                  className="bg-[#FBF9F1] p-4 -ml-2 rounded-full border border-[#890B31]"
                >
                  <MdArrowOutward color="#890B31" />
                </Link>
              </div>
            </div>

            {/* Right - Man Image (completely free from height/relative constraints) */}
            <div className="overflow-visible z-20">
              <Image
                src="/man4.svg"
                alt="Business Professional"
                width={1000}
                height={1000}
                className="object-contain pointer-events-none hidden lg:inline-block absolute bottom-0 right-[-140px] w-[800px] lg:w-[900px]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveOpportunity;
