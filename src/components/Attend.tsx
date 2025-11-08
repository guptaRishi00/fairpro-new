import Image from "next/image";
import React from "react";

type Props = {};

export default function Attend({}: Props) {
  return (
    <div className="flex justify-center flex-col gap-10 items-center mt-20 bg-[#FFF8F1] px-10">
      <p className="text-[#890B31] text-3xl lg:text-7xl max-w-xl text-center font-bold">
        who can attend
      </p>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="bg-[#F0DAC0] w-full  rounded-xl overflow-hidden p-8 space-y-5 h-[350px]">
          <div className="bg-[#890B31] p-3 rounded-full w-fit">
            <Image
              alt="ll"
              src="/graph.svg"
              width={1000}
              height={1000}
              className="w-5 h-auto col-span-1"
            />
          </div>

          <p className="text-4xl font-bold text-black max-w-lg">
            NRIs & Global Investors
          </p>

          <p className="text-2xl max-w-xs">
            Looking for real estate opportunities in Tamil Nadu.
          </p>
        </div>
        <div className="bg-[#890B31] w-full  rounded-xl overflow-hidden p-8 space-y-5 h-[350px]">
          <div className="bg-white p-3 rounded-full w-fit">
            <Image
              alt="ll"
              src="/cog2.svg"
              width={1000}
              height={1000}
              className="w-5 h-auto col-span-1"
            />
          </div>

          <p className="text-4xl font-bold text-white max-w-lg">
            First-time Home Buyers
          </p>

          <p className="text-2xl max-w-xs text-white">
            Seeking budget-friendly and premium housing options.
          </p>
        </div>

        <div className="bg-[#F0DAC0] w-full  rounded-xl overflow-hidden p-8 space-y-5 h-[350px]">
          <div className="bg-[#890B31] p-3 rounded-full w-fit">
            <Image
              alt="ll"
              src="/graph.svg"
              width={1000}
              height={1000}
              className="w-5 h-auto col-span-1"
            />
          </div>

          <p className="text-4xl font-bold text-black max-w-lg">
            Real Estate Professionals
          </p>

          <p className="text-2xl max-w-xs">
            Eager to explore the latest market trends.
          </p>
        </div>

        <div className="bg-[#890B31] w-full  rounded-xl overflow-hidden p-8 space-y-5 h-[350px]">
          <div className="bg-white p-3 rounded-full w-fit">
            <Image
              alt="ll"
              src="/cog2.svg"
              width={1000}
              height={1000}
              className="w-5 h-auto col-span-1"
            />
          </div>

          <p className="text-4xl font-bold text-white max-w-lg">
            Business Owners & Entrepreneurs
          </p>

          <p className="text-2xl max-w-xs text-white">
            Interested in commercial property investments.
          </p>
        </div>
      </div>
    </div>
  );
}
