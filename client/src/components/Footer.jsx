import React from 'react'
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

export default function() {
  return (
    <footer className='bg-black bg-opacity-90'>
        <div className='flex justify-between items-center max-w-6xl  mx-auto pt-10 pb-10 pl-0'>
            <div className='text-white flex flex-col w-1/3'>
                <h1 className="font-bold text-sm sm:text-4xl flex flex-wrap">
                    <span className="text-orange-500">Carnet Design Studio</span>
                </h1>
                <div className='mt-2'>
                <p>Carnet Design Studio is one of the finest interior design studios in Hyderabad where you can turn your dream come true. We turn your ideas into reality, and our creative designers can transform a simple space into a modern and appealing one. As an interior design company, we think that beauty can be found anywhere, but it needs the correct vision to discover it. Our end-to-end interior design services can remodel your little area into a luxurious haven.</p>
                </div>
            </div>
            <div className='flex-col w-1/3 text-white'>
                <h3 className='font-bold text-xl text-orange-500'>CONTACT US: </h3>
                <p>3rd Floor, Sahiti Sudha Square, Beside KIMS Hospital, Hyderabad, Telangana, 500084. </p>
                <div className='flex mt-6'>
                    <h2 className='font-bold text-orange-500 flex-row' >PHONE: </h2>
                    <p className='font-semibold text-s flex-row pl-2'>+91 XXXXXXXXX</p>
                </div>
                <div className='flex mt-2'>
                    <h2 className='font-bold text-orange-500 flex-row' >EMAIL: </h2>
                    <p className='font-semibold text-s flex-row pl-2'>carnetdesignstudio@gmail.com</p>
                </div>
            </div>
            <div className='flex-col text-white'>
                <h1 className='font-bold text-xl text-orange-500'>Follow us: </h1>
                <ul className='space-y-2'>
                    <a href='https://www.instagram.com/carnet_design_studio/' target='_blank' rel='noopener noreferrer'>
                        <li className='flex items-center'>
                            <FaInstagram className='mr-2' />
                            <span className='font-semibold'>Instagram</span>
                        </li>
                    </a>
                    <a href='https://www.facebook.com/carnetdesignstudio/' target='_blank' rel='noopener noreferrer'>
                        <li className='flex items-center'>
                            <FaFacebook className='mr-2' />
                            <span className='font-semibold'>Facebook</span>
                        </li>
                    </a>
                    <a href='https://www.youtube.com/channel/UC85jAC7iolo4V3zU6p1qmVA' target='_blank' rel='noopener noreferrer'> 
                        <li className='flex items-center'>
                            <FaYoutube className='mr-2' />
                            <span className='font-semibold'>YouTube</span>
                        </li>
                    </a>
                    <a href='https://www.linkedin.com/company/carnet-design-studio/' target='_blank' rel='noopener noreferrer'>
                        <li className='flex items-center'>
                            <FaLinkedin className='mr-2' />
                            <span className='font-semibold'>LinkedIn</span>
                        </li>
                    </a>
                    <a href='https://x.com/CDS1224' target='_blank' rel='noopener noreferrer'>
                        <li className='flex items-center'>
                            <FaXTwitter className='mr-2' />
                            <span className='font-semibold'>X</span>
                        </li>
                    </a>
                </ul>               
            </div>
        </div>
        <div className='bg-black bg-opacity-80 py-3'>
            <p className='text-center text-white text-sm'>
                &copy; {new Date().getFullYear()} Carnet Group. All rights reserved.
            </p>
        </div> 
    </footer>
  );
}
