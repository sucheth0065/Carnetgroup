import React from 'react'
import Bedroom1 from '../assets/Bedroom1.jpg'
import Bedroom2 from '../assets/Bedroom2.jpg'
import Bedroom3 from '../assets/Bedroom3.jpg'
import Bedroom4 from '../assets/Bedroom4.jpg'
import Bedroom5 from '../assets/Bedroom5.jpg'
import Bedroom6 from '../assets/Bedroom6.jpg'
import Livingroom1 from '../assets/Livingroom1.jpg'
import Livingroom2 from '../assets/Livingroom2.jpg'
import Livingroom3 from '../assets/Livingroom3.jpg'
import Livingroom4 from '../assets/Livingroom4.jpg'
import Livingroom5 from '../assets/Livingroom5.jpg'
import Livingroom6 from '../assets/Livinroom6.jpg'
import Kitchen1 from '../assets/Kitchen1.jpg'
import Kitchen2 from '../assets/Kitchen2.jpg'
import Kitchen3 from '../assets/Kitchen3.jpg'
import Kitchen4 from '../assets/Kitchen4.jpg'
import Kitchen5 from '../assets/Kitchen5.jpg'
import Kitchen6 from '../assets/Kitchen6.jpg'


export default function OurServices() {
  return (
    <div className='min-h-screen pb-20 pt-40'> 
    <div className='min-h-full'>
      <div className='bg-orange-400 h-20'>
        <h1 className='text-center text-white text-xl font-xl pt-6'>Bed Room</h1>
      </div>
      <div className='h-80 mx-5 my-10 flex justify-between items-center'>
        <img src={Bedroom1} className='h-80 flex-row' alt="Bedroom 1"/>
        <img src={Bedroom2} className='h-80 flex-row' alt="Bedroom 2"/>
        <img src={Bedroom3} className='h-80 flex-row' alt="Bedroom 3"/>
      </div>
      <div className='h-80 mx-5 my-10 flex justify-between items-center'>
        <img src={Bedroom4} className='h-80 flex-row' alt="Bedroom 4"/>
        <img src={Bedroom5} className='h-80 flex-row' alt="Bedroom 5"/>
        <img src={Bedroom6} className='h-80 flex-row' alt="Bedroom 6"/>
      </div>
      <div className='bg-orange-400 h-20 mt-10'>
        <h1 className='text-center text-white text-xl font-xl pt-6'>Living Room</h1>
      </div>
      <div className='h-80 mx-5 my-10 flex justify-between items-center'>
        <img src={Livingroom1} className='h-80 flex-row' alt="Livingroom 1"/>
        <img src={Livingroom2} className='h-80 flex-row ml-5 mr-5' alt="Living 2"/>
        <img src={Livingroom3} className='h-80 flex-row' alt="Living 3"/>
      </div>
      <div className='h-80 mx-5 my-10 flex justify-between items-center'>
        <img src={Livingroom4} className='h-80 flex-row ml-5' alt="Living 4"/>
        <img src={Livingroom5} className='h-80 flex-row' alt="Living 5"/>
        <img src={Livingroom6} className='h-80 flex-row mr-5' alt="Living 6"/>
      </div>
      <div className='bg-orange-400 h-20 mt-10'>
        <h1 className='text-center text-white text-xl font-xl pt-6'>Modular Kitchen</h1>
      </div>
      <div className='h-80 mx-5 my-10 flex justify-between items-center'>
        <img src={Kitchen1} className='h-80 flex-row' alt="Kitchen 1"/>
        <img src={Kitchen2} className='h-80 flex-row ml-5 mr-5' alt="Kitchen 2"/>
        <img src={Kitchen3} className='h-80 flex-row' alt="Kitchen 3"/>
      </div>
      <div className='h-80 mx-5 my-10 flex justify-between items-center'>
        <img src={Kitchen4} className='h-80 flex-row ' alt="Kitchen 4"/>
        <img src={Kitchen5} className='h-80 flex-row ml-5 mr-5' alt="Kitchen 5"/>
        <img src={Kitchen6} className='h-80 flex-row ' alt="Kitchen 6"/>
      </div>
    </div>
  </div>
  )
}
