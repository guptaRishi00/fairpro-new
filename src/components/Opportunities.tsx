import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export default function Opportunities() {
  return (
    <div className="bg-[#FFF8F1] flex flex-col lg:flex-row lg:justify-between mt-20">
      <div className="flex flex-col items-start gap-6 p-6 py-8 lg:gap-10 lg:py-12 lg:px-10 lg:w-1/2">
        <p className="text-[#890B31] text-3xl lg:text-5xl lg:max-w-2xl font-bold">
          All the opportunities under one roof
        </p>

        <div className="flex flex-col items-start gap-5">
          {/* Bullet 1 */}
          <div className="flex items-start gap-2">
            <div className="h-2 w-2 bg-black rounded-full translate-y-2.5 shrink-0"></div>

            <p className="text-lg lg:text-xl font-medium max-w-md">
              Explore <span className="text-[#890B31] font-bold">300+</span>{" "}
              RERA Approved Projects from Chennai, Trichy, Madurai, Coimbatore,
              Erode, and more.
            </p>
          </div>

          {/* Bullet 2 */}
          <div className="flex items-start gap-2">
            <div className="h-2 w-2 bg-black rounded-full translate-y-2.5 shrink-0"></div>

            <p className="text-lg lg:text-xl font-medium max-w-md">
              Meet <span className="text-[#890B31] font-bold">60+</span> trusted
              builders & get instant loan assistance.
            </p>
          </div>

          <div className="flex items-start gap-2">
            <div className="h-2 w-2 bg-black rounded-full translate-y-2.5 shrink-0"></div>

            <p className="text-lg lg:text-xl font-medium max-w-md">
              Homes, Villas, and Plots from{" "}
              <span className="text-[#890B31] font-bold">₹10 L to ₹10 Cr</span>{" "}
              Explore Your Perfect Investment”
            </p>
          </div>
        </div>

        <div className="w-full flex items-center">
          <Link
            href={"https://www.credaitamilnadu.org/"}
            className=" border border-[#890B31] text-[#890B31] font-bold px-6 py-3 rounded-full shadow hover:bg-amber-300 transition text-sm md:text-base"
          >
            Get Your Free VIP Pass
          </Link>
          <span className="bg-[#890B31] p-4 -ml-2 rounded-full">
            <MdArrowOutward color="white" />
          </span>
        </div>
      </div>

      <div className="bottom-0 lg:translate-y-13">
        <Image
          alt="ll"
          src="/dubai2.png"
          width={1000}
          height={1000}
          className="w-full h-auto "
        />
      </div>
    </div>
  );
}
