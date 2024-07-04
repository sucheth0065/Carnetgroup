import React from "react";
import { Link } from "react-router-dom";

import BgOfHowWeWork from "../assets/BgOfHowWeWork.jpg";
import TvUnit from "../assets/TvUnit.jpg";
import KH from "../assets/KH.jpg";
import BasicTabs from "../components/Tabs.jsx";

export default function OurServices() {
  return (
    <div className="h-auto bg-white">
      <div className="mt-24 ml-4 bg-h-full">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none pl-6 pt-6 text-green-700">
          Elevate Your Living<br></br>Spaces
        </h1>
        <p className="max-w-[600px] text-gray-700 md:text-xl mt-5 opacity-70 pl-6">
          Our expertise in Living hall, Modular kitchen, Bedroom design
          transforms your home into a beautiful, functional oasis.
        </p>
        <Link
          to="/contactus"
          className="inline-flex h-10 items-center justify-center rounded-md bg-orange-500 text-white px-8 text-sm font-medium mt-3 ml-6"
        >
          Request a Consultation
        </Link>
      </div>
      <div className="mt-8">
        <BasicTabs />
      </div>
    </div>
  );
}


