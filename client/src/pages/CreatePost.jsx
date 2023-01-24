import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { getRandomPrompts } from '../utils';
import { FormField, Loader } from '../components';

import axios from '../axios.js'

import preview from '../assets/frame.png';

const CreatePost = () => {

    const navigate = useNavigate();

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

    const generateImage = async () => {
        if (form.prompt && form.name) {
            try {
                setIsGeneratingImage(true);
                const body = {
                    prompt: form.prompt,
                }
                const response = await axios.post('/api/v1/open-ai/', body);
                setForm({ ...form, photo: `data:image/jpeg;base64,${response.data.photo}` })
            } catch (error) {
                alert(error)
            } finally {
                setIsGeneratingImage(false);
            }
        } else {
            alert("please enter prompt");
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (form.prompt && form.name) {
            try {
                setLoader(true);
    
                const body = {
                    name: form.name,
                    prompt: form.prompt,
                    photo: form.photo,
                }
                const response = await axios.post('/api/v1/post/', body);
                navigate('/');
                
            } catch (error) {
                alert(error)
            } finally {
                setLoader(false);
            }
        } else {
            alert("fill all inputs")
        }
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value});
   
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
                placeholder="Ex., Anas Javed"
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

                <div className='relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 xs:w-full xs:h-auto md:w-96 md:h-96 p-3 flex justify-center items-center '>
                    {
                        form.photo ? (
                            <img src={form.photo} alt={form.prompt} className='w-full object-contain' />
                        ) : (
                            <img src={preview} alt='preview'  className='w-full object-contain opacity-40'/>
                        )
                    }

                    {
                        isGeneratingImage && (
                            <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'>
                                <div className='flex flex-col gap-2 justify-center items-center text-white'>
                                <Loader />
                                please wait...
                                </div>
                                    
                            </div>
                        )
                    }
                </div>

                <div>
                    <button
                    onClick={generateImage}
                    type="button"
                    className='p-3 w-full bg-[#6469ff] font-semibold text-white rounded'
                    >
                        {isGeneratingImage ? 'Generating...' : 'Generate'}
                    </button>
                </div>

                <div className='mt-0'>
                    <p className=' text-[#666e75] text-[14px] max-w-[500px]'>Once you have crafted the desired image, it can be easily shared with the wider community for others to enjoy</p>
                    <button  type='submit' className='mt-3 p-3 w-full bg-green-600 font-semibold text-white rounded'>
                        {loader ? 'Sharing...' : 'Share With the community'}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default CreatePost;