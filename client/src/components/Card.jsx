import React from 'react';
import { downloadImage } from '../utils';

import download from '../assets/download.png'

const Card = ({_id, name, prompt, photo }) => {
    return (
        <div className='rounded-xl group relative shadow-card hover:shadow-cardhover card '>
            <img 
            src={photo} 
            alt={prompt} 
            className="rounded-xl h-auto w-full object-cover"
            
            />

            <div className='group-hover:flex flex-col gap-4 hidden absolute bottom-0 right-0 left-0 bg-[#10131f] m-2 p-5 rounded-md '>
                <p className="text-white text-md ">{prompt}</p>
                <div className='flex items-center justify-between'>
                    <div className='flex gap-2 items-center justify-start'>
                        <p className='uppercase w-7 h-7 rounded-full text-white text-xs bg-green-500 flex items-center justify-center'>{name[0]}</p>
                        <p className='capitalize text-white'>{name}</p>
                    </div>
                    <button type="button" onClick={() => downloadImage(_id, photo)} className="outline-none bg-transparent border-none">
                      <img src={download} alt="download" className="w-6 h-6 object-contain invert" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;