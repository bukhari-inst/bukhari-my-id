import React from 'react';
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from 'react-icons/ai';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { FaPlay } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import resumePDF from '../../assets/Resume.pdf';

const Hero = () => {
  return (
    <div id="home" className="hero bg-primary ">
      <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" z-10 left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className="text-white text-5xl font-bold sm:text-[2rem]"
            >
              Hello, I'm M Bukhari
            </h2>
            <TypeAnimation
              data-aos="fade-up"
              sequence={['Web Developer', 2000, 'Freelancer', 2000, '']}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-yellow-500 text-4xl font-bold sm:text-3xl"
            />
            <p
              // data-aos="fade-up"
              className=" text-[1.1rem] font-medium w-3/4 md:w-full text-gray-100 sm:text-[.95rem]"
            >
              Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <a
              href=""
              className=" bg-secondary text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-yellow-500"
            >
              <span> Hire Me</span>
            </a>
            <a
              href={resumePDF}
              className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-yellow-500"
              download
            >
              <div className="flex items-center gap-1">
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              <li>
                <a href="">
                  {' '}
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl text-white hover:scale-125" />{' '}
                </a>
              </li>
              <li>
                <a href="">
                  {' '}
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl text-white hover:scale-125 " />{' '}
                </a>
              </li>
              <li>
                <a href="">
                  {' '}
                  <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl text-white hover:scale-125  " />{' '}
                </a>
              </li>
              <li>
                <a href="">
                  {' '}
                  <FaFacebook className=" h-[1.8rem] w-[1.8rem] text-xl text-white hover:scale-125  " />{' '}
                </a>
              </li>
              <li>
                <a href="">
                  {' '}
                  <AiFillTwitterCircle className=" h-[1.8rem] w-[1.8rem] text-xl text-white hover:scale-125  " />{' '}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" z-10 right  top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[88%] w-fit flex items-center sm:items-end">
            <img
              data-aos="fade-up"
              className=" h-[90%]  w-full object-cover md:h-[95%] md:m-auto sm:m-0"
              src="https://i.postimg.cc/pTn61Gr1/Untitled-design222-modified.png"
              // src={mine}
              alt="mine"
            />
            <div className=" absolute bottom-10 md:bottom-3 right-8 md:right-2">
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className=" relative cursor-pointer"
              >
                <img
                  className=" w-[135px] md:w-[90px] circle-text"
                  src="https://ik.imagekit.io/imgkitt/tr:w-400/Full_Stack_Developer2.png?updatedAt=1683134009107"
                  alt=""
                />
                <FaPlay className=" text-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg
        className="banner"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#535da1"
          fill-opacity="1"
          d="M0,160L24,160C48,160,96,160,144,138.7C192,117,240,75,288,64C336,53,384,75,432,106.7C480,139,528,181,576,208C624,235,672,245,720,240C768,235,816,213,864,186.7C912,160,960,128,1008,133.3C1056,139,1104,181,1152,202.7C1200,224,1248,224,1296,197.3C1344,171,1392,117,1416,90.7L1440,64L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default Hero;
