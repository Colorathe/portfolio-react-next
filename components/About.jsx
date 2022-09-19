import Image from "next/image";
import React from "react";
import { AvatarImage } from "../public/assets";

function About() {
  return (
    <div
      id='about'
      className='w-full md:h-screen p-2 flex items-center py-16 md:ml-4 sm:ml-4'
    >
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4 text-gray-300'>Who I Am</h2>
          <p className='py-2 text-gray-300'>
            My name is Joaquin Vulcano I am Front End Developer based in
            Argentina 🇦🇷 .
          </p>
          <p className='py-2 text-gray-300'>
            I describe myself as a passionate developer, autodidactic who loves
            coding and the web platform. In my free times you can find me at the
            gym 🏋️‍♂️, coding or playing videogames 🖥.
          </p>
          <p className='py-2 text-gray-300'>
            I am currently learning ReactJS and NodeJS. I also have a job as a
            full time Front-End developer. I am a very proactive, passionate,
            self-taught and charismatic person. I really enjoy working in a team
            and meeting new people all the time.
          </p>
          <a href='#project'>
            <p className='py-2 text-gray-300 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </a>
        </div>
        <div className='w-full h-auto m-auto rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 bg-white'>
          <Image
            src={AvatarImage}
            width={400}
            height={400}
            alt='Joaquin Vulcano Imagen'
            className='rounded-xl'
          />
        </div>
      </div>
    </div>
  );
}

export default About;
