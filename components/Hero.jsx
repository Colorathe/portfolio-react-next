import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  return (
    <div id='hero' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <h1 className='py-4 text-gray-300'>
            Hey there, I&apos;m
            <span className='text-[#5651e5]'> Joaquin Vulcano</span>
          </h1>
          <h1 className='py-2 text-gray-300'>Front-End Developer</h1>
          <p className='py-4 text-gray-300 max-w-[70%] m-auto'>
            I&apos;m front-end Developer especialzing in building excepcional
            digital experiencies. Currently, I&apos;m focused on building
            responsive front-end web applications while learning back-end
            technologies
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4 text-dark'>
            <div className='rounded-full  shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-white'>
              <a href='https://www.linkedin.com/in/joaquinevulcano/'>
                <FaLinkedinIn />
              </a>
            </div>
            <div className='rounded-full  -gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-white'>
              <a href='https://github.com/Colorathe'>
                <FaGithub />
              </a>
            </div>
            <div className='rounded-full  -gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-white'>
              <a href='https://docs.google.com/document/d/1nR9uczz08em-FiRN2ybhDb8kprced1qb8h3W3wfCCjs/edit?usp=sharing'>
                <BsFillPersonLinesFill />
              </a>
            </div>
            <div className='rounded-full  -gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-white'>
              <Link href='#contact'>
                <AiOutlineMail />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
