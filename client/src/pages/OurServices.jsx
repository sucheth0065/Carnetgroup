import React from "react";
import { Link } from "react-router-dom";

import BgOfHowWeWork from "../assets/BgOfHowWeWork.jpg";
import TvUnit from "../assets/TvUnit.jpg";
import KH from "../assets/KH.jpg";
import BasicTabs from "../components/Tabs.jsx";
export default function OurServices() {
  return (
    <div className="h-auto overflow-scroll">
      <div className="mt-40 ml-4 bg-h-full">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          Elevate Your Living<br></br>Spaces
        </h1>
        <p className="max-w-[600px] text-muted-foreground md:text-xl mt-5 opacity-70">
          Our expertise in Living hall, Modular kitchen, Bedroom design
          transforms your home into a beautiful, functional oasis.
        </p>
        <Link
          href="#"
          className="inline-flex h-10 items-center justify-center rounded-md bg-black text-white px-8 text-sm font-medium text-primary-foreground mt-3"
        >
          Request a Consultation
        </Link>
      </div>
      <div>
        <BasicTabs />
      </div>
    </div>
  );
}
{
  /* <div className="flex flex-row items-center justify-center space-x-4 bg-h-full w-full p-10 gap-5">
        <div className="bg-white rounded-lg overflow-hidden w-60  flex-col">
          <img
            src={BgOfHowWeWork}
            alt="Image description"
            className="w-full h-1/3 object-cover"
            loading="lazy"
          />
          <h1 className="flex-col font-bold pl-4 pt-4 w-full text-center">
            LIVING ROOM
          </h1>
          <p className="text-justify">
            Make every night relaxing with the finest Bedroom Interiors and wake
            up super fresh! We strive to serve our customers with the Delight
            they Deserve! Why choose us? We have Years of Expertise on our side
            to make your Dreams become a Reality!
          </p>
          <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-700 transition duration-300 w-full">
            Read More
          </button>
        </div>
        <div className="bg-white rounded-lg overflow-hidden w-60 flex-col">
          <img
            src={BgOfHowWeWork}
            alt="Image description"
            className="w-full h-1/3 object-cover"
            loading="lazy"
          />
          <h1 className="flex-col font-bold pt-4 w-full text-center">
            BED ROOM
          </h1>
          <p className="text-justify">
            Now your guests need not only be served with delicacies but let your
            Living Room be a delight to their eyes! Our Expert Team consists of
            Professionals that make your task much easier to implement your
            customized inputs and shaping your dreams!
          </p>
          <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-700 transition duration-300 w-full">
            Read More
          </button>
        </div>
        <div className="bg-white rounded-lg overflow-hidden w-60 flex-col">
          <img
            src={KH}
            alt="Image description"
            className="w-full h-1/3 object-cover"
            loading="lazy"
          />
          <h1 className="flex-col font-bold  text-center pt-4">
            MODULAR KITCHEN
          </h1>
          <p className="text-justify">
            Your Modular Kitchen would no longer be a space you would be wanting
            to leave! Our Exemplary years of Commitment are a Testimony to our
            Services that speaks volumes. Shape your space that reflects you and
            we are here to fulfil just that!
          </p>
          <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-700 transition duration-300 w-full ">
            Read More
          </button>
        </div>
        <div className="bg-white rounded-lg overflow-hidden w-60 flex-col">
          <img
            src={TvUnit}
            alt="Image description"
            className="w-full h-1/3 object-cover"
            loading="lazy"
          />
          <h1 className="flex-col font-bold pl-4 pt-4 text-center">TV UNIT</h1>
          <p className="text-justify">
            Keep your popcorns ready to binge-watch your favorite Netflix shows
            in your bespoke Hall! We at Lush Interiors create memorable moments
            that never fade away.Our Reputed Interior Designers that take a deep
            dive into your imagination!
          </p>
          <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300 w-full">
            Read More
          </button>
        </div>
      </div> */
}
