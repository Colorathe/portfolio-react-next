import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { DiCodeBadge } from "react-icons/di";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { AvatarImage } from "../public/assets";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/loginpage" ||
      router.asPath === "/errorpage" ||
      router.asPath === "/weatherapp" ||
      router.asPath === "/admincitas" ||
      router.asPath === "/cryptoapp" ||
      router.asPath === "/gifseach"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-gray-200'>
        <a href='/'>
          <Image src={AvatarImage} alt='imagen avatar' width={40} height={40} />
        </a>

        <div>
          <ul
            style={{ color: `${linkColor}` }}
            className='hidden md:flex font-semibold '
          >
            <Link href='/#hero'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link href='/#about'>
              <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
            </Link>
            <Link href='/#skill'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
            </Link>
            <Link href='/#project'>
              <li className='ml-10 text-sm uppercase hover:border-b'>
                Projects
              </li>
            </Link>
            <Link href='/#contact'>
              <li className='ml-10 text-sm uppercase hover:border-b'>
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className='md:hidden '>
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-200 p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className='flex w-full items-center justify-between '>
              <Image
                src={AvatarImage}
                alt='imagen avatar'
                width={40}
                height={40}
              />
              <div onClick={handleNav}>
                <button
                  type='button'
                  class='bg-white rounded-md p-2 inline-flex items-center justify-center text-black hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                >
                  <span class='sr-only'>Close menu</span>
                  <svg
                    class='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
                {/* <AiOutlineClose className="text-dark" /> */}
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4 text-dark'>Take a tour</p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase font-semibold text-dark'>
              <Link href='/#hero'>
                <li className='py-4 text-sm'>Home</li>
              </Link>
              <Link href='/#about'>
                <li className='py-4 text-sm'>About</li>
              </Link>
              <Link href='/#skill'>
                <li className='py-4 text-sm'>Skills</li>
              </Link>
              <Link href='/#project'>
                <li className='py-4 text-sm'>Projects</li>
              </Link>
              <Link href='/#contact'>
                <li className='py-4 text-sm'>Contact</li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-dark font-semibold'>
                Let's Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
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
                  <a href='/#contact'>
                    <AiOutlineMail />
                  </a>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 bg-white'>
                  <a href='/#about'>
                    <BsFillPersonLinesFill />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
