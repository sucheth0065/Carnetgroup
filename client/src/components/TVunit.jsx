import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import tvunits1 from "../assets/tvunits1.jpg";
import tvunits2 from "../assets/tvunits2.jpg";
import tvunits3 from "../assets/tvuints3.jpg";
import tvunits4 from "../assets/tvuints4.jpg";
import tvunits5 from "../assets/tvuints5.jpg";

const photos = [
  tvunits1,
  tvunits2,
  tvunits3,
  tvunits4,
  tvunits5
]

const TVUnitDesign = () => {
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
        <h1 className="text-5xl font-bold mt-10">TV Unit Design</h1>
      </section>

      <section className="px-5 py-10">
        <p className="text-lg leading-relaxed">
          Our TV unit designs are perfect for integrating your entertainment
          systems into a cohesive, stylish setup. We focus on functionality,
          aesthetics, and space optimization to ensure your TV unit is both
          practical and visually appealing. Whether you prefer a sleek modern
          look or a more traditional design, our custom TV units are crafted to
          enhance your living space.
        </p>
      </section>

      <section className="px-5 py-10 bg-green-100">
        <h2 className="text-3xl font-bold mb-5">Key Features</h2>
        <ul className="list-disc list-inside space-y-3">
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

      <section className="text-center py-10 bg-gray-200">
        <h2 className="text-3xl font-bold mb-5">
          Interested in a Custom TV Unit?
        </h2>
        <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded shadow-md hover:bg-orange-700 transition duration-300">
          Get a Quote
        </button>
      </section>
    </div>
  );
};

export default TVUnitDesign;
