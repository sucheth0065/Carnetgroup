import React from 'react';
import BgOfHowWeWork from '../assets/BgOfHowWeWork.jpg';
import '../About.css'
import { Link } from 'react-router-dom';
import Livingroom5 from '../assets/Livingroom5.jpg'
import { TbTargetArrow } from "react-icons/tb";
import { GiBinoculars } from "react-icons/gi";

export default function About() {
  return (
    <div className='mt-24'>
      <div className='h-80'>
        <img src={Livingroom5} className='h-auto w-screen'/>
      </div>
      <div className='flex flex-row'>
        <div className='w-1/2 flex items-center justify-center relative' class='about-img'>
          <img src={BgOfHowWeWork} alt='Image description' className='h-96' class='img'/>
        </div>
        <div className='bg-black bg-opacity-85 text-white w-1/2 p-5 glass-effect' class='about'>
          <h1 className="text-4xl font-bold mb-4 flex justify-center">Who We Are?</h1>
          <p className="mb-4">
            Welcome to <span className="text-orange-500 font-bold">Carnet Group</span>, where your vision meets our creativity to transform spaces into stunning works of art. Located in the heart of Hyderabad, we are one of the city's premier interior design studios, renowned for our ability to turn dreams into reality. Our passion lies in designing interiors that are not only beautiful but also functional, ensuring every corner of your home or office reflects your personality and style.
          </p>
          <h2 className="text-2xl font-bold mb-2">Our Philosophy</h2>
          <p className="mb-4">
            At <span className="text-orange-500 font-bold">Carnet Group</span>, we believe that beauty is omnipresent but requires the right vision to be discovered. Our approach combines art, science, and design to create spaces that are both aesthetically pleasing and highly functional. We see every project as an opportunity to create something unique and extraordinary, tailored to the specific needs and desires of our clients.
          </p>

          <h2 className="text-2xl font-bold mb-2">What We Offer</h2>
          <ol className="list-decimal ml-6 mb-4">
            <li className="mb-2">
              <strong>Consultation and Concept Development:</strong> Understanding your needs, preferences, and vision.
            </li>
            <li className="mb-2">
              <strong>Space Planning:</strong> Optimizing the layout to enhance functionality and flow.
            </li>
            <li className="mb-2">
              <strong>Design and Decoration:</strong> Selecting the perfect combination of colors, furniture, lighting, and accessories.
            </li>
            <li className="mb-2">
              <strong>Project Management:</strong> Overseeing every phase of the project to ensure timely and quality completion.
            </li>
          </ol>

          <h2 className="text-2xl font-bold mb-2">Our Commitment</h2>
          <p className="mb-4">
            We are dedicated to delivering the best and most affordable interior design solutions that suit your budget and lifestyle. Our team respects your ideas and collaborates closely with you to create interiors that reflect your individuality. We believe that great design comes from the perfect blend of creativity and practicality.
          </p>

          <h2 className="text-2xl font-bold mb-2">Why Choose Us?</h2>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2"><strong>Expertise:</strong> Extensive experience and a portfolio of successful projects.</li>
            <li className="mb-2"><strong>Innovation:</strong> Cutting-edge tools and creative solutions.</li>
            <li className="mb-2"><strong>Customer-Centric:</strong> Personalized service and attention to detail.</li>
            <li className="mb-2"><strong>Quality:</strong> Commitment to excellence in every aspect of our work.</li> 
          </ul>

          <h2 className="text-2xl font-bold mb-2">Let's Create Magic Together</h2>
          <p className="mb-4">
            If you’re looking to transform your space into a magical haven, you’ve come to the right place. At <span className="text-orange-500 font-bold">Carnet Group</span>, we’re here to help you live your dreams and make your world a little more magical. Let’s work together to create a masterpiece that will leave you in awe.
          </p>

          <p className="mb-4">
            Join us on this journey of transformation. Contact us today to get started!
          </p>
        </div>
      </div>
      <div className='h-auto flex flex-row'>
        <div className='h-auto w-1/2 bg-gradient-to-r from-orange-400 to-red-400'>
          <li className='flex items-center mt-10 pl-60'>
            <TbTargetArrow className='mr-4' size={78} />
            <span className='text-3xl text-center font-semibold font-serif text-white'>Mission</span>
          </li>
          <div className='ml-8 mb-6 mr-8 flex justify-center text-white text-xl p-10 font-serif'>
            <h2>Our mission is to deliver exceptional interior design services that elevate our clients' concepts and branding with innovative, customized solutions. We are committed to consistently creating inspiring spaces that enhance work, life, and play. By seamlessly blending relatable motifs from our clients' unique cultures and lifestyles with our premium design aesthetic, we ensure every project not only meets but exceeds expectations, bringing visions to life with unparalleled quality and creativity.</h2>
          </div> 
        </div>
        <div className='h-auto w-1/2 bg-gradient-to-r from-red-400 to-orange-400'>
          <li className='flex items-center mt-10 pl-60'>
            <GiBinoculars className='mr-4' size={78} />
            <span className='text-3xl text-center font-semibold font-serif text-white'>Vision</span>
          </li>
          <h2 className='ml-8 mb-6 mr-8 flex justify-center text-white text-xl p-10 font-serif'>Our goal is to become the premier interior design firm, known for our innovative and functional designs that enhance the brand value of our esteemed clients. We aim for steady operational growth across Andhra Pradesh and Telangana, establishing ourselves as the go-to experts for expressive, high-quality interior décor.</h2> 
        </div>
      </div>
      <div className='bg-gradient-to-r from-green-300 to-orange-400 h-28 flex justify-center'>
        <Link to="/ContactUs">
        <button className='border-solid border-2 border-black h-10 w-36 mt-8 hover:bg-black hover:text-white hover:rounded-xl hover:duration-75'>TALK WITH US</button>
        </Link>
      </div>
    </div>
  );
};
