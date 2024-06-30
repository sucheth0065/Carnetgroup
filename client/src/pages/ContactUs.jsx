import React from "react";
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
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30443.068329097256!2d78.38414625233057!3d17.489195388562898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91ec0162f43d%3A0x3288c6fe4358cf48!2sKukatpally%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1719718781607!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
