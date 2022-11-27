import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full upr h-screen bg-pink-200 flex justify-center items-center p-4 '>
        <form method='POST' action="https://getform.io/f/c044c532-fa0b-403a-afaa-b6aadfbd7b13" className='flex flex-col max-w-[600px] w-full '>
            <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-rose-500 text-zinc-600 '>Contact</p>
            <p className='text-zinc-600 py-4'>Submit the form below or mail me <a className='text-rose-500' href="mailto:anuragkasudhan98@gmail.com">here</a> </p>
            </div>
            <input type="text" name="name" className=' bg-violet-200  md:mx-auto md:w-[80%] p-2 mb-2 rounded sm:w-[60%] shadow' placeholder='Name' />
            <input type="email" name="email" className=' bg-violet-200 md:mx-auto md:w-[80%] p-2 my-2 rounded sm:w-[60%] shadow' placeholder='Email' />
            <textarea name="msg" id="" className='sm:w-[60%] p-2 my-2 md:mx-auto md:w-[80%] bg-violet-200 rounded' placeholder='Your message here' cols="20" rows="10"></textarea>
            <button className=' hover:bg-violet-500 hover:shadow-lg duration-150 p-3 rounded font-bold border-2 bg-violet-300 border-violet-400 sm:w-[100%] md:w-[40%] mx-auto ' >Get in touch!</button>
        </form>
    </div>
  )
}

export default Contact