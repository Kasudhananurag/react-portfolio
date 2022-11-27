import React from 'react';
import { HiArrowNarrowRight } from "react-icons/hi";
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
    return (
        <div name='home' className="w-full h-screen bg-pink-200">
            <div className=' max-w-[1080px] mx-auto px-5 flex flex-col justify-center h-full '>
                <p className='font-bold text-slate-400 text-2xl' >Hi, my name is </p>
                <h1 className='font-bold text-slate-700 text-4xl'>Anurag Kasudhan</h1>
                <p className='text-slate-400 text-2xl'>I am a <span className='font-bold'><Typewriter loop={false} words={["Front end Developer", "Backend Developer", "Mern Stack Developer"]} /></span> </p>
                <div>
                    <button className='flex group justify-center py-4 my-3 px-5 bg-rose-200 shadow-lg border-2 items-center border-pink-600 hover:bg-rose-400 hover:font-bold '>
                        View my work
                        <span className='ml-2 group-hover:rotate-90 duration-300'><HiArrowNarrowRight /></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;