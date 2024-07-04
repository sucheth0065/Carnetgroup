import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Bedroom1 from "../assets/Bedroom1.jpg";
import Bedroom2 from "../assets/Bedroom2.jpg";
import Bedroom3 from "../assets/Bedroom3.jpg";
import Bedroom4 from "../assets/Bedroom4.jpg";
import Bedroom5 from "../assets/Bedroom5.jpg";
import Bedroom6 from "../assets/Bedroom6.jpg";

const photos = [
  Bedroom1,
  Bedroom2,
  Bedroom4,
];

const BedroomDesign = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="h-auto flex flex-col">
      <section className="text-center py-10 bg-orange-500 text-white pl-3">
      <Slider {...settings}>
          {photos.map((photo, index) => (
            <div key={index}>
              <img
                src={photo}
                alt={`Bed-${index}`}
                className="w-fit h-80 rounded shadow-lg"
              />
            </div>
          ))}
        </Slider>
        <h1 className="text-5xl font-bold mt-10">Bedroom Design</h1>
      </section>

      <section className="px-5 py-10">
        <p className="text-lg leading-relaxed">
          Our bedroom designs are crafted to create a peaceful and relaxing
          atmosphere. Whether you prefer a modern, minimalist look or a cozy,
          traditional style, our designers will create a space that you'll love.
          We combine aesthetics and functionality to transform your bedroom into
          a serene retreat.
        </p>
      </section>

      <section className="px-5 py-10 bg-green-100">
        <h2 className="text-3xl font-bold mb-5">Key Features</h2>
        <ul className="list-disc list-inside space-y-3">
          <li>Custom Furniture: Designed to fit your space and style.</li>
          <li>Lighting Solutions: Ambient, task, and accent lighting.</li>
          <li>Color Coordination: Harmonizing colors and textures.</li>
          <li>Space Optimization: Making the most of your available space.</li>
          <li>Decor Elements: Artwork, rugs, and accessories.</li>
        </ul>
      </section>

      <section className="text-center py-10 bg-gray-200">
        <h2 className="text-3xl font-bold mb-5">
          Interested in a Bedroom Makeover?
        </h2>
        <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded shadow-md hover:bg-orange-700 transition duration-300">
          Get a Quote
        </button>
      </section>
    </div>
  );
};

export default BedroomDesign;
