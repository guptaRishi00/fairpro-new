import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

export default function Trust() {
  return (
    <div className="bg-[#890B31] w-full h-auto lg:h-[639px] p-6 lg:px-10 lg:mt-10 flex flex-col lg:flex-row lg:gap-20 items-center justify-between">
      <div className="relative z-5 -translate-y-3">
        <Image
          alt="ll"
          src="/trust.png"
          width={200}
          height={200}
          className="w-[510px] h-auto "
        />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col items-start">
        <p className="bg-white text-[#890B31]  text-xs sm:text-sm font-semibold px-4 py-1 rounded-full mb-5 tracking-wide">
          TRUSTWORTHINESS
        </p>

        <h2 className="text-3xl sm:text-4xl text-white md:text-5xl font-extrabold leading-snug mb-4">
          We Value Your Trust <br className="hidden sm:block" /> And Investment
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mb-8">
          Our mission is to connect NRIs and investors with verified Tamil Nadu
          developers for safe and transparent property investments.
        </p>

        <div className="w-full flex items-center">
          <button className="bg-[#FBF9F1] text-[#890B31] font-bold px-6 py-3 rounded-full shadow hover:bg-amber-300 transition text-sm md:text-base">
            Explore Builders
          </button>
          <span className="bg-[#FBF9F1] p-4 -ml-2 rounded-full border border-[#890B31]">
            <MdArrowOutward color="#890B31" />
          </span>
        </div>
      </div>
    </div>
  );
}
