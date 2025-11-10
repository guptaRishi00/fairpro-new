"use client";

import Image from "next/image";
import { FiSend } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import React, { useRef, useState } from "react";

// Optional: declare gtag conversion function
declare global {
  interface Window {
    gtag_report_conversion: (url?: string) => void;
  }
}

export default function Register() {
  const form = useRef<HTMLFormElement>(null);

  const [status, setStatus] = useState<
    "idle" | "submitting" | "sent" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status !== "idle" || !form.current) return;

    setStatus("submitting");

    const formData = new FormData(form.current);

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.result === "success") {
        console.log("✅ Submitted successfully to Google Sheet");

        if (window.gtag_report_conversion) {
          window.gtag_report_conversion();
        }

        setStatus("sent");
        form.current.reset();
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        throw new Error(data.message || "Google Script returned an error");
      }
    } catch (error) {
      console.error("❌ Failed to submit:", error);
      setStatus("error");
      alert("Submission failed. Please try again.");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const getButtonText = () => {
    switch (status) {
      case "submitting":
        return "Sending...";
      case "sent":
        return "Sent!";
      case "error":
        return "Try Again";
      default:
        return "Submit Now";
    }
  };

  const getButtonClasses = () => {
    const base =
      "text-white font-semibold rounded-full py-3 text-sm sm:text-base mt-2 transition-all duration-300 flex items-center justify-center";
    switch (status) {
      case "submitting":
        return `${base} bg-[#a13b5a] cursor-not-allowed`;
      case "sent":
        return `${base} bg-green-600 cursor-not-allowed`;
      case "error":
        return `${base} bg-red-600 hover:bg-red-700`;
      default:
        return `${base} bg-[#890B31] hover:bg-[#720929]`;
    }
  };

  return (
    <section
      id="register-form"
      className="w-full bg-[#FFF8F1] py-12 md:py-20 px-4 md:px-10 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16"
    >
      <div className="relative w-full flex justify-center">
        <Image
          alt="main"
          src="/registernobg.png"
          width={200}
          height={200}
          className="w-full lg:w-150 h-auto"
        />
      </div>

      <div className="bg-white rounded-2xl shadow-lg w-full p-6 sm:p-8 md:p-10">
        <h2 className="text-2xl sm:text-3xl md:text-[48px] text-center font-bold text-[#890B31] mb-6">
          Register Your Interest
        </h2>

        <form
          ref={form}
          onSubmit={handleSubmit}
          className="flex flex-col gap-10"
        >
          <div className="relative">
            <p className="text-[#890B31] text-lg font-bold">Name</p>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-full py-3 px-5 pr-10 focus:outline-none focus:border-[#890B31]"
              required
              disabled={status !== "idle"}
            />
            <FiSend className="absolute right-4 top-[55%] text-[#890B31] text-lg" />
          </div>

          <div className="relative">
            <p className="text-[#890B31] text-lg font-bold">Email</p>
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-full py-3 px-5 pr-10 focus:outline-none focus:border-[#890B31]"
              required
              disabled={status !== "idle"}
            />
            <MdLocationOn className="absolute right-4 top-[55%] text-[#890B31] text-lg" />
          </div>

          <div>
            <p className="text-[#890B31] text-lg font-bold">Phone Number</p>
            <input
              type="tel"
              name="user_phone"
              placeholder="Your Phone Number"
              className="w-full border border-gray-300 rounded-full py-3 px-5 focus:outline-none focus:border-[#890B31]"
              required
              disabled={status !== "idle"}
            />
          </div>

          <p className="text-gray-600 text-xs sm:text-sm text-center">
            I agree to the{" "}
            <span className="underline text-[#890B31] cursor-pointer">
              Privacy Policy
            </span>
          </p>

          <button
            type="submit"
            className={getButtonClasses()}
            disabled={status !== "idle"}
          >
            {getButtonText()}
          </button>
        </form>
      </div>
    </section>
  );
}
