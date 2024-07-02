import React from "react";

const LivingRoom = () => {
  return (
    <div className="h-screen">
      <section className="text-center py-10">
        <img
          src="livingroom-hero.jpg"
          alt="Living Room Design"
          className="w-full h-auto mb-5"
        />
        <h1 className="text-4xl font-bold">Living Room Design</h1>
      </section>

      <section className="px-5 py-10">
        <p className="text-lg">
          Our living room designs are crafted to reflect your personality and
          lifestyle. Whether you prefer a modern, minimalist look or a cozy,
          traditional style, our designers will create a space that you'll love.
          We combine aesthetics and functionality to transform your living room
          into a welcoming environment for family and friends.
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
          Interested in a Living Room Makeover?
        </h2>
        <button className="px-5 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700">
          Get a Quote
        </button>
      </section>
    </div>
  );
};

export default LivingRoom;
