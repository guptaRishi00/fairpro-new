import Image from "next/image";
import React from "react";

type Props = {};

export default function Attend({}: Props) {
  return (
    // Main container: Added padding for mobile (px-6) and vertical (py-12)
    <div className="flex justify-center flex-col gap-10 items-center mt-20 bg-[#FFF8F1] px-10">
      {/* Title: Responsive font size (text-3xl mobile, lg:text-5xl desktop) */}
      <p className="text-[#890B31] text-3xl lg:text-5xl max-w-xl text-center font-bold">
        who can attend
      </p>

      {/* Image Container: 
        - Mobile: flex-col (stacks them)
        - Large: flex-row (user's original style)
      */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* Image 1 Wrapper (Keeping your w-full px-10) */}
        <div className="w-full">
          <Image
            alt="ll"
            src="/attend1.png"
            width={1000}
            height={1000}
            // CRITICAL FIX: Changed w-[500px] to w-full to make it responsive
            className="w-full lg:w-[500px] h-auto "
          />
        </div>

        {/* Image 2 Wrapper */}
        <div className="w-full">
          <Image
            alt="ll"
            src="/attend2.png"
            width={1000}
            height={1000}
            // CRITICAL FIX: Changed w-[500px] to w-full to make it responsive
            className="w-full lg:w-[500px] h-auto "
          />
        </div>

        {/* Image 3 Wrapper */}
        <div className="w-full">
          <Image
            alt="ll"
            src="/attend3.png"
            width={1000}
            height={1000}
            // CRITICAL FIX: Changed w-[500px] to w-full to make it responsive
            className="w-full lg:w-[500px] h-auto "
          />
        </div>

        {/* Image 4 Wrapper */}
        <div className="w-full">
          <Image
            alt="ll"
            src="/attend4.png"
            width={1000}
            height={1000}
            // CRITICAL FIX: Changed w-[500px] to w-full to make it responsive
            className="w-full lg:w-[500px] h-auto "
          />
        </div>
      </div>
    </div>
  );
}
