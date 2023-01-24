import React from 'react';
import './App.css';

import { Link, Routes, Route } from 'react-router-dom';
import { Home, CreatePost } from './pages/index.js';

import Logo from './assets/logo.png';

function App() {
  return (
    <>

      {/* This is the navigation bar */}
      <header className='w-full bg-white flex justify-between items-center px-4 sm:px-8 py-2 border-b border-b-[#e6ebf4]'>

        <Link to="/" className='flex items-center justify-start gap-1'>
          <img src={Logo} alt="logo" className='w-11'/>
          <p className='font-bold text-2xl' style={{ fontFamily:"poppins" }}>Artistica</p>
        </Link>

        <Link to="/create-post" className='bg-[#6469ff] hover:bg-[#3e43d4] transition-all px-6 py-2 rounded-md cursor-pointer font-inter font-medium text-white'>
          Create
        </Link>

      </header>


      {/* This is main application section */}

      <main className='w-full bg-[#f9fafe] min-h-[calc(100vh-61px)] px-4 py-8 sm:p-8'>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/create-post' element={ <CreatePost/> } />
        </Routes>
      </main>
    
    </>
  )
}

export default App
