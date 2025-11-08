import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

type Props = {};

export default function Herosection({}: Props) {
  return (
    <div className="lg:h-[900px] bg-[#7E052A] h-[1000px]  w-full bg-[url('/background.png')] relative bg-cover overflow-hidden">
      <div className="w-full flex items-center justify-center  lg:py-0">
        <Image src="/logo.png" alt="" width={400} height={400} className="" />
      </div>

      <div className="lg:flex lg:flex-row flex-col items-center justify-center lg:items-start lg:justify-between lg:-translate-y-40 lg:px-10 px-4 pb-16 lg:pb-0 gap-8">
        <div className="lg:flex lg:items-start lg:space-y-0 space-y-5 flex-col items-center -translate-y-40 gap-5 lg:flex-col w-full h-auto lg:translate-y-10.5">
          {/* - Added default padding 'py-2 px-5' for mobile.
           */}
          <p className="bg-[#FFFFFF2E] mx-auto lg:mx-0 text-white text-xs font-bold py-2 px-5 lg:text-3xl rounded-full lg:w-fit w-fit">
            Tamil Nadu’s Biggest Property Expo
          </p>

          {/* - Added 'text-center' for mobile.
            - Added default text sizes 'text-4xl' and 'md:text-6xl' for mobile/tablet.
          */}
          <h1 className="font-extrabold lg:text-start text-center text-4xl md:text-6xl lg:text-7xl text-white">
            Discover. Invest. <br />
            <span className="text-[#E2FF54]">Prosper.</span>
          </h1>

          {/* - Added 'text-center' for mobile.
            - Added default text sizes 'text-2xl' and 'md:text-3xl' for mobile/tablet.
          */}
          <p className="font-bold lg:text-start text-center text-2xl md:text-3xl lg:text-4xl text-white lg:max-w-3xl leading-snug">
            Join us at LE MERIDIEN DUBAI HOTEL & CONFERENCE CENTRE, Dubai 29–30
            November 2025.
          </p>

          {/* - Added 'text-center' for mobile.
            - Added default text size 'text-lg' for mobile.
          */}
          <p className="font-bold lg:text-start text-center text-lg lg:text-xl text-white lg:max-w-xl leading-snug">
            Explore 60+ builders, 300+ RERA Approved Projects and exclusive
            deals under one roof in Dubai.
          </p>

          {/* - Added 'justify-center' to center the buttons on mobile.
           */}
          <div className="flex items-center justify-center lg:justify-start">
            {/* - Added default padding 'px-5 py-3' and 'text-base' for mobile.
             */}
            <Link
              href="/"
              className="bg-[#FFE0BA] text-[#890B31] font-semibold px-5 py-3 rounded-full text-base"
            >
              Register Now
            </Link>
            <Link
              href="/"
              className="bg-[#FFE0BA] p-3 rounded-full lg:-translate-x-3"
            >
              <MdArrowOutward color="#890B31" size={20} />
            </Link>
          </div>
        </div>
        <div className="relative bottom-0 z-10  -translate-y-18 lg:translate-y-6.5 w-full max-w-sm md:max-w-md lg:max-w-none">
          <Image
            alt="ll"
            src="/person1.png"
            width={1000}
            height={1000}
            className="w-70 lg:w-[600px] lg:h-full"
          />
        </div>
      </div>
    </div>
  );
}
