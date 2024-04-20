import React from "react";
import cv from "../assets/FrontCv.pdf";

const About = () => {
  return (
    <div
      name="about"
      className=" w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-center w-full h-full">
        <div className="pb-5">
          <p className=" w-fit mx-auto text-4xl font-bold text-center border-b-4 border-gray-400">
            About
          </p>
        </div>
        <p className="text-2xl mt-5 font-semibold md:mt-5">
          I,m a <span className=" text-cyan-600 ">Frontend Developer</span>
        </p>
        <p className="text-base mt-5 md:text-lg">
          I'm Naman Kumar Matiyara, a budding frontend developer eager to make
          my mark in the Tech world. Recently graduated with a degree in MCA, I
          specialize in HTML, CSS, JavaScript, Bootstrap,Tailwind and React.And
          had done Phpfullstack Internship and Voational Training in Web
          Develpment.
        </p>
        <br />
        <p className="text-base md:text-lg">
          Despite being a fresher, I bring enthusiasm, a hunger for learning,
          and a passion for crafting beautiful, user-friendly interfaces.I'm
          excited to embark on this journey, honing my skills, and contributing
          to innovative projects. Let's build something amazing together!
        </p>

        <div className="mt-2">
          <a href={cv} target="_blank">
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer ">
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
