/* eslint-disable */

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function PopupForm() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const alreadyFilled = localStorage.getItem("popupFormFilled");
    if (!alreadyFilled) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const phoneRegex = /^(?:\+91)?[6-9]\d{9}$/;
    if (!phoneRegex.test(phone.trim())) {
      alert("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    const formData = new FormData();
    formData.append("entry.1651838131", name);
    formData.append("entry.378515603", phone);
    await fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSegldLvNqDlFJ7iI9ouIU_aJkFVaQ90PazWU1GE8rf5gu9WXw/formResponse",

      {
        method: "POST",
        mode: "no-cors",
        body: formData,
      }
    );

    localStorage.setItem("popupFormFilled", "true");
    setSubmitted(true);
    setTimeout(() => setShow(false), 1500);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 px-4 overflow-auto">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row md:min-h-[80vh]">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 h-56 md:h-auto relative">
          <Image
            src="/trading.jpg"
            alt="Trading"
            fill
            className="object-cover object-center"
            priority={true} // optionally for faster loading if critical
          />
        </div>
        {/* Right Form Section */}
        <div className="w-full md:w-1/2 p-6 md:p-10 bg-gray-900 text-white flex flex-col justify-center">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-green-400 mb-4">
                Fill the information to continue
              </h2>

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded px-5 py-3 bg-gray-800 text-white border border-gray-700 text-base md:text-lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded px-5 py-3 bg-gray-800 text-white border border-gray-700 text-base md:text-lg"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                required
              />
              <p className="text-sm text-gray-400 -mt-3 mb-4">
                Please don't include +91, just enter 10-digit number.
              </p>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-lime-500 hover:from-green-600 hover:to-lime-600 text-black font-semibold rounded py-3 text-base md:text-lg transition duration-300"
              >
                Submit
              </button>
            </form>
          ) : (
            <div className="text-center py-10">
              <p className="text-green-400 font-semibold text-2xl">
                Submitted successfully!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
