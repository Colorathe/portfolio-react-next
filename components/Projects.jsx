import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  ImgProject1,
  ImgProject2,
  ImgProject3,
  ImgProject4,
  ImgProject5,
  ImgProject6,
  ImgProject7,
} from "../public/assets";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id='project' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4 text-gray-300'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Error404-Page'
            backgroundImg={ImgProject1}
            projectUrl='https://error404-page-colorathe.netlify.app'
            projectP='HTML, CSS'
          />
          <ProjectItem
            title='Admin-Citas-page'
            backgroundImg={ImgProject2}
            projectUrl='https://citas-veterinaria-dante.netlify.app'
            projectP='ReactJS, Tailwind'
          />
          <ProjectItem
            title='Login Page'
            backgroundImg={ImgProject3}
            projectUrl='https://login-page-colorathe.netlify.app'
            projectP='ReactJS, Tailwind'
          />
          <ProjectItem
            title='Cripto App'
            backgroundImg={ImgProject4}
            projectUrl='https://cotizador-criptomonedas2-reactjs.netlify.app'
            projectP='ReactJS, Tailwind'
          />
          <ProjectItem
            title='Gifs Master Seach'
            backgroundImg={ImgProject5}
            projectUrl='https://buscador-gifs-joaquin.netlify.app'
            projectP='ReactJS, CSS'
          />
          <ProjectItem
            title='Todo App'
            backgroundImg={ImgProject6}
            projectUrl='https://to-do-app-colorathe.netlify.app/'
            projectP='ReactJS, Tailwind, Firebase'
          />
          <ProjectItem
            title='Chat app'
            backgroundImg={ImgProject7}
            projectUrl='https://chat-app-colorathe.netlify.app/'
            projectP='ReactJS, Tailwind, Firebase'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
