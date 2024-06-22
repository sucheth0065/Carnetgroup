import React from "react";
import contact from '../assets/contact.jpg';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Final from '../assets/Final.jpg'

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 37.7749,
  lng: -122.4194
};

export default function ContactUs() {
  return (
    <div className='mt-32'>
      <div>
        <img src={contact} alt='meeting' className='h-80 w-screen' />
      </div>
      <div className="h-auto w-screen bg-zinc-900 text-center text-zinc-50 text-4xl pt-6 pb-6">
        Get in touch with us to design<br/>your dream home
      </div>
      <div className="bg-slate-50 p-6">
        
      </div>
      <div className="h-auto bg-black opacity-95 flex">
        <div className="w-1/2">
          <img src={Final} alt="step" className='h-full w-auto rounded-lg p-10' />
        </div>
        <div className="w-1/2">
          <div className="flex flex-col justify-center m-10 pt-40">
            <form className='flex flex-col gap-4 ml-10'>
                <h1 className='text-xl text-center font-semibold mt-5 mb-2 font-serif text-white'>Send Us Message</h1>
                <input type="text" placeholder="Username" className="border p-3 rounded-lg font-serif" id="username" />
                <input type='email' placeholder='email' className='border p-3 rounded-lg font-serif' id='email'/>
                <input type="tel" placeholder="Mobile number" className="border p-3 rounded-lg font-serif" pattern="[0-9]{10}" id="mobile" required/>
                <button className='bg-orange-500 text-white font-serif p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80 mb-10'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
