import React from "react";
import { Link } from "react-router-dom";
import CDS1 from "../assets/CDS1.png";

export default function Header() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <header className="bg-black opacity-95 shadow-md fixed top-0 w-full z-50 flex flex-row ">
      <div className="flex items-center m-3 ml-8 w-1/4">
        <img src={CDS1} className="h-14 w-auto rounded-md" alt="Carnet Logo" />
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-3xl flex flex-wrap flex-col">
            <span className="text-orange-500">CARNET</span>
            <span className="text-orange-500">DESIGN STUDIO</span>
          </h1>
        </Link>
      </div>
      <div className="flex items-center justify-end mr-6 w-3/4">
        <ul className="flex gap-6 ">
          <Link to="/home" onClick={handleClick}>
            <li className="font-serif hidden sm:inline text-white hover:text-orange-500 text-xl ">
              {" "}
              HOME{" "}
            </li>
          </Link>
          <Link to="/about" onClick={handleClick}>
            <li className="font-serif hidden sm:inline text-white hover:text-orange-500 text-xl">
              ABOUT
            </li>
          </Link>
          <Link to="/howwework" onClick={handleClick}>
            <li className=" font-serif hidden sm:inline text-white hover:text-orange-500 text-xl">
              HOW WE WORK
            </li>
          </Link>
          <Link to="/ourservices" onClick={handleClick}>
            <li className=" font-serif hidden sm:inline text-white hover:text-orange-500 text-xl">
              OUR SERVICES
            </li>
          </Link>
          <Link to="/contactus" onClick={handleClick}>
            <li className=" font-serif hidden sm:inline text-white hover:text-orange-500 text-xl">
              CONTACT US
            </li>
          </Link>
          <Link to="/ourdesigns" onClick={handleClick}>
            <li className="font-serif hidden sm:inline text-white hover:text-orange-500 text-xl">
              OUR DESIGNS
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
