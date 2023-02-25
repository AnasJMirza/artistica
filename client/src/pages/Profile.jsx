import React from 'react';
import profile from '../assets/profile.png';
import anas from '../assets/anas.jpeg'

const Profile = () => {

    return (
        <div>
            <div className='bg-gray-500 h-48 w-full'></div>
            <div className='flex flex-col justify-center items-center relative bottom-20'>
                <img src={profile} alt="profile" className='w-40 border-4 rounded-full'/>
                <p>Muhammad Anas Javed</p>
            </div>
            <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3 mt-5'>
              <img src={anas} alt="" />
              <img src={anas} alt="" />
              <img src={anas} alt="" />
              <img src={anas} alt="" />
              <img src={anas} alt="" />
            </div>
        </div>
    );
};

export default Profile;