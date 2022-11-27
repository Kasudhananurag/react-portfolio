import React from 'react';
import tailwind from "../assets/tailwind.png";
import css from "../assets/css.png";
import html from "../assets/html.png";
import react from "../assets/react.png";
import js from "../assets/javascript.png";
import bs from "../assets/bs.png";
import php from "../assets/php.png";
import ms from "../assets/mysql.png";

const Skills = () => {
  return (
    <div name='skills' className='w-full upr h-screen bg-pink-200'>
      <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
        <div className="    " >
          <p className='text-4xl font-bold text-zinc-700 py-4 '><span className='border-b-4 border-pink-500'>Worked with</span></p>
          <p>These are the technologies I have worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='hover:shadow-lg hover:shadow-black-900 my-2 p-3 hover:scale-110 duration-150'>
            <img className='w-20 mx-auto' src={html} alt="HTML icon" />
            {/* <p><b>Experience</b></p> */}
            <p>HTML</p>
          </div>
          <div className='hover:shadow-lg hover:shadow-black-800 my-2 p-3 hover:scale-110 duration-150'>
            <img className='w-20 mx-auto' src={css} alt="HTML icon" />
            <p>CSS</p>
          </div>
          <div className='hover:shadow-lg hover:shadow-black-800 my-2 p-3 hover:scale-110 duration-150'>
            <img className='w-20 mx-auto' src={js} alt="HTML icon" />
            <p>Javascript</p>
          </div>
          <div className='hover:shadow-lg hover:shadow-black-800 my-2 p-3 hover:scale-110 duration-150'>
            <img className='w-20 mx-auto' src={php} alt="HTML icon" />
            <p className='mt-10'>Php</p>
          </div>
          <div className='hover:shadow-lg hover:shadow-black-800 my-2 p-3 hover:scale-110 duration-150'>
            <img className='w-20 mx-auto' src={tailwind} alt="HTML icon" />
            <p>Tailwind Css</p>
          </div>
          <div className='hover:shadow-lg hover:shadow-black-800 my-2 p-3 hover:scale-110 duration-150'>
            <img className='w-20 mx-auto' src={bs} alt="HTML icon" />
            <p>Bootstrap</p>
          </div>
          <div className='hover:shadow-lg hover:shadow-black-800 my-2 p-3 hover:scale-110 duration-150'>
            <img className='w-20 mx-auto' src={react} alt="HTML icon" />
            <p>React JS</p>
          </div>
          <div className='hover:shadow-lg hover:shadow-black-800 my-2 p-3 hover:scale-110 duration-150'>
            <img className='w-20 mx-auto' src={ms} alt="HTML icon" />
            <p>MySQL</p>
          </div>
        </div>
      </div>
      <br />
    </div>
  )
}

export default Skills