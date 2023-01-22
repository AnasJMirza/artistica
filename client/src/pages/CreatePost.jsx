import React, { useState } from 'react';

import { getRandomPrompts } from '../utils';
import { FormField, Loader } from '../components';

import preview from '../assets/frame.png';

const CreatePost = () => {

    // states

    const [form, setForm] = useState(
        {
            name: '',
            photo: '',
            prompt: '',
        }
    )

    const [loader, setLoader] = useState(false);

    const [isGeneratingImage, setIsGeneratingImage] = useState(false);



    // logical funtions

    const handleSubmit = () => {
        
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value})
   
    }

    const handleSurpriseMe = () => {
        const randomPrompt = getRandomPrompts(form.prompt)
        setForm({ ...form, prompt: randomPrompt });
    }


    return (
        <section className='max-w-7xl mx-auto'>
            <div>
                <h1 className='font-extrabold text-[32px] text-[#222328]'>Create your own images</h1>
                <p className='text-[14px] text-[#666e75] mt-2 max-w-[600px]'>Create stunning, visually captivating and imaginative images created by Artistica's advanced AI technology</p>
            </div>

            <form className='mt-16 flex flex-col gap-5' onSubmit={handleSubmit}>

                <FormField
                labelName="Your Name"
                type="text"
                name="name"
                placeholder="Ex., Muhammad Ahmad"
                value={form.name}
                handleChange={handleChange}
                />

                <FormField
                labelName="Prompt"
                type="text"
                name="prompt"
                placeholder="a painting of a fox in the style of Starry Night"
                value={form.prompt}
                handleChange={handleChange}
                isSurpriseMe
                handleSurpriseMe={handleSurpriseMe}
                />

                <div className='relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-80 p-3 h-80 flex justify-center items-center'>
                    {
                        form.photo ? (
                            <img src={form.photo} alt={form.prompt} />
                        ) : (
                            <img src={preview} alt='abc'  className='w-9/12 h-9/12 object-contain opacity-40'/>
                        )
                    }

                    {
                        isGeneratingImage && (
                            <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'>
                                <Loader />
                            </div>
                        )
                    }
                </div>

                <div>
                    <button
                    type="button"
                    className='p-3 w-full bg-[#6469ff] font-semibold text-white rounded'
                    >
                        {isGeneratingImage ? 'Generating...' : 'Generate'}
                    </button>
                </div>

                <div className='mt-0'>
                    <p className=' text-[#666e75] text-[14px] max-w-[500px]'>Once you have crafted the desired image, it can be easily shared with the wider community for others to enjoy</p>
                    <button type='submit' className='mt-3 p-3 w-full bg-green-600 font-semibold text-white rounded'>
                        {loader ? 'Sharing...' : 'Share With the community'}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default CreatePost;