import React from 'react';
import HeroBackground from '../../assets/HeroBackground.png';
import { IoIosSearch } from "react-icons/io";
import Lottie from 'lottie-react'
import Job_Animation from '../Jobs/Animation/Job_Animation.json'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className=' w-full h-screen flex justify-center items-center ' id='Hero'  
    style={{ backgroundImage: `url(${HeroBackground})`, 
    backgroundSize: '100% 100%',
     backgroundPosition: 'center' }}>

      <div className=" flex flex-col-reverse md:flex-row justify-center items-center gap-x-40">
        <div className="w-[50%] h-auto">
          <div className="my-10">
          <h1 className='text-4xl md:text-6xl font-bold'>
            Find Your <span className="text-secondary">Dream <br/>Job</span> Here Easy And Fast
          </h1>
          </div>
          <div className="w-full items-center gap-5">
                <div className="w-full flex items-center gap-3 bg-white rounded-lg px-4 shadow-sm border border-gray-400">
                    <IoIosSearch color="#6366f1"/>
                    <input
                        type="text"
                        placeholder="Search for Job title"
                        className="w-full h-10 bg-white rounded-lg outline-none text-gray-700"
                        // onChange={handleSearchChange}
                    />
                </div>
               
            </div>
        </div>
        <div className='w-[500px] h-[500px]'>
          <Lottie animationData={Job_Animation}/>
        </div>

      </div>

    </section>
  )
}

export default Hero