import React from "react";

const ModularKitchen = () => {
  return (
    <div className="h-screen">
      <section className="text-center py-10">
        <img
          src="hero-image.jpg"
          alt="Kitchen-img"
          className="w-full h-auto mb-5"
        />
        <h1 className="text-4xl font-bold">Modular Kitchen Design</h1>
      </section>

      <section className="px-5 py-10">
        <p className="text-lg">
          Our modular kitchen designs are tailored to suit your lifestyle and
          cooking habits. We focus on creating functional and stylish kitchens
          that maximize space and enhance efficiency. With customizable options
          and a variety of finishes, we ensure your kitchen is not only
          practical but also a reflection of your taste.
        </p>
      </section>

      <section className="px-5 py-10 bg-gray-100">
        <h2 className="text-2xl font-bold mb-5">Key Features</h2>
        <ul className="list-disc list-inside">
          <li>
            Customizable Units: Adjustable shelves, drawers, and cabinets.
          </li>
          <li>
            Premium Materials: High-quality wood, laminates, and hardware.
          </li>
          <li>
            Smart Storage Solutions: Pull-out trays, corner units, and built-in
            organizers.
          </li>
          <li>Ergonomic Design: Easy access to frequently used items.</li>
          <li>Modern Appliances: Seamlessly integrated kitchen appliances.</li>
        </ul>
      </section>

      <section className="text-center py-10">
        <h2 className="text-2xl font-bold mb-5">
          Interested in a Modular Kitchen?
        </h2>
        <button className="px-5 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700">
          Get a Quote
        </button>
      </section>
    </div>
  );
};

export default ModularKitchen;
