import React from 'react'
import './App.css'

import { Link, Routes, Route } from 'react-router-dom'

import Logo from './assets/logo.png'

function App() {
  return (
    <>

      <header className='w-full bg-white flex justify-between items-center px-4 sm:px-8 py-2 border-b border-b-[#e6ebf4]'>

        <Link to="/" className='flex items-center justify-start gap-1'>
          <img src={Logo} alt="logo" className='w-11'/>
          <p className='font-bold text-2xl' style={{ fontFamily:"poppins" }}>Artistica</p>
        </Link>

        <Link to="/create-post" className='bg-[#6469ff] px-6 py-2 rounded cursor-pointer font-inter text-white'>
          Create
        </Link>

      </header>
    
    </>
  )
}

export default App
