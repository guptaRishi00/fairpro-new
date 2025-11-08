import Image from "next/image";

export default function Value() {
  return (
    // Mobile: py-20. Desktop: py-50
    <div className="py-20 lg:py-50">
      {/*
        Mobile: flex-col, items-center, h-auto, relative
        Desktop: flex-row, items-end, h-[550px]
      */}
      <div className="bg-[#890B31] w-full flex flex-col lg:flex-row items-center lg:items-end h-auto lg:h-[550px] relative">
        <div className="w-full hidden lg:inline-block">
          <Image
            src="/building.png"
            alt="Tamil Nadu Temple at Sunset"
            width={200}
            height={200}
            // Mobile: w-full. Desktop: w-130
            className="object-cover w-full lg:w-130"
          />
        </div>
        {/*
          Mobile: relative, padding-x-4, no y-translate, text-center
          Desktop: absolute, no padding, y-translate-20
        */}
        <div className="relative lg:absolute w-full flex flex-col items-center justify-center h-full gap-5 px-4 lg:px-0 translate-y-0 ">
          <p
            // Mobile: text-3xl. Desktop: text-6xl.
            // Your `max-w-xl` and `text-center` are untouched and apply to all sizes.
            className="font-bold text-3xl lg:text-6xl max-w-xl text-center text-white"
          >
            We value your trust and investment
          </p>

          <p
            // Mobile: text-lg. Desktop: text-2xl.
            // Your `max-w-xl` and `text-center` are untouched.
            className="font-bold text-lg lg:text-2xl max-w-xl text-center text-white"
          >
            Join us at LE MERIDIEN DUBAI HOTEL & CONFERENCE CENTRE, Dubai{" "}
          </p>

          <p className="text-4xl lg:text-5xl text-center text-white font-bold">
            29–30 November 2025.
          </p>

          <p
            // Mobile: text-lg. Desktop: text-2xl.
            // Your `max-w-xl` and `text-center` are untouched.
            className="font-bold text-lg lg:text-2xl max-w-xl text-center text-white"
          >
            Secure your free VIP pass and explore Tamil Nadu’s biggest real
            estate showcase.
          </p>
        </div>
        <div className="relative z-10">
          <Image
            src="/valueman2.png"
            alt="Tamil Nadu Temple at Sunset"
            width={200}
            height={200}
            // Mobile: w-full. Desktop: w-150
            className="object-cover w-full lg:w-150 "
          />
        </div>
      </div>
    </div>
  );
}
