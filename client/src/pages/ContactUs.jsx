import React from "react";
import contact from '../assets/contact.jpg';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

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
      <div className="h-screen bg-slate-500 flex">
        <div className="h-auto w-1/4 ml-12 flex flex-col justify-center">
            <form className='flex flex-col gap-4'>
                <h1 className='text-3xl text-center font-semibold mt-5 mb-2 font-serif'>Send Us Message</h1>
                <input type="text" placeholder="Username" className="border p-3 rounded-lg font-serif" id="username" />
                <input type='email' placeholder='email' className='border p-3 rounded-lg font-serif' id='email'/>
                <input type='password' placeholder='password' className='border p-3 rounded-lg font-serif' id='password'/>
                <button className='bg-orange-500 text-white font-serif p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80 mb-10'>Submit</button>
            </form>
        </div>
      </div>
    </div>
  );
}
