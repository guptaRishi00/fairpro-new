import Image from "next/image";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

type Props = {};

export default function Discover({}: Props) {
  return (
    <div className="flex justify-center flex-col gap-10 items-center mt-20 bg-[#FFF8F1]">
      <p className="text-[#890B31] text-5xl max-w-xl text-center font-bold">
        Can Help You Discover Your Dream Property
      </p>

      <div className="w-full px-10">
        <Image
          alt="ll"
          src="/discover1.png"
          width={1000}
          height={1000}
          className="w-full h-auto "
        />
      </div>

      <div className="flex lg:flex-row flex-col gap-10 lg:justify-between w-full px-10">
        <div className="">
          <Image
            alt="ll"
            src="/decover2.png"
            width={1000}
            height={1000}
            className="w-[700px] h-auto "
          />
        </div>
        <div className="">
          <Image
            alt="ll"
            src="/discover3.png"
            width={1000}
            height={1000}
            className="w-[700px] h-auto "
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col gap-10 lg:justify-between w-full px-10">
        <Image
          alt="ll"
          src="/discover4.png"
          width={1000}
          height={1000}
          className="w-[700px] h-auto "
        />
        <Image
          alt="ll"
          src="/discover8.png"
          width={1000}
          height={1000}
          className="w-[700px] h-auto "
        />
        <Image
          alt="ll"
          src="/discover6.png"
          width={1000}
          height={1000}
          className="w-[700px] h-auto "
        />
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
