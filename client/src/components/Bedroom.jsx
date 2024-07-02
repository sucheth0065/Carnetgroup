import React from "react";

const BedroomDesign = () => {
  return (
    <div className="h-screen">
      <section className="text-center py-10">
        <img
          src="bedroom-hero.jpg"
          alt="Bedroom Design"
          className="w-full h-auto mb-5"
        />
        <h1 className="text-4xl font-bold">Bedroom Design</h1>
      </section>

      <section className="px-5 py-10">
        <p className="text-lg">
          Our bedroom designs are crafted to create a peaceful and relaxing
          atmosphere. Whether you prefer a modern, minimalist look or a cozy,
          traditional style, our designers will create a space that you'll love.
          We combine aesthetics and functionality to transform your bedroom into
          a serene retreat.
        </p>
      </section>

      <section className="px-5 py-10 bg-gray-100">
        <h2 className="text-2xl font-bold mb-5">Key Features</h2>
        <ul className="list-disc list-inside">
          <li>Custom Furniture: Designed to fit your space and style.</li>
          <li>Lighting Solutions: Ambient, task, and accent lighting.</li>
          <li>Color Coordination: Harmonizing colors and textures.</li>
          <li>Space Optimization: Making the most of your available space.</li>
          <li>Decor Elements: Artwork, rugs, and accessories.</li>
        </ul>
      </section>

      <section className="text-center py-10">
        <h2 className="text-2xl font-bold mb-5">
          Interested in a Bedroom Makeover?
        </h2>
        <button className="px-5 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700">
          Get a Quote
        </button>
      </section>
    </div>
  );
};

export default BedroomDesign;
