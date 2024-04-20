import React from "react";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import pic from "../assets/Nimg.png";

const Footer = () => {
  return (
    <div className=" h-auto flex flex-col gap-5 items-center p-8  w-full text-white  bg-gradient-to-t from-black to-gray-800 md:h-48 md:flex-row md:p-3">
      <div className="hidden  w-1/12    h-full  text-2xl font-sign ml-2 md:block">
        {/* NAMAN. */}
      </div>
      <div className="w-full  flex  flex-col gap-2 justify-center items-center  text-2xl font-sign ml-2  md:border-x-4 md:border-x-gray-700 md:w-1/2 md:h-full ">
        <div>
          <img src={pic} alt="Founder" className="  size-20 rounded-full" />
        </div>
        <p className=" text-2xl ">Naman Kumar Matiyara</p>
        <p className=" text-lg ">"Believe. Persist. Succeed."</p>
      </div>
      <div className="w-full  flex flex-col gap-3 justify-center items-center  text-2xl font-sign ml-2 md:border-r-4 md:border-x-gray-700  md:w-1/2 md:h-full">
        <p className="text-3xl font-bold">Social Media</p>
        <article className="flex flex-row gap-3 ">
          <a
            href="https://www.linkedin.com/in/naman-kumar-matiyara"
            target={"blank"}
          >
            <AiFillLinkedin
              size={28}
              className="hover:scale-110 duration-300 hover:text-gray-400"
            />
          </a>
          <a href="https://github.com/Naman0504" target={"blank"}>
            <AiFillGithub
              size={28}
              className="hover:scale-110 duration-300 hover:text-gray-400"
            />
          </a>
          <a href="/" target={"blank"}>
            <AiFillInstagram
              size={28}
              className="hover:scale-110 duration-300 hover:text-gray-400"
            />
          </a>
        </article>
      </div>
    </div>
  );
};

export default Footer;
