import React, { useState } from 'react';
import logo from "../assets/LOGO.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Link } from 'react-scroll'

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleQuick = () => {
        setNav(!nav)
    }

    return (
        <div className='fixed font-bold shadow-lg text-white w-full h-[80px] flex justify-between items-center px-5 bg-violet-400 ' >
            <div>
                <img src={logo} alt="Logo anurag kasudhan" title='Logo Anurag kasudhan' style={{ width: "120px" }} />
            </div>
            <div>
                <ul className='flex hidden md:flex' >
                    <li>
                        <Link to="home" smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link to="work" smooth={true} duration={500}>
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div onClick={handleQuick} className=' md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-zinc-800 flex flex-col justify-center items-center'} >
                <li className=' py-5 text-2xl '><Link onClick={handleQuick} to="home" smooth={true} duration={500}>
                    Home
                </Link></li>
                <li className=' py-5 text-2xl '><Link onClick={handleQuick} to="about" smooth={true} duration={500}>
                    About
                </Link></li>
                <li className=' py-5 text-2xl '><Link onClick={handleQuick} to="skills" smooth={true} duration={500}>
                    Skills
                </Link></li>
                <li className=' py-5 text-2xl '><Link onClick={handleQuick} to="work" smooth={true} duration={500}>
                    Work
                </Link></li>
                <li className=' py-5 text-2xl '><Link onClick={handleQuick} to="contact" smooth={true} duration={500}>
                    Contact
                </Link></li>
            </ul>

            <div className=" hidden md:flex fixed flex-col bg-violet-400 top-[35%] left-0 ">
                <ul>
                    <a href=""><li><FaLinkedin size={30} /></li></a>
                    <a href=""><li><FaGithub size={30} /></li></a>
                    <a href=""><li><FaFacebook size={30} /></li></a>
                </ul>
            </div>

        </div>
    )
}

export default Navbar