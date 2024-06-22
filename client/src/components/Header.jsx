import React from "react";
import { Link } from "react-router-dom";
import Carnetlogo from "../assets/Carnetlogo.jpeg";
import CDS1 from '../assets/CDS1.png';

export default function Header() {
  return (
    <header className="bg-black opacity-95 shadow-md fixed top-0 w-full z-50 flex flex-row ">
      <div className="flex items-center m-3 ml-8 w-1/4">
        <img src={CDS1} className="h-14 w-auto rounded-md" alt="Carnet Logo"/>
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-2xl flex flex-wrap flex-col">
            <span className="text-orange-500">CARNET</span>
            <span className="text-orange-500">DESIGN STUDIO</span>
          </h1>
        </Link>
      </div>
      <div className="flex items-center justify-end mr-6 w-3/4">
        <ul className="flex gap-6 ">
          <Link to="/home">
            <li className="hidden sm:inline text-white hover:text-orange-500 text-xl "> HOME </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-white hover:text-orange-500 text-xl">ABOUT</li>
          </Link>
          <Link to="/howwework">
            <li className="hidden sm:inline text-white hover:text-orange-500 text-xl">HOW WE WORK</li>
          </Link>
          <Link to="/ourservices">
            <li className="hidden sm:inline text-white hover:text-orange-500 text-xl">OUR SERVICES</li>
          </Link>     
          <Link to="/contactus">
            <li className="hidden sm:inline text-white hover:text-orange-500 text-xl">CONTACT US</li>
          </Link>
          <Link to="/sign-up">
            <li className="hidden sm:inline text-white hover:text-orange-500 text-xl">SIGN UP </li>
          </Link>
          </ul>
        </div>
    </header>
  );
}
