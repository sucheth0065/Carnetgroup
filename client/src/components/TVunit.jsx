import React from "react";

const TVUnitDesign = () => {
  return (
    <div className="h-screen">
      <section className="text-center py-10">
        <img
          src="tvunit-hero.jpg"
          alt="TV Unit Design"
          className="w-full h-auto mb-5"
        />
        <h1 className="text-4xl font-bold">TV Unit Design</h1>
      </section>

      <section className="px-5 py-10">
        <p className="text-lg">
          Our TV unit designs are perfect for integrating your entertainment
          systems into a cohesive, stylish setup. We focus on functionality,
          aesthetics, and space optimization to ensure your TV unit is both
          practical and visually appealing. Whether you prefer a sleek modern
          look or a more traditional design, our custom TV units are crafted to
          enhance your living space.
        </p>
      </section>

      <section className="px-5 py-10 bg-gray-100">
        <h2 className="text-2xl font-bold mb-5">Key Features</h2>
        <ul className="list-disc list-inside">
          <li>Customizable Designs: Tailored to fit your space and style.</li>
          <li>
            Storage Solutions: Shelves, cabinets, and drawers for organized
            storage.
          </li>
          <li>Wire Management: Hidden compartments for cables and wires.</li>
          <li>Material Choices: High-quality wood, laminates, and finishes.</li>
          <li>Lighting Options: Integrated lighting for a modern look.</li>
        </ul>
      </section>

      <section className="text-center py-10">
        <h2 className="text-2xl font-bold mb-5">
          Interested in a Custom TV Unit?
        </h2>
        <button className="px-5 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700">
          Get a Quote
        </button>
      </section>
    </div>
  );
};

export default TVUnitDesign;
