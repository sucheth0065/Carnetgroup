import React from "react";
import step1 from "../assets/step1.jpg";
import cost from "../assets/cost.jpg";
import PersonalDiscussion from "../assets/PersonalDiscussion.jpg";
import AdvanceBooking from "../assets/AdvanceBooking.jpg";
import D from "../assets/2D.jpg";
import Materal from "../assets/Materal.jpg";
import FinalQuatation from "../assets/FinalQuatation.jpg";
import Execution from "../assets/Execution.jpg";
import Final from "../assets/Livingroom2.jpg";
import { Link } from "react-router-dom";

export default function HowWeWork() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="w-fit mx-10 flex-grow mt-24">
      <div className="h-80 mt-2 flex flex-col justify-center pl-20 bg-white">
        <h3 className="font-serif font-semibold text-2xl pb-5">
          Interior Design Process
        </h3>
        <h1 className=" font-serif font-bold text-5xl ">How We Work</h1>
        <p className=" font-sans text-left w-2/4 pt-4 text-lg">
          We transform the design dreams of our clients into a full-fledged
          reality with elaborate space planning and furniture customizations
          done in perfect alignment to our the unique tastes and preferences of
          the homeowner. Here is a glimpse of our workflow.
        </p>
      </div>
      <div className="bg-gradient-to-br from-orange-300 to-red-400 rounded-3xl mb-5">
        <div className="h-80 mt-5 flex flex-row">
          <div className="h-80 w-1/2 mt-8">
            <img
              src={step1}
              alt="step"
              className="h-full w-auto rounded-lg ml-20"
              loading="lazy"
            />
          </div>
          <div className="h-80 w-1/2 flex flex-col justify-center items-center">
            <h2 className="font-text-center text-2xl font-bold mr-20">
              1. Online Consultation
            </h2>
            <p className="pt-5 text-justify w-2/4 text-lg">
              We are always there to assist you regarding all things related to
              home interiors. Get in touch for an online consultation!
            </p>
            <Link
              to="/contactus"
              className="mt-4 px-10 py-2 bg-black text-white font-semibold rounded"
            >
              Request a Consultation
            </Link>
            {/* <a
              href="/contactus"
              className="text-decoration-line: underline mr-36 text-white"
            >
              Get in touch with us here!
            </a> */}
          </div>
        </div>
        <div className="h-80 mt-5 flex flex-row">
          <div className="h-80 w-1/2  flex flex-col justify-center items-center">
            <h2 className="text-center text-2xl font-bold">
              2. Approximate Cost Estimation
            </h2>
            <p className="pt-5 text-justify w-2/4 text-lg">
              Specify your interior design needs to receive an accurate price
              quote. Plan ahead and stay within your budget!
            </p>
            <Link
              to="/Userform" onClick={handleClick}
            ><button className="mt-4 px-10 py-2 bg-black text-white font-semibold rounded ">
            Get a Quote
          </button></Link>
          </div>
          <div className="h-80 w-1/2">
            <img
              src={cost}
              alt="cost"
              className="h-full w-auto rounded-lg ml-20"
              loading="lazy"
            />
          </div>
        </div>
        <div className="h-80 mt-5 flex flex-row">
          <div className="h-80 w-1/2">
            <img
              src={PersonalDiscussion}
              alt="step"
              className="h-full w-auto rounded-lg ml-20"
              loading="lazy"
            />
          </div>
          <div className="h-80 w-1/2 flex flex-col justify-center items-center">
            <h2 className="text-center text-2xl font-bold">
              3. In-Person Discussion
            </h2>
            <p className="pt-5 text-justify w-2/4 text-lg">
              Need to meet in person for a clearer understanding of your
              interior design needs? Schedule an appointment with us today!
              <br></br>
              <a
                href="/about"
                className="underline text-white text-xl mt-3 p-2"
              >
                Know about us here!
              </a>
            </p>
          </div>
        </div>
        <div className="h-80 mt-5 flex flex-row">
          <div className="h-80 w-1/2 flex flex-col justify-center items-center">
            <h2 className="text-center text-2xl font-bold">
              4. Advance Booking
            </h2>
            <p className="pt-5 text-justify w-2/4 text-lg">
              It’s never too early to book! Secure your time slot well in
              advance for us to chalk out your interiors efficiently and well.
            </p>
          </div>
          <div className="h-80 w-1/2">
            <img
              src={AdvanceBooking}
              alt="step"
              className="h-full w-auto rounded-lg ml-20"
              loading="lazy"
            />
          </div>
        </div>
        <div className="h-80 mt-5 flex flex-row">
          <div className="h-80 w-1/2">
            <img
              src={D}
              alt="step"
              className="h-full w-auto rounded-lg ml-20"
              loading="lazy"
            />
          </div>
          <div className="h-80 w-1/2 flex flex-col justify-center items-center">
            <h2 className="text-center text-2xl font-bold">5. Online Design</h2>
            <p className="pt-5 text-justify w-2/4 text-lg">
              Visualize your dream home before we start working! Avail 2D & 3D
              visual representations digitally and get a crystal-clear idea of
              how your home is going to be.
              <br></br>
              <a
                href="/ourservices"
                className="underline text-white text-xl mt-3 p-2"
              >
                Take a look at our services here!
              </a>
            </p>
          </div>
        </div>
        <div className="h-80 mt-5 flex flex-row">
          <div className="h-80 w-1/2 flex flex-col justify-center items-center">
            <h2 className="text-center text-2xl font-bold">
              6. Material Presentation
            </h2>
            <p className="pt-5 text-justify w-2/4 text-lg">
              We believe in full transparency when it comes to disclosures to
              our esteemed clients. Get a glimpse of real material samples to be
              used in your interior decor.
            </p>
            <a
              href="/ourdesigns"
              className="underline text-white text-xl mt-3 p-2"
            >
              Take a look at our designs here!
            </a>
          </div>
          <div className="h-80 w-1/2">
            <img
              src={Materal}
              alt="step"
              className="h-full w-auto rounded-lg ml-20"
              loading="lazy"
            />
          </div>
        </div>
        <div className="h-80 mt-5 flex flex-row">
          <div className="h-80 w-1/2">
            <img
              src={FinalQuatation}
              alt="step"
              className="h-full w-auto rounded-lg ml-20"
              loading="lazy"
            />
          </div>
          <div className="h-80 w-1/2 flex flex-col justify-center items-center">
            <h2 className="text-center text-2xl font-bold">
              7. Final Quotation
            </h2>
            <p className="pt-5 text-justify w-2/4 text-lg">
              We customize our quote to your preference, budget, and design
              execution viability. The final quotation will be the only price
              added to your tab. No hidden costs.
            </p>
            <Link
              to="/Userform" onClick={handleClick}>
            <button className="mt-4 px-10 py-2 bg-black text-white font-semibold rounded ">
              Get a Quote
            </button>
            </Link>
          </div>
        </div>
        <div className="h-80 mt-5 flex flex-row">
          <div className="h-80 w-1/2 flex flex-col justify-center items-center">
            <h2 className="text-center text-2xl font-bold">
              8. Execution Begins
            </h2>
            <p className="pt-5 text-justify w-2/4 text-lg">
              We begin giving shape to your vision one step at a time and
              breathe life into your interior decor dreams.
            </p>
          </div>
          <div className="h-80 w-1/2">
            <img
              src={Execution}
              alt="step"
              className="h-full w-auto rounded-lg ml-20"
              loading="lazy"
            />
          </div>
        </div>
        <div className="h-80 mt-5 flex flex-row">
          <div className="h-80 w-2/3 pl-55">
            <img
              src={Final}
              alt="step"
              className="h-full w-auto rounded-lg ml-24 pb-5"
              loading="lazy"
            />
          </div>
          <div className="h-80 w-1/2 flex flex-col justify-center items-center mb-3">
            <h2 className="text-center text-2xl font-bold">
              9. Project Handover
            </h2>
            <p className="pt-5 text-justify w-2/4 text-lg">
              And, it’s a wrap! We will hand over your home to you,
              ready-to-move and complete with all the final touches!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
