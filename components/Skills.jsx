import Image from "next/image";
import React from "react";

import {
  HTML,
  CSS,
  ReactJS,
  Bootstrap,
  Tailwind,
  Git,
  JSImage,
  Terminal,
} from "../public/assets";

const Skills = () => {
  return (
    <div id='skill' className='w-full lg:h-screen p-2 md:ml-4 sm:ml-4'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4 text-gray-300'>What I Can Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6  -gray-300 rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div>
                <Image src={HTML} alt='HTML Icon' width={100} height={100} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className='p-6  -gray-300  rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div>
                <Image src={CSS} alt='CSS Icon' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-6  -gray-300  rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div>
                <Image src={JSImage} alt='JavaScript Icon' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScripts</h3>
              </div>
            </div>
          </div>
          <div className='p-6  -gray-300  rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div>
                <Image src={ReactJS} alt='React Icon' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>ReactJS</h3>
              </div>
            </div>
          </div>
          <div className='p-6  -gray-300  rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div>
                <Image src={Tailwind} alt='Tailwind Icon' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className='p-6  -gray-300  rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div>
                <Image src={Bootstrap} alt='Bootstrap Icon' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Bootstrap</h3>
              </div>
            </div>
          </div>
          <div className='p-6  -gray-300  rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div>
                <Image src={Git} alt='Git Icon' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Git</h3>
              </div>
            </div>
          </div>
          <div className='p-6  -gray-300  rounded-xl hover:scale-105 ease-in duration-300 bg-white'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div>
                <Image src={Terminal} alt='Git Icon' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Terminal</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
