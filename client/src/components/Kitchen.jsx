import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Kitchen1 from "../assets/Kitchen1.jpg";
import Kitchen2 from "../assets/Kitchen2.jpg";
import Kitchen3 from "../assets/Kitchen3.jpg";
import Kitchen4 from "../assets/Kitchen4.jpg";
import Kitchen5 from "../assets/Kitchen5.jpg";
import Kitchen6 from "../assets/Kitchen6.jpg";

const photos = [
  Kitchen1,
  Kitchen2,
  Kitchen3,
  Kitchen4,
  Kitchen5,
  Kitchen6,
];

const ModularKitchen = () => {
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
                className="w-fit h-80 rounded shadow-lg"
              />
            </div>
          ))}
        </Slider>
        <h1 className="text-5xl font-bold mt-10">Modular Kitchen Design</h1>
      </section>

      <section className="px-5 py-10 flex-1">
        <p className="text-lg leading-relaxed">
          Our modular kitchen designs are tailored to suit your lifestyle and
          cooking habits. We focus on creating functional and stylish kitchens
          that maximize space and enhance efficiency. With customizable options
          and a variety of finishes, we ensure your kitchen is not only
          practical but also a reflection of your taste.
        </p>
      </section>

      <section className="px-5 py-10 bg-green-100">
        <h2 className="text-3xl font-bold mb-5">Key Features</h2>
        <ul className="list-disc list-inside space-y-3">
          <li>Customizable Units: Adjustable shelves, drawers, and cabinets.</li>
          <li>Premium Materials: High-quality wood, laminates, and hardware.</li>
          <li>Smart Storage Solutions: Pull-out trays, corner units, and built-in organizers.</li>
          <li>Ergonomic Design: Easy access to frequently used items.</li>
          <li>Modern Appliances: Seamlessly integrated kitchen appliances.</li>
        </ul>
      </section>

      <section className="text-center py-10 bg-gray-200">
        <h2 className="text-3xl font-bold mb-5">
          Interested in a Modular Kitchen?
        </h2>
        <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded shadow-md hover:bg-orange-700 transition duration-300">
          Get a Quote
        </button>
      </section>
    </div>
  );
};

export default ModularKitchen;



