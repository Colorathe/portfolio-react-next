import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";

const property = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top left-0 wlfull h-[30vh] lg:h-[40vh] bg-black/80 z-10'>
          <Image
            className='absolute z-1'
            layout='fill'
            objectFit='cover'
            src=''
            alt='/'
          />
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2 '>Lorem, ipsum.</h2>
            <h3>React JS / Tailwind</h3>
          </div>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 p5-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti,
            perspiciatis assumenda. Nobis temporibus architecto, debitis
            reprehenderit iure consequuntur natus exercitationem magni, sapiente
            necessitatibus, mollitia asperiores? Non, quidem! Voluptas,
            veritatis quibusdam?
          </p>
          <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          <button className='px-8 py-2 mt-4 mr-8'>Code</button>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center p-2'>
                <RiRadioButtonFill />
                React
              </p>
            </div>
            <div>
              <p className='text-gray-600 py-2 flex items-center p-2'>
                <RiRadioButtonFill />
                Tailwind
              </p>
            </div>
            <div>
              <p className='text-gray-600 py-2 flex items-center p-2'>
                <RiRadioButtonFill />
                CSS
              </p>
            </div>
          </div>
        </div>
        <Link href='/#project'>
          <p className='underline cursor-pointer'>Back Home</p>
        </Link>
      </div>
    </div>
  );
};

export default property;
