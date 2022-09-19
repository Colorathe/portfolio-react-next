import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ContactImage } from "../public/assets/index";

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen bg-slate-900'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full bg-slate-900'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Contact
        </p>
        <h2 className='py-4 text-gray-300'>Let&apos;s Connect</h2>
        <div className='grid lg:grid-cols-6 gap-8 '>
          {/* left */}
          <div className='col-span-3 lg-col-span-2 w-full h-hull shadow shadow-gray-400 rounded-xl p-4 bg-white'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  src={ContactImage}
                  alt='Imagen Contact'
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                />
              </div>
              <div>
                <h2 className='py-2 text-dark'>Joaquin Vulcano</h2>
                <p>Front-End Developer</p>
                <p className='py-4'>
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className='upppercase pt-8 text-center'>Connect With Me </p>
                <div className='flex items-center justify-center py-4 gap-3'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 bg-white'>
                    <a href='https://www.linkedin.com/in/joaquinevulcano/'>
                      <FaLinkedinIn />
                    </a>
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 bg-white'>
                    <a href='https://github.com/Colorathe'>
                      <FaGithub />
                    </a>
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 bg-white'>
                    <a href='#contact'>
                      <AiOutlineMail />
                    </a>
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 bg-white'>
                    <a href='https://docs.google.com/document/d/1nR9uczz08em-FiRN2ybhDb8kprced1qb8h3W3wfCCjs/edit?usp=sharing'>
                      <BsFillPersonLinesFill />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className='col-span-3 w-full h-auto shadow shadow-gray-400 rounded-xl lg:p-4 bg-white'>
            <div className='p-4'>
              <form
                action='https://formsubmit.co/cfe6db4a9d5362c711cddef4c880782f'
                method='POST'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2 text-dark'>
                      Name
                    </label>
                    <input
                      name='name'
                      id='name'
                      type='text'
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      required
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2 text-dark'>
                      Subject
                    </label>
                    <input
                      name='subject'
                      id='subject'
                      type='text'
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      required
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2 text-dark'>
                    Email
                  </label>
                  <input
                    name='email'
                    id='email'
                    type='email'
                    className='border-2 rounded-lg p-3 flex border-gray-300 '
                    required
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2 text-dark'>
                    Message
                  </label>
                  <textarea
                    id='comments'
                    name='comments'
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    required
                  ></textarea>
                </div>
                <button className='uppercase w-full p-4 text-gray-100 mt-4'>
                  Send Message
                </button>
                <input
                  type='hidden'
                  name='_next'
                  value='https://portfolio-colorathe.netlify.app/#contact'
                />
                <input type='hidden' name='_captcha' value='false' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
