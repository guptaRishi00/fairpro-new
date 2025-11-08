import Image from "next/image";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

type Props = {};

export default function Discover({}: Props) {
  return (
    <div className="flex justify-center flex-col gap-10 items-center mt-20 bg-[#FFF8F1] px-4 lg:px-10">
      <p className="text-[#890B31] text-3xl lg:text-5xl max-w-xl text-center font-bold">
        Can Help You Discover Your Dream Property
      </p>

      <div className="w-full lg:w-fit bg-[#FFE0BA] rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-start p-6 lg:p-0 lg:pt-20">
        <Image
          alt="ll"
          src="/taj2.png"
          width={1000}
          height={1000}
          // Added w-full for mobile, kept w-150 for desktop
          className="w-full h-auto col-span-1 lg:w-150"
        />

        {/* Adjusted text size, padding, and translation for mobile */}
        <div className="col-span-1 w-full h-full space-y-3 pt-6 lg:pt-0 lg:-translate-y-8">
          <div className="bg-[#890B31] p-1 rounded-full w-fit">
            <Image
              alt="ll"
              src="/dollar.svg"
              width={1000}
              height={1000}
              className="w-5 h-auto col-span-1"
            />
          </div>

          <p className="font-bold text-2xl lg:text-3xl max-w-sm">
            Invest from anywhere in the world — NRI-friendly process.
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col gap-10 lg:justify-center w-full lg:px-30">
        <div className="bg-[#FFE0BA] w-full h-auto rounded-xl overflow-hidden">
          {/* Adjusted padding and text sizes for mobile */}
          <div className="p-6 lg:p-10 space-y-8">
            <div className="bg-[#890B31] p-4 rounded-full w-fit">
              <Image
                alt="ll"
                src="/graph.svg"
                width={1000}
                height={1000}
                className="w-8 h-auto col-span-1"
              />
            </div>

            <p className="text-2xl lg:text-4xl font-bold">
              Choose from Apartments, Villas, Plots, and Commercial Spaces.
            </p>

            <p className="text-base lg:text-xl font-medium">
              We bring you{" "}
              <span className="font-bold">300+ RERA Approved Projects</span>{" "}
              from Chennai, Coimbatore, Madurai, Trichy, Erode, Hosur, and
              beyond — all under one roof at the Fairpro Expo 2025.
            </p>
          </div>

          <Image
            alt="ll"
            src="/rod1.png"
            width={500}
            height={500}
            className="w-full h-auto "
          />
        </div>
        <div className="bg-[#001027] w-full h-auto rounded-xl overflow-hidden flex flex-col items-start justify-between">
          {/* Adjusted padding and text sizes for mobile */}
          <div className="p-6 lg:p-10 space-y-8">
            <div className="bg-[#890B31] p-4 rounded-full w-fit">
              <Image
                alt="ll"
                src="/cog.svg"
                width={1000}
                height={1000}
                className="w-8 h-auto col-span-1"
              />
            </div>

            <p className="text-2xl lg:text-4xl font-bold text-white">
              Personalized Insights And Investment Guidance.
            </p>

            <p className="text-base lg:text-xl font-medium text-white">
              Get one-on-one assistance from financial and legal experts.
              Understand property loans, taxation, and ownership processes for
              NRIs and investors.
            </p>
          </div>

          <Image
            alt="ll"
            src="/temple.png"
            width={500}
            height={500}
            className="w-full h-auto "
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col gap-10 lg:justify-between w-full lg:px-30">
        <div className="bg-[#890B31] w-full h-auto rounded-xl overflow-hidden p-8 space-y-5">
          <p className="font-bold text-2xl lg:text-4xl text-white">
            100% Verified Builders.
          </p>

          <p className="text-white  ">
            All showcased projects are backed by CREDAI Tamil Nadu, representing
            13,300+ trusted developers.
          </p>
        </div>
        <div className="bg-[#F0DAC0] w-full h-auto rounded-xl overflow-hidden p-8 space-y-5">
          <div className="bg-[#890B31] p-3 rounded-full w-fit">
            <Image
              alt="ll"
              src="/graph.svg"
              width={1000}
              height={1000}
              className="w-5 h-auto col-span-1"
            />
          </div>

          <p className="  text-4xl font-bold text-black ">
            Invest Across 30+ Locations in Tamil Nadu
          </p>
        </div>

        <div className="bg-white w-full h-auto rounded-xl overflow-hidden p-8 flex items-center">
          <Image
            alt="ll"
            src="/credai.png"
            width={1000}
            height={1000}
            className="w-full object-center object-cover "
          />
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <button className="bg-[#FBF9F1] border border-[#890B31] text-[#890B31] font-bold px-6 py-3 rounded-full shadow hover:bg-amber-300 transition text-sm md:text-base">
          View our main website
        </button>
        <span className="bg-[#890B31] p-4 -ml-2 rounded-full border border-[#890B31]">
          <MdArrowOutward color="white" />
        </span>
      </div>
    </div>
  );
}
