import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Livingroom1 from "../assets/Livingroom1.jpg";
import Livingroom2 from "../assets/Livingroom2.jpg";
import Livingroom3 from "../assets/Livingroom3.jpg";
import Livingroom4 from "../assets/Livingroom4.jpg";
import Livingroom5 from "../assets/Livingroom5.jpg";
import Livingroom6 from "../assets/Livinroom6.jpg";

const photos = [
  Livingroom1,
  Livingroom2,
  Livingroom3,
  Livingroom5
];

const LivingRoom = () => {
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
      <section className="text-center py-10 bg-orange-500 text-white">
        <Slider {...settings}>
          {photos.map((photo, index) => (
            <div key={index}>
              <img
                src={photo}
                alt={`Kitchen-${index}`}
                className="w-fit h-80 rounded shadow-lg pl-5 pr-5"
              />
            </div>
          ))}
        </Slider>
        <h1 className="text-5xl font-bold mt-10">Living Room Design</h1>
      </section>

      <section className="px-5 py-10">
        <p className="text-lg leading-relaxed">
          Our living room designs are crafted to reflect your personality and
          lifestyle. Whether you prefer a modern, minimalist look or a cozy,
          traditional style, our designers will create a space that you'll love.
          We combine aesthetics and functionality to transform your living room
          into a welcoming environment for family and friends.
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
          Interested in a Living Room Makeover?
        </h2>
        <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded shadow-md hover:bg-orange-700 transition duration-300">
          Get a Quote
        </button>
      </section>
    </div>
  );
};

export default LivingRoom;
