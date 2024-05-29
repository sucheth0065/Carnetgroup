import React from 'react'
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa';

export default function() {
  return (
    <footer className='bg-black bg-opacity-90 shadow-md '>
        <div className='flex justify-between items-center max-w-6xl  mx-auto p-3'>
            <div className='font-semibold text-2xl text-white'>
                <h1 className="font-bold text-sm sm:text-4xl flex flex-wrap">
                    <span className="text-orange-500">Carnet</span>
                    <span className="text-orange-500">Group</span>
                </h1>   
                <h1 className='pt-3'>Indian's No:1 Interior Designer</h1>
            </div>
            <div className='flex-col w-1/3 text-white'>
                <h3 className='font-bold text-orange-400'>Address: </h3>
                <p>3rd Floor, Sahiti Sudha Square, Beside KIMS Hospital, Telangana, 500084. </p>
                <h2 className='font-bold mt-3 text-orange-400' >Mobile Number : </h2>
                <p className='font-semibold text-xl'>+91 XXXXXXXXX</p>
            </div>
            <div className='flex-col text-white'>
                <h1 className='font-bold text-xl text-orange-400'>Contact Us : </h1>
                <ul className='space-y-2'>
                    <li className='flex items-center'>
                        <FaInstagram className='mr-2' />
                        <span className='font-semibold '>Instagram</span>
                    </li>
                    <li className='flex items-center'>
                        <FaFacebook className='mr-2' />
                        <span className='font-semibold'>Facebook</span>
                    </li>
                    <li className='flex items-center'>
                        <FaYoutube className='mr-2' />
                        <span className='font-semibold'>YouTube</span>
                    </li>
                    <li className='flex items-center'>
                        <FaLinkedin className='mr-2' />
                        <span className='font-semibold'>LinkedIn</span>
                    </li>
                </ul>                
            </div>
        </div>  
    </footer>
  );
}
