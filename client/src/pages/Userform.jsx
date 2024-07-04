import React, { useState } from "react";

const DesignRequirementForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    roomType: "",
    stylePreference: "",
    budget: "",
    additionalComments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-8 bg-white shadow-md rounded-lg mt-32 mb-5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Room Type</label>
        <select
          name="roomType"
          value={formData.roomType}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        >
          <option value="">Select a room type</option>
          <option value="living-room">Living Room</option>
          <option value="bedroom">Bedroom</option>
          <option value="kitchen">Kitchen</option>
          <option value="bathroom">Bathroom</option>
          <option value="dining-room">Dining Room</option>
          <option value="office">Office</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Style Preference
        </label>
        <select
          name="stylePreference"
          value={formData.stylePreference}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        >
          <option value="">Select a style preference</option>
          <option value="modern">Modern</option>
          <option value="contemporary">Contemporary</option>
          <option value="traditional">Traditional</option>
          <option value="minimalist">Minimalist</option>
          <option value="industrial">Industrial</option>
          <option value="scandinavian">Scandinavian</option>
          <option value="rustic">Rustic</option>
          <option value="bohemian">Bohemian</option>
          <option value="classic">Classic</option>
          <option value="mid-century-modern">Mid-Century Modern</option>
          <option value="farmhouse">Farmhouse</option>
          <option value="coastal">Coastal</option>
          <option value="victorian">Victorian</option>
          <option value="eclectic">Eclectic</option>
          <option value="art-deco">Art Deco</option>
          <option value="mediterranean">Mediterranean</option>
          <option value="urban">Urban</option>
          <option value="transitional">Transitional</option>
          <option value="shabby-chic">Shabby Chic</option>
          <option value="zen">Zen</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Budget (INR)
        </label>
        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        >
          <option value="">Select your budget</option>
          <option value="50000-100000">₹50,000 - ₹1,00,000</option>
          <option value="100000-200000">₹1,00,000 - ₹2,00,000</option>
          <option value="200000-500000">₹2,00,000 - ₹5,00,000</option>
          <option value="500000-1000000">₹5,00,000 - ₹10,00,000</option>
          <option value="1000000-2000000">₹10,00,000 - ₹20,00,000</option>
          <option value="2000000-5000000">₹20,00,000 - ₹50,00,000</option>
          <option value="above-5000000">Above ₹50,00,000</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Additional Message
        </label>
        <textarea
          name="additionalComments"
          value={formData.additionalComments}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-orange-400 text-white p-2 rounded hover:bg-black"
      >
        Submit
      </button>
    </form>
  );
};

export default DesignRequirementForm;
