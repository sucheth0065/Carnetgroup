import React from "react";
import contact from '../assets/contact.jpg'

export default function CountactUs(){
    return(
        <div className='mt-32'>
            <div>
                <img src={contact} alt='meeting' className='h-80 w-screen' />
            </div>
            <div className="h-auto w-screen bg-zinc-900 text-center text-zinc-50 text-4xl pt-6 pb-6">
                Get in touch with us to design<br/>your dream home
            </div>
            <div className="h-screen bg-slate-50">

            </div>
        </div>
    )
}