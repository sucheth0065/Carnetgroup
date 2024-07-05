import React from "react";
import { Link } from "react-router-dom";
import Living from "../assets/Livingroom1.jpg";
import Bedroom1 from "../assets/Bedroom1.jpg";
import KH from "../assets/KH.jpg";
import TvUnit from "../assets/tvunits1.jpg";

const Card = ({ image, title, description }) => (
  <div className="rounded-lg overflow-hidden w-full md:w-1/2 p-4 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
    <img
      src={image}
      alt={`${title} image`}
      className="w-full h-60 object-cover transition-transform transform hover:scale-110"
      loading="lazy"
    />
    <div className="p-6">
      <h1 className="font-serif font-bold text-2xl text-center mb-4">
        {title}
      </h1>
      <p className="font-sans text-base text-justify mb-6">{description}</p>
      <Link to="/ourservices">
        <button className="rounded-lg px-5 py-2 w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:from-orange-600 hover:to-red-600 transition duration-300 ease-in-out">
          Read More
        </button>
      </Link>
    </div>
  </div>
);

const LandingPage = () => {
  const inspirations = [
    {
      image: Living,
      title: "LIVING ROOM",
      description:
        "Make every night relaxing with the finest Bedroom Interiors and wake up super fresh! We strive to serve our customers with the Delight they Deserve! Why choose us? We have Years of Expertise on our side to make your Dreams become a Reality!",
    },
    {
      image: Bedroom1,
      title: "BED ROOM",
      description:
        "Now your guests need not only be served with delicacies but let your Living Room be a delight to their eyes! Our Expert Team consists of Professionals that make your task much easier to implement your customized inputs and shaping your dreams!",
    },
    {
      image: KH,
      title: "MODULAR KITCHEN",
      description:
        "Your Modular Kitchen would no longer be a space you would be wanting to leave! Our Exemplary years of Commitment are a Testimony to our Services that speaks volumes. Shape your space that reflects you and we are here to fulfil just that!",
    },
    {
      image: TvUnit,
      title: "TV UNIT",
      description:
        "Keep your popcorns ready to binge-watch your favorite Netflix shows in your bespoke Hall! We at Lush Interiors create memorable moments that never fade away. Our Reputed Interior Designers that take a deep dive into your imagination!",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center bg-gray-100 p-10 mt-9">
      {inspirations.map((item, index) => (
        <Card
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default LandingPage;
