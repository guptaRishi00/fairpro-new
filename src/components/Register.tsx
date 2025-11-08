import Image from "next/image";
import { FiSend } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";

export default function Register() {
  return (
    <section className="w-full bg-[#FFF8F1] py-12 md:py-20 px-4 md:px-10 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
      <div className="relative w-full flex justify-center">
        <Image
          alt="main"
          src="/registernobg.png"
          width={200}
          height={200}
          className=" w-full lg:w-150 h-auto"
        />
      </div>{" "}
      <div className="bg-white rounded-2xl shadow-lg w-full  p-6 sm:p-8 md:p-10">
        <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#890B31] mb-6">
          Register Your Interest
        </h2>

        <form className="flex flex-col gap-10">
          <div className="relative">
            <p className="text-[#890B31] text-lg font-bold">Name</p>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-full py-3 px-5 pr-10 focus:outline-none focus:border-[#890B31] text-sm sm:text-base"
            />
            <FiSend className="absolute right-4 top-[55%] text-[#890B31] text-lg" />
          </div>

          {/* Email Field */}
          <div className="relative">
            <p className="text-[#890B31] text-lg font-bold">Email</p>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-full py-3 px-5 pr-10 focus:outline-none focus:border-[#890B31] text-sm sm:text-base"
            />
            <MdLocationOn className="absolute right-4 top-[55%] text-[#890B31] text-lg" />
          </div>

          {/* Phone Number Field */}
          <div>
            <p className="text-[#890B31] text-lg font-bold">Phone Number</p>
            <input
              type="tel"
              placeholder="Number"
              className="w-full border border-gray-300 rounded-full py-3 px-5 focus:outline-none focus:border-[#890B31] text-sm sm:text-base"
            />
          </div>

          {/* Privacy Policy */}
          <p className="text-gray-600 text-xs sm:text-sm text-center">
            I agree to the{" "}
            <span className="underline text-[#890B31] cursor-pointer">
              Privacy Policy
            </span>
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#890B31] text-white font-semibold rounded-full py-3 text-sm sm:text-base mt-2 hover:bg-[#720929] transition-all"
          >
            Submit Now
          </button>
        </form>
      </div>
    </section>
  );
}
