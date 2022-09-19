import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, backgroundImg, projectUrl, projectP }) => {
  return (
    <div>
      <div className='relative flex items-center justify-center h-auto w-full bg-white  shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
        <Image
          src={backgroundImg}
          alt='Imagen proyecto 1'
          className='rounded-xl group-hover:opacity-10'
        />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <h3 className='text-2xl text-white tracking-widest text-center'>
            {title}
          </h3>
          <p className='pb-4 pt-2 text-white text-center'>{projectP}</p>
          <Link href={projectUrl}>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold  text-lg cursor-pointer'>
              More Info
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;