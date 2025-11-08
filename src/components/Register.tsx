"use client"; // Required for using hooks and event handlers

import Image from "next/image";
import { FiSend } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import React, { useRef, useState } from "react"; // Import useState
import emailjs from "@emailjs/browser";

export default function Register() {
  const form = useRef<HTMLFormElement>(null);
  // Button state machine: 'idle', 'submitting', 'sent', 'error'
  const [status, setStatus] = useState<
    "idle" | "submitting" | "sent" | "error"
  >("idle");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status !== "idle") return; // Prevent multiple submissions

    setStatus("submitting");

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
        .then(
          (result) => {
            console.log("Email sent successfully:", result.text);
            setStatus("sent");
            form.current?.reset();
            // Reset button to idle after 3 seconds
            setTimeout(() => setStatus("idle"), 3000);
          },
          (error) => {
            console.error("Failed to send email:", error.text);
            setStatus("error");
            alert("Failed to send message. Please try again.");
            // Reset button to idle after 3 seconds
            setTimeout(() => setStatus("idle"), 3000);
          }
        );
    }
  };

  // Determine button text based on state
  const getButtonText = () => {
    switch (status) {
      case "submitting":
        return "Sending...";
      case "sent":
        return "Sent!";
      case "error":
        return "Submit Now"; // Or "Try Again?"
      case "idle":
      default:
        return "Submit Now";
    }
  };

  // Determine button classes based on state
  const getButtonClasses = () => {
    let baseClasses =
      "text-white font-semibold rounded-full py-3 text-sm sm:text-base mt-2 transition-all duration-300 flex items-center justify-center";

    switch (status) {
      case "submitting":
        return `${baseClasses} bg-[#a13b5a] cursor-not-allowed`; // Darker, disabled look
      case "sent":
        return `${baseClasses} bg-green-600 cursor-not-allowed`; // Success green
      case "error":
        return `${baseClasses} bg-red-600 hover:bg-red-700`; // Error red
      case "idle":
      default:
        return `${baseClasses} bg-[#890B31] hover:bg-[#720929]`;
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
          className=" w-full lg:w-150 h-auto"
        />
      </div>{" "}
      <div className="bg-white rounded-2xl shadow-lg w-full  p-6 sm:p-8 md:p-10">
        <h2 className="text-2xl sm:text-3xl md:text-[48px] text-center font-bold text-[#890B31] mb-6">
          Register Your Interest
        </h2>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-10">
          <div className="relative">
            <p className="text-[#890B31] text-lg font-bold">Name</p>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-full py-3 px-5 pr-10 focus:outline-none focus:border-[#890B31] text-sm sm:text-base"
              required
              disabled={status === "submitting" || status === "sent"} // Disable inputs
            />
            <FiSend className="absolute right-4 top-[55%] text-[#890B31] text-lg" />
          </div>

          <div className="relative">
            <p className="text-[#890B31] text-lg font-bold">Email</p>
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-full py-3 px-5 pr-10 focus:outline-none focus:border-[#890B31] text-sm sm:text-base"
              required
              disabled={status === "submitting" || status === "sent"}
            />
            <MdLocationOn className="absolute right-4 top-[55%] text-[#890B31] text-lg" />
          </div>

          <div>
            <p className="text-[#890B31] text-lg font-bold">Phone Number</p>
            <input
              type="tel"
              name="user_phone"
              placeholder="Number"
              className="w-full border border-gray-300 rounded-full py-3 px-5 focus:outline-none focus:border-[#890B31] text-sm sm:text-base"
              required
              disabled={status === "submitting" || status === "sent"}
            />
          </div>

          <p className="text-gray-600 text-xs sm:text-sm text-center">
            I agree to the{" "}
            <span className="underline text-[#890B31] cursor-pointer">
              Privacy Policy
            </span>
          </p>

          {/* --- UPDATED BUTTON --- */}
          <button
            type="submit"
            className={getButtonClasses()}
            disabled={status === "submitting" || status === "sent"}
          >
            {getButtonText()}
          </button>
        </form>
      </div>
    </section>
  );
}
