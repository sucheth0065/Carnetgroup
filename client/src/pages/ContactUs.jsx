import React from "react";
import Mapbox from "../components/Mapbox.jsx";
import contact from "../assets/contact.jpg";

export default function CountactUs() {
  return (
    <div>
      <section className="w-full max-w-2xl mx-auto py-12 md:py-24">
        <div className="px-6 md:px-0 bg-lightPeach text-darkBrown py-2 mt-2">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="opacity-65">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
          </div>
          <form className="mt-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name">Name *</label>
                <input
                  id="name"
                  placeholder="Enter your name"
                  className="border p-3 rounded-lg w-80 bg-[#ffcc99] border-gray-300"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email">Email *</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="border p-3 rounded-lg w-80  bg-[#ffcc99] border-gray-300"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="phone">Phone *</label>
              <input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                className="border p-3 rounded-lg w-full  bg-[#ffcc99] border-gray-300"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-Coral text-white rounded-lg h-10 "
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      <section className="mb-7 ml-16">
        <Mapbox />
      </section>
    </div>
  );
}
