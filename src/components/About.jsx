import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-pink-200 text-zinc-700'>
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 ' >
                    <div className=' sm:text-right pb-2 pl-4 ' >
                        <p className='font-bold inline border-b-4 border-teal-500 text-4xl'>About</p>
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 ' >
                    <div className='text-2xl font-bold sm:text-right px-4'>
                        <p> Hi. I am Anurag, it's nice to meet you. Please ake a look around!</p>
                    </div>
                    <div className='px-4 font-bold text-zinc-700'>
                        <p>
                            I am passionate about learning and implementing new techniques, just like this website which I build while learning Tailwind css.
                            I love making customised websites and turning ui designs into effeciently performing websites.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About