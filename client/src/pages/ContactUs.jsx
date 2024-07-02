import React from "react";
import contact from "../assets/contact.jpg";

export default function CountactUs() {
  return (
    <div>
      <div className="h-auto flex flex-row mt-24">
        <div className="w-1/2 bg-gradient-to-br from-orange-400 to-red-400 text-black p-8 shadow-lg">
          <div className="space-y-4 text-center">
            <h2 className="text-2xl font-extrabold pt-3 text-black">
              Simply complete this form, and we'll get in touch with you
              shortly.
            </h2>
            <p className="opacity-80 text-lg text-slant-500">
              We'll reach out to you once you submit the details
            </p>
          </div>
          <form className="mt-8 space-y-6 mb-5">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-slant-500"
                >
                  Name *
                </label>
                <input
                  id="name"
                  placeholder="Enter your name"
                  className="border p-3 rounded-lg w-full bg-[#FFE4C4] border-gray-300 focus:ring-2 focus:ring-orange-300 outline-none text-darkBrown placeholder-darkBrown"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-slant-500"
                >
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="border p-3 rounded-lg w-full bg-[#FFE4C4] border-gray-300 focus:ring-2 focus:ring-orange-300 outline-none text-darkBrown placeholder-darkBrown"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="block text-lg font-medium text-slant-500"
              >
                Phone *
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                className="border p-3 rounded-lg w-full bg-[#FFE4C4] border-gray-300 focus:ring-2 focus:ring-orange-300 outline-none text-darkBrown placeholder-darkBrown"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white rounded-lg h-12 font-bold hover:bg-orange-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
