import React from "react";
import contact from "../assets/contact.jpg";

export default function CountactUs() {
  return (
    <div>
      <div className="mt-28">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30443.068329097256!2d78.38414625233057!3d17.489195388562898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91ec0162f43d%3A0x3288c6fe4358cf48!2sKukatpally%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1719718781607!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
      </div>
      <div className="h-auto flex flex-row">
        <div className="w-1/2 bg-gradient-to-br from-orange-300 to-red-400 text-black p-8 shadow-lg">
          <div className="space-y-4 text-center">
            <h2 className="text-2xl font-extrabold pt-3 text-black">Just fill this out, and we'll contact you</h2>
            <p className="opacity-80 text-lg text-slant-500">
              TELANGANA | ANDHRA PRADESH 
            </p>
          </div>
          <form className="mt-8 space-y-6 mb-5">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-lg font-medium text-slant-500">Name *</label>
                <input id="name" placeholder="Enter your name"
                  className="border p-3 rounded-lg w-full bg-[#FFE4C4] border-gray-300 focus:ring-2 focus:ring-orange-300 outline-none text-darkBrown placeholder-darkBrown"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-lg font-medium text-slant-500">Email *</label>
                <input id="email" type="email" placeholder="Enter your email"
                  className="border p-3 rounded-lg w-full bg-[#FFE4C4] border-gray-300 focus:ring-2 focus:ring-orange-300 outline-none text-darkBrown placeholder-darkBrown"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-lg font-medium text-slant-500">Phone *</label>
              <input id="phone" type="tel" placeholder="Enter your phone number"
                className="border p-3 rounded-lg w-full bg-[#FFE4C4] border-gray-300 focus:ring-2 focus:ring-orange-300 outline-none text-darkBrown placeholder-darkBrown"
                required
              />
            </div>
            <button type="submit"
              className="w-full text-white bg-orange-600 rounded-lg h-12 font-bold hover:transition duration-300 transform hover:scale-105 shadow-lg border border-orange-600"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-1/2 bg-gradient-to-r from-gray-700 to-gray-900 text-white p-10 shadow-lg flex flex-col justify-center items-center">
          <div className="text-center space-y-4">
            <h3 className="font-bold text-2xl text-orange-500">CONTACT US</h3>
            <p className="text-lg">3rd Floor, Sahiti Sudha Square, Beside KIMS Hospital, Hyderabad, Telangana, 500084.</p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-center">
                <h2 className="font-bold text-orange-500">OPEN:</h2>
                <p className="font-semibold pl-2">MONDAY-SUNDAY 8am to 10pm</p>
              </div>
              <div className="flex items-center justify-center">
                <h2 className="font-bold text-orange-500">PHONE:</h2>
                <p className="font-semibold pl-2">+91 9030069444</p>
              </div>
              <div className="flex items-center justify-center">
                <h2 className="font-bold text-orange-500">EMAIL:</h2>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=carnetdesignstudio@gmail.com" target="_blank" rel="noopener noreferrer" className="font-semibold pl-2 underline">carnetdesignstudio@gmail.com</a>
              </div>
              <div className="flex items-center justify-center">
                <h2 className="font-bold text-orange-500">WhatsApp:</h2>
                <a href="https://wa.me/9030069444?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services." target="_blank" rel="noopener noreferrer" className="font-semibold pl-2 underline">Carnet Design Studio</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}
